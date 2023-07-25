/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/.pnpm/raw-loader@0.5.1/node_modules/raw-loader/index.js!./node_modules/.pnpm/babel-loader@8.2.5_@babel+core@7.18.10_webpack@5.74.0/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[4].use[0]!./assets/scripts/plugins/easyResponsiveTabs.js":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/raw-loader@0.5.1/node_modules/raw-loader/index.js!./node_modules/.pnpm/babel-loader@8.2.5_@babel+core@7.18.10_webpack@5.74.0/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[4].use[0]!./assets/scripts/plugins/easyResponsiveTabs.js ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "// Easy Responsive Tabs Plugin\n// Author: Samson.Onna <Email : samson3d@gmail.com>\n(function ($) {\n  $.fn.extend({\n    easyResponsiveTabs: function easyResponsiveTabs(options) {\n      //Set the default values, use comma to separate the settings, example:\n      var defaults = {\n        type: 'default',\n        //default, vertical, accordion;\n        width: 'auto',\n        fit: true,\n        closed: false,\n        activate: function activate() {}\n      }; //Variables\n\n      var options = $.extend(defaults, options);\n      var opt = options,\n          jtype = opt.type,\n          jfit = opt.fit,\n          jwidth = opt.width,\n          vtabs = 'vertical',\n          accord = 'accordion'; //Events\n\n      $(this).bind('tabactivate', function (e, currentTab) {\n        if (typeof options.activate === 'function') {\n          options.activate.call(currentTab, e);\n        }\n      }); //Main function\n\n      this.each(function () {\n        var $respTabs = $(this);\n        var $respTabsList = $respTabs.find('ul.resp-tabs-list');\n        $respTabs.find('ul.resp-tabs-list li').addClass('resp-tab-item');\n        $respTabs.css({\n          'display': 'block',\n          'width': jwidth\n        });\n        $respTabs.find('.resp-tabs-container > div').addClass('resp-tab-content');\n        jtab_options(); //Properties Function\n\n        function jtab_options() {\n          if (jtype == vtabs) {\n            $respTabs.addClass('resp-vtabs');\n          }\n\n          if (jfit == true) {\n            $respTabs.css({\n              width: '100%',\n              margin: '0px'\n            });\n          }\n\n          if (jtype == accord) {\n            $respTabs.addClass('resp-easy-accordion');\n            $respTabs.find('.resp-tabs-list').css('display', 'none');\n          }\n        } //Assigning the h2 markup to accordion title\n\n\n        var $tabItemh2;\n        $respTabs.find('.resp-tab-content').before(\"<h2 class='resp-accordion' role='tab'><span class='resp-arrow'></span></h2>\");\n        var itemCount = 0;\n        $respTabs.find('.resp-accordion').each(function () {\n          $tabItemh2 = $(this);\n          var innertext = $respTabs.find('.resp-tab-item:eq(' + itemCount + ')').html();\n          $respTabs.find('.resp-accordion:eq(' + itemCount + ')').append(innertext);\n          $tabItemh2.attr('aria-controls', 'tab_item-' + itemCount);\n          itemCount++;\n        }); //Assigning the 'aria-controls' to Tab items\n\n        var count = 0,\n            $tabContent;\n        $respTabs.find('.resp-tab-item').each(function () {\n          $tabItem = $(this);\n          $tabItem.attr('aria-controls', 'tab_item-' + count);\n          $tabItem.attr('role', 'tab'); //First active tab, keep closed if option = 'closed' or option is 'accordion' and the element is in accordion mode\n\n          if (options.closed !== true && !(options.closed === 'accordion' && !$respTabsList.is(':visible')) && !(options.closed === 'tabs' && $respTabsList.is(':visible'))) {\n            $respTabs.find('.resp-tab-item').first().addClass('resp-tab-active');\n            $respTabs.find('.resp-accordion').first().addClass('resp-tab-active');\n            $respTabs.find('.resp-tab-content').first().addClass('resp-tab-content-active').attr('style', 'display:block');\n          } //Assigning the 'aria-labelledby' attr to tab-content\n\n\n          var tabcount = 0;\n          $respTabs.find('.resp-tab-content').each(function () {\n            $tabContent = $(this);\n            $tabContent.attr('aria-labelledby', 'tab_item-' + tabcount);\n            tabcount++;\n          });\n          count++;\n        }); //Tab Click action function\n\n        $respTabs.find(\"[role=tab]\").each(function () {\n          var $currentTab = $(this);\n          $currentTab.click(function () {\n            var $tabAria = $currentTab.attr('aria-controls');\n\n            if ($currentTab.hasClass('resp-accordion') && $currentTab.hasClass('resp-tab-active')) {\n              $respTabs.find('.resp-tab-content-active').slideUp('', function () {\n                $(this).addClass('resp-accordion-closed');\n              });\n              $currentTab.removeClass('resp-tab-active');\n              return false;\n            }\n\n            if (!$currentTab.hasClass('resp-tab-active') && $currentTab.hasClass('resp-accordion')) {\n              $respTabs.find('.resp-tab-active').removeClass('resp-tab-active');\n              $respTabs.find('.resp-tab-content-active').slideUp().removeClass('resp-tab-content-active resp-accordion-closed');\n              $respTabs.find(\"[aria-controls=\" + $tabAria + \"]\").addClass('resp-tab-active');\n              $respTabs.find('.resp-tab-content[aria-labelledby = ' + $tabAria + ']').slideDown().addClass('resp-tab-content-active');\n            } else {\n              $respTabs.find('.resp-tab-active').removeClass('resp-tab-active');\n              $respTabs.find('.resp-tab-content-active').removeAttr('style').removeClass('resp-tab-content-active').removeClass('resp-accordion-closed');\n              $respTabs.find(\"[aria-controls=\" + $tabAria + \"]\").addClass('resp-tab-active');\n              $respTabs.find('.resp-tab-content[aria-labelledby = ' + $tabAria + ']').addClass('resp-tab-content-active').attr('style', 'display:block');\n            } //Trigger tab activation event\n\n\n            $currentTab.trigger('tabactivate', $currentTab);\n            return false;\n          }); //Window resize function\n\n          $(window).resize(function () {\n            $respTabs.find('.resp-accordion-closed').removeAttr('style');\n          });\n        });\n      });\n    }\n  });\n})(jQuery);"

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

