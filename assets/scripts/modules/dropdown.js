'use strict';

const dropdownElementList = document.querySelectorAll('.rs-dropdown-toggle');

[...dropdownElementList].map(function(dropdownToggleEl) {
    new Dropdown(dropdownToggleEl);
});

const popoverElementList = document.querySelectorAll('.rs-popover');

[...popoverElementList].map(function(popoverEl) {
    new Popover(popoverEl);
});
