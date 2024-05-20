(()=>{"use strict";var t={5311:t=>{t.exports=jQuery}},e={};function i(s){var n=e[s];if(void 0!==n)return n.exports;var o=e[s]={exports:{}};return t[s](o,o.exports,i),o.exports}(()=>{var t={exports:{}};function e(){}e.prototype={on:function(t,e,i){var s=this.e||(this.e={});return(s[t]||(s[t]=[])).push({fn:e,ctx:i}),this},once:function(t,e,i){var s=this;function n(){s.off(t,n),e.apply(i,arguments)}return n._=e,this.on(t,n,i)},emit:function(t){for(var e=[].slice.call(arguments,1),i=((this.e||(this.e={}))[t]||[]).slice(),s=0,n=i.length;s<n;s++)i[s].fn.apply(i[s].ctx,e);return this},off:function(t,e){var i=this.e||(this.e={}),s=i[t],n=[];if(s&&e)for(var o=0,r=s.length;o<r;o++)s[o].fn!==e&&s[o].fn._!==e&&n.push(s[o]);return n.length?i[t]=n:delete i[t],this}},t.exports=e,t.exports.TinyEmitter=e;function s(){}function n(t){return parseFloat(t)||0}class o{constructor(t,e){this.x=n(t),this.y=n(e)}static equals(t,e){return t.x===e.x&&t.y===e.y}}class r{constructor(t,e,i,s,n){this.id=n,this.left=t,this.top=e,this.width=i,this.height=s}static intersects(t,e){return t.left<e.left+e.width&&e.left<t.left+t.width&&t.top<e.top+e.height&&e.top<t.top+t.height}}var h={BASE:"shuffle",SHUFFLE_ITEM:"shuffle-item",VISIBLE:"shuffle-item--visible",HIDDEN:"shuffle-item--hidden"};let l=0;class a{constructor(t,e){l+=1,this.id=l,this.element=t,this.isRTL=e,this.isVisible=!0,this.isHidden=!1}show(){this.isVisible=!0,this.element.classList.remove(h.HIDDEN),this.element.classList.add(h.VISIBLE),this.element.removeAttribute("aria-hidden")}hide(){this.isVisible=!1,this.element.classList.remove(h.VISIBLE),this.element.classList.add(h.HIDDEN),this.element.setAttribute("aria-hidden",!0)}init(){this.addClasses([h.SHUFFLE_ITEM,h.VISIBLE]),this.applyCss(a.Css.INITIAL),this.applyCss(this.isRTL?a.Css.DIRECTION.rtl:a.Css.DIRECTION.ltr),this.scale=a.Scale.VISIBLE,this.point=new o}addClasses(t){t.forEach((t=>{this.element.classList.add(t)}))}removeClasses(t){t.forEach((t=>{this.element.classList.remove(t)}))}applyCss(t){Object.keys(t).forEach((e=>{this.element.style[e]=t[e]}))}dispose(){this.removeClasses([h.HIDDEN,h.VISIBLE,h.SHUFFLE_ITEM]),this.element.removeAttribute("style"),this.element=null}}a.Css={INITIAL:{position:"absolute",top:0,visibility:"visible",willChange:"transform"},DIRECTION:{ltr:{left:0},rtl:{right:0}},VISIBLE:{before:{opacity:1,visibility:"visible"},after:{transitionDelay:""}},HIDDEN:{before:{opacity:0},after:{visibility:"hidden",transitionDelay:""}}},a.Scale={VISIBLE:1,HIDDEN:.001};let d=null;var u=()=>{if(null!==d)return d;const t=document.body||document.documentElement,e=document.createElement("div");e.style.cssText="width:10px;padding:2px;box-sizing:border-box;",t.appendChild(e);const{width:i}=window.getComputedStyle(e,null);return d=10===Math.round(n(i)),t.removeChild(e),d};function c(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window.getComputedStyle(t,null),s=n(i[e]);return u()||"width"!==e?u()||"height"!==e||(s+=n(i.paddingTop)+n(i.paddingBottom)+n(i.borderTopWidth)+n(i.borderBottomWidth)):s+=n(i.paddingLeft)+n(i.paddingRight)+n(i.borderLeftWidth)+n(i.borderRightWidth),s}const m={reverse:!1,by:null,compare:null,randomize:!1,key:"element"};function f(t,e){const i={...m,...e},s=Array.from(t);let n=!1;return t.length?i.randomize?function(t){let e=t.length;for(;e;){e-=1;const i=Math.floor(Math.random()*(e+1)),s=t[i];t[i]=t[e],t[e]=s}return t}(t):("function"==typeof i.by?t.sort(((t,e)=>{if(n)return 0;const s=i.by(t[i.key]),o=i.by(e[i.key]);return void 0===s&&void 0===o?(n=!0,0):s<o||"sortFirst"===s||"sortLast"===o?-1:s>o||"sortLast"===s||"sortFirst"===o?1:0})):"function"==typeof i.compare&&t.sort(i.compare),n?s:(i.reverse&&t.reverse(),t)):[]}const p={},g="transitionend";let _=0;function y(t){return!!p[t]&&(p[t].element.removeEventListener(g,p[t].listener),p[t]=null,!0)}function I(t,e){const i=(_+=1,g+_),s=t=>{t.currentTarget===t.target&&(y(i),e(t))};return t.addEventListener(g,s),p[i]={element:t,listener:s},i}function E(t){return Math.max(...t)}function v(t,e,i,s){let n=t/e;return Math.abs(Math.round(n)-n)<s&&(n=Math.round(n)),Math.min(Math.ceil(n),i)}function b(t,e,i){if(1===e)return t;const s=[];for(let n=0;n<=i-e;n++)s.push(E(t.slice(n,n+e)));return s}function T(t,e){const i=(s=t,Math.min(...s));var s;for(let s=0,n=t.length;s<n;s++)if(t[s]>=i-e&&t[s]<=i+e)return s;return 0}function S(t,e){const i={};t.forEach((t=>{i[t.top]?i[t.top].push(t):i[t.top]=[t]}));let s=[];const n=[],h=[];return Object.keys(i).forEach((t=>{const o=i[t];n.push(o);const l=o[o.length-1],a=l.left+l.width,d=Math.round((e-a)/2);let u=o,c=!1;if(d>0){const t=[];c=o.every((e=>{const i=new r(e.left+d,e.top,e.width,e.height,e.id),n=!s.some((t=>r.intersects(i,t)));return t.push(i),n})),c&&(u=t)}if(!c){let t;if(o.some((e=>s.some((i=>{const s=r.intersects(e,i);return s&&(t=i),s}))))){const e=h.findIndex((e=>e.includes(t)));h.splice(e,1,n[e])}}s=s.concat(u),h.push(u)})),h.flat().sort(((t,e)=>t.id-e.id)).map((t=>new o(t.left,t.top)))}function C(t){return Array.from(new Set(t))}let L=0;class w extends t.exports{constructor(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};super(),this.options={...w.options,...e},this.lastSort={},this.group=w.ALL_ITEMS,this.lastFilter=w.ALL_ITEMS,this.isEnabled=!0,this.isDestroyed=!1,this.isInitialized=!1,this._transitions=[],this.isTransitioning=!1,this._queue=[];const i=this._getElementOption(t);if(!i)throw new TypeError("Shuffle needs to be initialized with an element.");this.element=i,this.id=`shuffle_${L}`,L+=1,this._init(),this.isInitialized=!0}_init(){if(this.items=this._getItems(),this.sortedItems=this.items,this.options.sizer=this._getElementOption(this.options.sizer),this.element.classList.add(w.Classes.BASE),this._initItems(this.items),"complete"!==document.readyState){const t=this.layout.bind(this);window.addEventListener("load",(function e(){window.removeEventListener("load",e),t()}))}const t=window.getComputedStyle(this.element,null),e=w.getSize(this.element).width;this._validateStyles(t),this._setColumns(e),this.filter(this.options.group,this.options.initialSort),this._rafId=null,"ResizeObserver"in window&&(this._resizeObserver=new ResizeObserver(this._handleResizeCallback.bind(this)),this._resizeObserver.observe(this.element)),this.element.offsetWidth,this.setItemTransitions(this.items),this.element.style.transition=`height ${this.options.speed}ms ${this.options.easing}`}_getElementOption(t){return"string"==typeof t?this.element.querySelector(t):t&&t.nodeType&&1===t.nodeType?t:t&&t.jquery?t[0]:null}_validateStyles(t){"static"===t.position&&(this.element.style.position="relative"),"hidden"!==t.overflow&&(this.element.style.overflow="hidden")}_filter(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.lastFilter,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.items;const i=this._getFilteredSets(t,e);return this._toggleFilterClasses(i),this.lastFilter=t,"string"==typeof t&&(this.group=t),i}_getFilteredSets(t,e){let i=[];const s=[];return t===w.ALL_ITEMS?i=e:e.forEach((e=>{this._doesPassFilter(t,e.element)?i.push(e):s.push(e)})),{visible:i,hidden:s}}_doesPassFilter(t,e){if("function"==typeof t)return t.call(e,e,this);const i=e.dataset[w.FILTER_ATTRIBUTE_KEY],s=this.options.delimiter?i.split(this.options.delimiter):JSON.parse(i);function n(t){return s.includes(t)}return Array.isArray(t)?this.options.filterMode===w.FilterMode.ANY?t.some(n):t.every(n):s.includes(t)}_toggleFilterClasses(t){let{visible:e,hidden:i}=t;e.forEach((t=>{t.show()})),i.forEach((t=>{t.hide()}))}_initItems(t){t.forEach((t=>{t.init()}))}_disposeItems(t){t.forEach((t=>{t.dispose()}))}_updateItemCount(){this.visibleItems=this._getFilteredItems().length}setItemTransitions(t){const{speed:e,easing:i}=this.options,s=this.options.useTransforms?["transform"]:["top","left"],n=Object.keys(a.Css.HIDDEN.before).map((t=>t.replace(/([A-Z])/g,((t,e)=>`-${e.toLowerCase()}`)))),o=s.concat(n).join();t.forEach((t=>{t.element.style.transitionDuration=`${e}ms`,t.element.style.transitionTimingFunction=i,t.element.style.transitionProperty=o}))}_getItems(){return Array.from(this.element.children).filter((t=>t.matches(this.options.itemSelector))).map((t=>new a(t,this.options.isRTL)))}_mergeNewItems(t){const e=Array.from(this.element.children);return f(this.items.concat(t),{by:t=>e.indexOf(t)})}_getFilteredItems(){return this.items.filter((t=>t.isVisible))}_getConcealedItems(){return this.items.filter((t=>!t.isVisible))}_getColumnSize(t,e){let i;return i="function"==typeof this.options.columnWidth?this.options.columnWidth(t):this.options.sizer?w.getSize(this.options.sizer).width:this.options.columnWidth?this.options.columnWidth:this.items.length>0?w.getSize(this.items[0].element,!0).width:t,0===i&&(i=t),i+e}_getGutterSize(t){let e;return e="function"==typeof this.options.gutterWidth?this.options.gutterWidth(t):this.options.sizer?c(this.options.sizer,"marginLeft"):this.options.gutterWidth,e}_setColumns(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w.getSize(this.element).width;const e=this._getGutterSize(t),i=this._getColumnSize(t,e);let s=(t+e)/i;Math.abs(Math.round(s)-s)<this.options.columnThreshold&&(s=Math.round(s)),this.cols=Math.max(Math.floor(s||0),1),this.containerWidth=t,this.colWidth=i}_setContainerSize(){this.element.style.height=`${this._getContainerSize()}px`}_getContainerSize(){return E(this.positions)}_getStaggerAmount(t){return Math.min(t*this.options.staggerAmount,this.options.staggerAmountMax)}_dispatch(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.isDestroyed||(e.shuffle=this,this.emit(t,e))}_resetCols(){let t=this.cols;for(this.positions=[];t;)t-=1,this.positions.push(0)}_layout(t){const e=this._getNextPositions(t);let i=0;t.forEach(((t,s)=>{function n(){t.applyCss(a.Css.VISIBLE.after)}if(o.equals(t.point,e[s])&&!t.isHidden)return t.applyCss(a.Css.VISIBLE.before),void n();t.point=e[s],t.scale=a.Scale.VISIBLE,t.isHidden=!1;const r=this.getStylesForTransition(t,a.Css.VISIBLE.before);r.transitionDelay=`${this._getStaggerAmount(i)}ms`,this._queue.push({item:t,styles:r,callback:n}),i+=1}))}_getNextPositions(t){if(this.options.isCentered){const e=t.map(((t,e)=>{const i=w.getSize(t.element,!0),s=this._getItemPosition(i);return new r(s.x,s.y,i.width,i.height,e)}));return this.getTransformedPositions(e,this.containerWidth)}return t.map((t=>this._getItemPosition(w.getSize(t.element,!0))))}_getItemPosition(t){return function(t){let{itemSize:e,positions:i,gridSize:s,total:n,threshold:r,buffer:h}=t;const l=v(e.width,s,n,r),a=b(i,l,n),d=T(a,h),u=new o(s*d,a[d]),c=a[d]+e.height;for(let t=0;t<l;t++)i[d+t]=c;return u}({itemSize:t,positions:this.positions,gridSize:this.colWidth,total:this.cols,threshold:this.options.columnThreshold,buffer:this.options.buffer})}getTransformedPositions(t,e){return S(t,e)}_shrink(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._getConcealedItems(),e=0;t.forEach((t=>{function i(){t.applyCss(a.Css.HIDDEN.after)}if(t.isHidden)return t.applyCss(a.Css.HIDDEN.before),void i();t.scale=a.Scale.HIDDEN,t.isHidden=!0;const s=this.getStylesForTransition(t,a.Css.HIDDEN.before);s.transitionDelay=`${this._getStaggerAmount(e)}ms`,this._queue.push({item:t,styles:s,callback:i}),e+=1}))}_handleResizeCallback(t){if(this.isEnabled&&!this.isDestroyed)for(const e of t)Math.round(e.contentRect.width)!==Math.round(this.containerWidth)&&(cancelAnimationFrame(this._rafId),this._rafId=requestAnimationFrame(this.update.bind(this)))}getStylesForTransition(t,e){const i={...e};if(this.options.useTransforms){const e=this.options.isRTL?"-":"",s=this.options.roundTransforms?Math.round(t.point.x):t.point.x,n=this.options.roundTransforms?Math.round(t.point.y):t.point.y;i.transform=`translate(${e}${s}px, ${n}px) scale(${t.scale})`}else this.options.isRTL?i.right=`${t.point.x}px`:i.left=`${t.point.x}px`,i.top=`${t.point.y}px`;return i}_whenTransitionDone(t,e,i){const s=I(t,(t=>{e(),i(null,t)}));this._transitions.push(s)}_getTransitionFunction(t){return e=>{t.item.applyCss(t.styles),this._whenTransitionDone(t.item.element,t.callback,e)}}_processQueue(){this.isTransitioning&&this._cancelMovement();const t=this.options.speed>0,e=this._queue.length>0;e&&t&&this.isInitialized?this._startTransitions(this._queue):e?(this._styleImmediately(this._queue),this._dispatch(w.EventType.LAYOUT)):this._dispatch(w.EventType.LAYOUT),this._queue.length=0}_startTransitions(t){this.isTransitioning=!0;!function(t,e,i){i||("function"==typeof e?(i=e,e=null):i=s);var n=t&&t.length;if(!n)return i(null,[]);var o=!1,r=new Array(n);function h(t){return function(e,s){if(!o){if(e)return i(e,r),void(o=!0);r[t]=s,--n||i(null,r)}}}t.forEach(e?function(t,i){t.call(e,h(i))}:function(t,e){t(h(e))})}(t.map((t=>this._getTransitionFunction(t))),this._movementFinished.bind(this))}_cancelMovement(){this._transitions.forEach(y),this._transitions.length=0,this.isTransitioning=!1}_styleImmediately(t){if(t.length){const e=t.map((t=>t.item.element));w._skipTransitions(e,(()=>{t.forEach((t=>{t.item.applyCss(t.styles),t.callback()}))}))}}_movementFinished(){this._transitions.length=0,this.isTransitioning=!1,this._dispatch(w.EventType.LAYOUT)}filter(t,e){this.isEnabled&&((!t||t&&0===t.length)&&(t=w.ALL_ITEMS),this._filter(t),this._shrink(),this._updateItemCount(),this.sort(e))}sort(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.lastSort;if(!this.isEnabled)return;this._resetCols();const e=f(this._getFilteredItems(),t);this.sortedItems=e,this._layout(e),this._processQueue(),this._setContainerSize(),this.lastSort=t}update(){let{recalculateSizes:t=!0,force:e=!1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(this.isEnabled||e)&&(t&&this._setColumns(),this.sort())}layout(){this.update({recalculateSizes:!0})}add(t){const e=C(t).map((t=>new a(t,this.options.isRTL)));this._initItems(e),this._resetCols();const i=f(this._mergeNewItems(e),this.lastSort),s=this._filter(this.lastFilter,i),n=t=>e.includes(t),o=t=>{t.scale=a.Scale.HIDDEN,t.isHidden=!0,t.applyCss(a.Css.HIDDEN.before),t.applyCss(a.Css.HIDDEN.after)},r=this._getNextPositions(s.visible);s.visible.forEach(((t,e)=>{n(t)&&(t.point=r[e],o(t),t.applyCss(this.getStylesForTransition(t,{})))})),s.hidden.forEach((t=>{n(t)&&o(t)})),this.element.offsetWidth,this.setItemTransitions(e),this.items=this._mergeNewItems(e),this.filter(this.lastFilter)}disable(){this.isEnabled=!1}enable(){let t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.isEnabled=!0,t&&this.update()}remove(t){if(!t.length)return;const e=C(t),i=e.map((t=>this.getItemByElement(t))).filter((t=>!!t));this._toggleFilterClasses({visible:[],hidden:i}),this._shrink(i),this.sort(),this.items=this.items.filter((t=>!i.includes(t))),this._updateItemCount(),this.once(w.EventType.LAYOUT,(()=>{this._disposeItems(i),e.forEach((t=>{t.parentNode.removeChild(t)})),this._dispatch(w.EventType.REMOVED,{collection:e})}))}getItemByElement(t){return this.items.find((e=>e.element===t))}resetItems(){this._disposeItems(this.items),this.isInitialized=!1,this.items=this._getItems(),this._initItems(this.items),this.once(w.EventType.LAYOUT,(()=>{this.setItemTransitions(this.items),this.isInitialized=!0})),this.filter(this.lastFilter)}destroy(){this._cancelMovement(),this._resizeObserver&&(this._resizeObserver.unobserve(this.element),this._resizeObserver=null),this.element.classList.remove("shuffle"),this.element.removeAttribute("style"),this._disposeItems(this.items),this.items.length=0,this.sortedItems.length=0,this._transitions.length=0,this.options.sizer=null,this.element=null,this.isDestroyed=!0,this.isEnabled=!1}static getSize(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const i=window.getComputedStyle(t,null);let s=c(t,"width",i),n=c(t,"height",i);if(e){s+=c(t,"marginLeft",i)+c(t,"marginRight",i),n+=c(t,"marginTop",i)+c(t,"marginBottom",i)}return{width:s,height:n}}static _skipTransitions(t,e){const i=t.map((t=>{const{style:e}=t,i=e.transitionDuration,s=e.transitionDelay;return e.transitionDuration="0ms",e.transitionDelay="0ms",{duration:i,delay:s}}));e(),t[0].offsetWidth,t.forEach(((t,e)=>{t.style.transitionDuration=i[e].duration,t.style.transitionDelay=i[e].delay}))}}w.ShuffleItem=a,w.ALL_ITEMS="all",w.FILTER_ATTRIBUTE_KEY="groups",w.EventType={LAYOUT:"shuffle:layout",REMOVED:"shuffle:removed"},w.Classes=h,w.FilterMode={ANY:"any",ALL:"all"},w.options={group:w.ALL_ITEMS,speed:250,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)",itemSelector:"*",sizer:null,gutterWidth:0,columnWidth:0,delimiter:null,buffer:0,columnThreshold:.01,initialSort:null,staggerAmount:15,staggerAmountMax:150,useTransforms:!0,filterMode:w.FilterMode.ANY,isCentered:!1,isRTL:!1,roundTransforms:!0},w.Point=o,w.Rect=r,w.__sorter=f,w.__getColumnSpan=v,w.__getAvailablePositions=b,w.__getShortColumn=T,w.__getCenteredPositions=S;var z=i(5311),D=new w(document.querySelector(".rs-shuffle__container"),{itemSelector:".rs-shuffle__item",sizer:".rs-shuffle__sizer",buffer:1});z(".rs-shuffle__filter li").on("click",(function(){return z(".rs-shuffle__filter li").removeClass("active"),z(this).addClass("active"),D.filter(z(this).attr("data-filter")),!1}))})()})();