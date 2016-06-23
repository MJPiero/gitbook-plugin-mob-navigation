/**
 * Created by majing on 2016/6/23.
 */


function addNAV() {
    var cout = 0;
    if(document.getElementById('mob-icon') == null){
        var parentswrap = document.querySelector('.book-header').childNodes;
        for(var i in parentswrap){
            if(parentswrap[i].nodeName == 'H1'){
                cout = i;
                break;
            }
        }
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
        document.querySelector('.book-header').insertBefore(mobhref,parentswrap[cout]);
    };
}

addNAV();

if (("onhashchange" in window)) {
    window.onhashchange = function () {
        addNAV();
    }
}
else {
    var prevHash = window.location.hash;
    window.setInterval(function () {
        if (window.location.hash != prevHash) {
            prevHash = window.location.hash;
            addNAV();
        }
    }, 100);
}
