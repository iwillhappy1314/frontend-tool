/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/.pnpm/raw-loader@0.5.1/node_modules/raw-loader/index.js!./node_modules/.pnpm/theia-sticky-sidebar@1.7.0/node_modules/theia-sticky-sidebar/dist/theia-sticky-sidebar.js":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/raw-loader@0.5.1/node_modules/raw-loader/index.js!./node_modules/.pnpm/theia-sticky-sidebar@1.7.0/node_modules/theia-sticky-sidebar/dist/theia-sticky-sidebar.js ***!
  \*********************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "/*!\n * Theia Sticky Sidebar v1.7.0\n * https://github.com/WeCodePixels/theia-sticky-sidebar\n *\n * Glues your website's sidebars, making them permanently visible while scrolling.\n *\n * Copyright 2013-2016 WeCodePixels and other contributors\n * Released under the MIT license\n */\n\n(function ($) {\n    $.fn.theiaStickySidebar = function (options) {\n        var defaults = {\n            'containerSelector': '',\n            'additionalMarginTop': 0,\n            'additionalMarginBottom': 0,\n            'updateSidebarHeight': true,\n            'minWidth': 0,\n            'disableOnResponsiveLayouts': true,\n            'sidebarBehavior': 'modern',\n            'defaultPosition': 'relative',\n            'namespace': 'TSS'\n        };\n        options = $.extend(defaults, options);\n\n        // Validate options\n        options.additionalMarginTop = parseInt(options.additionalMarginTop) || 0;\n        options.additionalMarginBottom = parseInt(options.additionalMarginBottom) || 0;\n\n        tryInitOrHookIntoEvents(options, this);\n\n        // Try doing init, otherwise hook into window.resize and document.scroll and try again then.\n        function tryInitOrHookIntoEvents(options, $that) {\n            var success = tryInit(options, $that);\n\n            if (!success) {\n                console.log('TSS: Body width smaller than options.minWidth. Init is delayed.');\n\n                $(document).on('scroll.' + options.namespace, function (options, $that) {\n                    return function (evt) {\n                        var success = tryInit(options, $that);\n\n                        if (success) {\n                            $(this).unbind(evt);\n                        }\n                    };\n                }(options, $that));\n                $(window).on('resize.' + options.namespace, function (options, $that) {\n                    return function (evt) {\n                        var success = tryInit(options, $that);\n\n                        if (success) {\n                            $(this).unbind(evt);\n                        }\n                    };\n                }(options, $that))\n            }\n        }\n\n        // Try doing init if proper conditions are met.\n        function tryInit(options, $that) {\n            if (options.initialized === true) {\n                return true;\n            }\n\n            if ($('body').width() < options.minWidth) {\n                return false;\n            }\n\n            init(options, $that);\n\n            return true;\n        }\n\n        // Init the sticky sidebar(s).\n        function init(options, $that) {\n            options.initialized = true;\n\n            // Add CSS\n            var existingStylesheet = $('#theia-sticky-sidebar-stylesheet-' + options.namespace);\n            if (existingStylesheet.length === 0) {\n                $('head').append($('<style id=\"theia-sticky-sidebar-stylesheet-' + options.namespace + '\">.theiaStickySidebar:after {content: \"\"; display: table; clear: both;}</style>'));\n            }\n\n            $that.each(function () {\n                var o = {};\n\n                o.sidebar = $(this);\n\n                // Save options\n                o.options = options || {};\n\n                // Get container\n                o.container = $(o.options.containerSelector);\n                if (o.container.length == 0) {\n                    o.container = o.sidebar.parent();\n                }\n\n                // Create sticky sidebar\n                o.sidebar.parents().css('-webkit-transform', 'none'); // Fix for WebKit bug - https://code.google.com/p/chromium/issues/detail?id=20574\n                o.sidebar.css({\n                    'position': o.options.defaultPosition,\n                    'overflow': 'visible',\n                    // The \"box-sizing\" must be set to \"content-box\" because we set a fixed height to this element when the sticky sidebar has a fixed position.\n                    '-webkit-box-sizing': 'border-box',\n                    '-moz-box-sizing': 'border-box',\n                    'box-sizing': 'border-box'\n                });\n\n                // Get the sticky sidebar element. If none has been found, then create one.\n                o.stickySidebar = o.sidebar.find('.theiaStickySidebar');\n                if (o.stickySidebar.length == 0) {\n                    // Remove <script> tags, otherwise they will be run again when added to the stickySidebar.\n                    var javaScriptMIMETypes = /(?:text|application)\\/(?:x-)?(?:javascript|ecmascript)/i;\n                    o.sidebar.find('script').filter(function (index, script) {\n                        return script.type.length === 0 || script.type.match(javaScriptMIMETypes);\n                    }).remove();\n\n                    o.stickySidebar = $('<div>').addClass('theiaStickySidebar').append(o.sidebar.children());\n                    o.sidebar.append(o.stickySidebar);\n                }\n\n                // Get existing top and bottom margins and paddings\n                o.marginBottom = parseInt(o.sidebar.css('margin-bottom'));\n                o.paddingTop = parseInt(o.sidebar.css('padding-top'));\n                o.paddingBottom = parseInt(o.sidebar.css('padding-bottom'));\n\n                // Add a temporary padding rule to check for collapsable margins.\n                var collapsedTopHeight = o.stickySidebar.offset().top;\n                var collapsedBottomHeight = o.stickySidebar.outerHeight();\n                o.stickySidebar.css('padding-top', 1);\n                o.stickySidebar.css('padding-bottom', 1);\n                collapsedTopHeight -= o.stickySidebar.offset().top;\n                collapsedBottomHeight = o.stickySidebar.outerHeight() - collapsedBottomHeight - collapsedTopHeight;\n                if (collapsedTopHeight == 0) {\n                    o.stickySidebar.css('padding-top', 0);\n                    o.stickySidebarPaddingTop = 0;\n                }\n                else {\n                    o.stickySidebarPaddingTop = 1;\n                }\n\n                if (collapsedBottomHeight == 0) {\n                    o.stickySidebar.css('padding-bottom', 0);\n                    o.stickySidebarPaddingBottom = 0;\n                }\n                else {\n                    o.stickySidebarPaddingBottom = 1;\n                }\n\n                // We use this to know whether the user is scrolling up or down.\n                o.previousScrollTop = null;\n\n                // Scroll top (value) when the sidebar has fixed position.\n                o.fixedScrollTop = 0;\n\n                // Set sidebar to default values.\n                resetSidebar();\n\n                o.onScroll = function (o) {\n                    // Stop if the sidebar isn't visible.\n                    if (!o.stickySidebar.is(\":visible\")) {\n                        return;\n                    }\n\n                    // Stop if the window is too small.\n                    if ($('body').width() < o.options.minWidth) {\n                        resetSidebar();\n                        return;\n                    }\n\n                    // Stop if the sidebar width is larger than the container width (e.g. the theme is responsive and the sidebar is now below the content)\n                    if (o.options.disableOnResponsiveLayouts) {\n                        var sidebarWidth = o.sidebar.outerWidth(o.sidebar.css('float') == 'none');\n\n                        if (sidebarWidth + 50 > o.container.width()) {\n                            resetSidebar();\n                            return;\n                        }\n                    }\n\n                    var scrollTop = $(document).scrollTop();\n                    var position = 'static';\n\n                    // If the user has scrolled down enough for the sidebar to be clipped at the top, then we can consider changing its position.\n                    if (scrollTop >= o.sidebar.offset().top + (o.paddingTop - o.options.additionalMarginTop)) {\n                        // The top and bottom offsets, used in various calculations.\n                        var offsetTop = o.paddingTop + options.additionalMarginTop;\n                        var offsetBottom = o.paddingBottom + o.marginBottom + options.additionalMarginBottom;\n\n                        // All top and bottom positions are relative to the window, not to the parent elemnts.\n                        var containerTop = o.sidebar.offset().top;\n                        var containerBottom = o.sidebar.offset().top + getClearedHeight(o.container);\n\n                        // The top and bottom offsets relative to the window screen top (zero) and bottom (window height).\n                        var windowOffsetTop = 0 + options.additionalMarginTop;\n                        var windowOffsetBottom;\n\n                        var sidebarSmallerThanWindow = (o.stickySidebar.outerHeight() + offsetTop + offsetBottom) < $(window).height();\n                        if (sidebarSmallerThanWindow) {\n                            windowOffsetBottom = windowOffsetTop + o.stickySidebar.outerHeight();\n                        }\n                        else {\n                            windowOffsetBottom = $(window).height() - o.marginBottom - o.paddingBottom - options.additionalMarginBottom;\n                        }\n\n                        var staticLimitTop = containerTop - scrollTop + o.paddingTop;\n                        var staticLimitBottom = containerBottom - scrollTop - o.paddingBottom - o.marginBottom;\n\n                        var top = o.stickySidebar.offset().top - scrollTop;\n                        var scrollTopDiff = o.previousScrollTop - scrollTop;\n\n                        // If the sidebar position is fixed, then it won't move up or down by itself. So, we manually adjust the top coordinate.\n                        if (o.stickySidebar.css('position') == 'fixed') {\n                            if (o.options.sidebarBehavior == 'modern') {\n                                top += scrollTopDiff;\n                            }\n                        }\n\n                        if (o.options.sidebarBehavior == 'stick-to-top') {\n                            top = options.additionalMarginTop;\n                        }\n\n                        if (o.options.sidebarBehavior == 'stick-to-bottom') {\n                            top = windowOffsetBottom - o.stickySidebar.outerHeight();\n                        }\n\n                        if (scrollTopDiff > 0) { // If the user is scrolling up.\n                            top = Math.min(top, windowOffsetTop);\n                        }\n                        else { // If the user is scrolling down.\n                            top = Math.max(top, windowOffsetBottom - o.stickySidebar.outerHeight());\n                        }\n\n                        top = Math.max(top, staticLimitTop);\n\n                        top = Math.min(top, staticLimitBottom - o.stickySidebar.outerHeight());\n\n                        // If the sidebar is the same height as the container, we won't use fixed positioning.\n                        var sidebarSameHeightAsContainer = o.container.height() == o.stickySidebar.outerHeight();\n\n                        if (!sidebarSameHeightAsContainer && top == windowOffsetTop) {\n                            position = 'fixed';\n                        }\n                        else if (!sidebarSameHeightAsContainer && top == windowOffsetBottom - o.stickySidebar.outerHeight()) {\n                            position = 'fixed';\n                        }\n                        else if (scrollTop + top - o.sidebar.offset().top - o.paddingTop <= options.additionalMarginTop) {\n                            // Stuck to the top of the page. No special behavior.\n                            position = 'static';\n                        }\n                        else {\n                            // Stuck to the bottom of the page.\n                            position = 'absolute';\n                        }\n                    }\n\n                    /*\n                     * Performance notice: It's OK to set these CSS values at each resize/scroll, even if they don't change.\n                     * It's way slower to first check if the values have changed.\n                     */\n                    if (position == 'fixed') {\n                        var scrollLeft = $(document).scrollLeft();\n\n                        o.stickySidebar.css({\n                            'position': 'fixed',\n                            'width': getWidthForObject(o.stickySidebar) + 'px',\n                            'transform': 'translateY(' + top + 'px)',\n                            'left': (o.sidebar.offset().left + parseInt(o.sidebar.css('padding-left')) - scrollLeft) + 'px',\n                            'top': '0px'\n                        });\n                    }\n                    else if (position == 'absolute') {\n                        var css = {};\n\n                        if (o.stickySidebar.css('position') != 'absolute') {\n                            css.position = 'absolute';\n                            css.transform = 'translateY(' + (scrollTop + top - o.sidebar.offset().top - o.stickySidebarPaddingTop - o.stickySidebarPaddingBottom) + 'px)';\n                            css.top = '0px';\n                        }\n\n                        css.width = getWidthForObject(o.stickySidebar) + 'px';\n                        css.left = '';\n\n                        o.stickySidebar.css(css);\n                    }\n                    else if (position == 'static') {\n                        resetSidebar();\n                    }\n\n                    if (position != 'static') {\n                        if (o.options.updateSidebarHeight == true) {\n                            o.sidebar.css({\n                                'min-height': o.stickySidebar.outerHeight() + o.stickySidebar.offset().top - o.sidebar.offset().top + o.paddingBottom\n                            });\n                        }\n                    }\n\n                    o.previousScrollTop = scrollTop;\n                };\n\n                // Initialize the sidebar's position.\n                o.onScroll(o);\n\n                // Recalculate the sidebar's position on every scroll and resize.\n                $(document).on('scroll.' + o.options.namespace, function (o) {\n                    return function () {\n                        o.onScroll(o);\n                    };\n                }(o));\n                $(window).on('resize.' + o.options.namespace, function (o) {\n                    return function () {\n                        o.stickySidebar.css({'position': 'static'});\n                        o.onScroll(o);\n                    };\n                }(o));\n\n                // Recalculate the sidebar's position every time the sidebar changes its size.\n                if (typeof ResizeSensor !== 'undefined') {\n                    new ResizeSensor(o.stickySidebar[0], function (o) {\n                        return function () {\n                            o.onScroll(o);\n                        };\n                    }(o));\n                }\n\n                // Reset the sidebar to its default state\n                function resetSidebar() {\n                    o.fixedScrollTop = 0;\n                    o.sidebar.css({\n                        'min-height': '1px'\n                    });\n                    o.stickySidebar.css({\n                        'position': 'static',\n                        'width': '',\n                        'transform': 'none'\n                    });\n                }\n\n                // Get the height of a div as if its floated children were cleared. Note that this function fails if the floats are more than one level deep.\n                function getClearedHeight(e) {\n                    var height = e.height();\n\n                    e.children().each(function () {\n                        height = Math.max(height, $(this).height());\n                    });\n\n                    return height;\n                }\n            });\n        }\n\n        function getWidthForObject(object) {\n            var width;\n\n            try {\n                width = object[0].getBoundingClientRect().width;\n            }\n            catch (err) {\n            }\n\n            if (typeof width === \"undefined\") {\n                width = object.width();\n            }\n\n            return width;\n        }\n\n        return this;\n    }\n})(jQuery);\n\n//# sourceMappingURL=maps/theia-sticky-sidebar.js.map\n"