/***/ "./node_modules/.pnpm/script-loader@0.7.2/node_modules/script-loader/index.js!./assets/scripts/plugins/easyResponsiveTabs.js":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/script-loader@0.7.2/node_modules/script-loader/index.js!./assets/scripts/plugins/easyResponsiveTabs.js ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! !!./node_modules/.pnpm/script-loader@0.7.2/node_modules/script-loader/addScript.js */ "./node_modules/.pnpm/script-loader@0.7.2/node_modules/script-loader/addScript.js")(__webpack_require__(/*! !!./node_modules/.pnpm/raw-loader@0.5.1/node_modules/raw-loader/index.js!./node_modules/.pnpm/babel-loader@8.2.5_@babel+core@7.18.10_webpack@5.74.0/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[4].use[0]!./assets/scripts/plugins/easyResponsiveTabs.js */ "./node_modules/.pnpm/raw-loader@0.5.1/node_modules/raw-loader/index.js!./node_modules/.pnpm/babel-loader@8.2.5_@babel+core@7.18.10_webpack@5.74.0/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[4].use[0]!./assets/scripts/plugins/easyResponsiveTabs.js"))

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
/*!*************************************************!*\
  !*** ./assets/scripts/modules/response-tabs.js ***!
  \*************************************************/
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "jquery");
__webpack_require__(/*! script-loader!../plugins/easyResponsiveTabs */ "./node_modules/.pnpm/script-loader@0.7.2/node_modules/script-loader/index.js!./assets/scripts/plugins/easyResponsiveTabs.js");

$('.rsp-tabs').easyResponsiveTabs();
})();

/******/ })()
;
//# sourceMappingURL=response-tabs.js.map