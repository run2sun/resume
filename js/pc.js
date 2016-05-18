function initPage(){
        var objLoading = document.getElementById("LoadingBar");
        if (objLoading != null)
        {
            objLoading.style.display = "none";
        }
    }
window.onload = initPage();
// 加载页
var Expand = (function() {
  var tile = $('.nav_box');
  var tileLink = $('.nav_box > .nav_content');
  var tileText = tileLink.find('.strip__inner-text');
  var stripClose = $('.close');

  var expanded  = false;

  var open = function() {

    var tile = $(this).parent();

      if (!expanded) {
        tile.addClass('nav_box--expanded');
        // add delay to inner text
        tileText.css('transition', 'all .5s .3s cubic-bezier(0.23, 1, 0.32, 1)');
        stripClose.addClass('show');
        stripClose.css('transition', 'all .6s 1s cubic-bezier(0.23, 1, 0.32, 1)');
        expanded = true;
      }
    };

  var close = function() {  
    if (expanded) {
      tile.removeClass('nav_box--expanded');
      // remove delay from inner text
      tileText.css('transition', 'all 0.15s 0 cubic-bezier(0.23, 1, 0.32, 1)');
      stripClose.removeClass('show');
      stripClose.css('transition', 'all 0.2s 0s cubic-bezier(0.23, 1, 0.32, 1)')
      expanded = false;
    }
  }

    var bindActions = function() {
      tileLink.on('click', open);
      stripClose.on('click', close);
    };

    var init = function() {
      bindActions();
    };

    return {
      init: init
    };

  }());

Expand.init();