/***/ }),

/***/ "./node_modules/.pnpm/script-loader@0.7.2/node_modules/script-loader/addScript.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/.pnpm/script-loader@0.7.2/node_modules/script-loader/addScript.js ***!
  \****************************************************************************************/
/***/ ((module) => {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
module.exports = function(src) {
	function log(error) {
		(typeof console !== "undefined")
		&& (console.error || console.log)("[Script Loader]", error);
	}

	// Check for IE =< 8
	function isIE() {
		return typeof attachEvent !== "undefined" && typeof addEventListener === "undefined";
	}

	try {
		if (typeof execScript !== "undefined" && isIE()) {
			execScript(src);
		} else if (typeof eval !== "undefined") {
			eval.call(null, src);
		} else {
			log("EvalError: No eval function available");
		}
	} catch (error) {
		log(error);
	}
}


/***/ }),

/***/ "./node_modules/.pnpm/script-loader@0.7.2/node_modules/script-loader/index.js!./node_modules/.pnpm/theia-sticky-sidebar@1.7.0/node_modules/theia-sticky-sidebar/dist/theia-sticky-sidebar.js":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/script-loader@0.7.2/node_modules/script-loader/index.js!./node_modules/.pnpm/theia-sticky-sidebar@1.7.0/node_modules/theia-sticky-sidebar/dist/theia-sticky-sidebar.js ***!
  \***************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! !!./node_modules/.pnpm/script-loader@0.7.2/node_modules/script-loader/addScript.js */ "./node_modules/.pnpm/script-loader@0.7.2/node_modules/script-loader/addScript.js")(__webpack_require__(/*! !!./node_modules/.pnpm/raw-loader@0.5.1/node_modules/raw-loader/index.js!./node_modules/.pnpm/theia-sticky-sidebar@1.7.0/node_modules/theia-sticky-sidebar/dist/theia-sticky-sidebar.js */ "./node_modules/.pnpm/raw-loader@0.5.1/node_modules/raw-loader/index.js!./node_modules/.pnpm/theia-sticky-sidebar@1.7.0/node_modules/theia-sticky-sidebar/dist/theia-sticky-sidebar.js"))

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = jQuery;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************************************!*\
  !*** ./assets/scripts/modules/sticky-sidebar.js ***!
  \**************************************************/
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "jquery");
__webpack_require__(/*! script-loader!theia-sticky-sidebar */ "./node_modules/.pnpm/script-loader@0.7.2/node_modules/script-loader/index.js!./node_modules/.pnpm/theia-sticky-sidebar@1.7.0/node_modules/theia-sticky-sidebar/dist/theia-sticky-sidebar.js");
if ($(document).width() > 1024) {
  $('.rs-sticky-left, .rs-sticky-right').theiaStickySidebar({
    additionalMarginTop: 32
  });
}
})();

/******/ })()
;
//# sourceMappingURL=sticky-sidebar.js.map