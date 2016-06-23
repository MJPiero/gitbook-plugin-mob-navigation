/**
 * Created by majing on 2016/6/23.
 */

var _ = require('underscore');
// insert anchor link into section
var insertAnchors = function() {
    console.log('aa');
    if(document.getElementById('mob-icon') == null){
        var fontwrap = document.getElementById('font-settings-wrapper');
        var parentswrap = fontwrap.parentNode;
        var mobhref = document.createElement('div');
        mobhref.setAttribute('id','mob-icon');
        mobhref.setAttribute('class','dropdown pull-left');
        mobhref.innerHTML = '<a href="#" class="btn toggle-dropdown" aria-label="Toggle font settings"><i class="fa fa-bookmark-o"></i>\
        </a>\
        <div class="dropdown-menu font-settings">\
        <div class="dropdown-caret">\
        <span class="caret-outer"></span>\
        <span class="caret-inner"></span>\
        </div>\
        <div class="buttons">\
        <a href="#">Sharesdk</a>\
        <a href="#">Sharesdk</a>\
        <a href="#">Sharesdk</a>\
        </div>\
        </div>';
        parentswrap.insertBefore(mobhref,parentswrap.childNodes[9]);
    };
};

module.exports = {
    book: {
        assets: ".",
        css: [ "plugin.css" ]
    },
    hooks: {
        "page": function (page) { // before html generation

            _.forEach(page, insertAnchors);

            return page;
        }
    }
};
