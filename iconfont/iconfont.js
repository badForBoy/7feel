;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-menu1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M128 298.848l171.232 0 0-170.848-171.232 0 0 170.848zM128 596.608l171.232 0 0-169.184-171.232 0 0 169.184zM128 896l171.232 0 0-168.928-171.232 0 0 168.928zM426.368 298.848l171.232 0 0-170.848-171.232 0 0 170.848zM426.368 596.608l171.232 0 0-169.184-171.232 0 0 169.184zM426.368 896l171.232 0 0-168.928-171.232 0 0 168.928zM724.768 128l0 170.848 171.232 0 0-170.848-171.232 0zM724.768 596.608l171.232 0 0-169.184-171.232 0 0 169.184zM724.768 896l171.232 0 0-168.928-171.232 0 0 168.928z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-menu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M128 256 896 256 896 341.333333 128 341.333333 128 256ZM128 469.333333 896 469.333333 896 554.666667 128 554.666667 128 469.333333ZM128 682.666667 896 682.666667 896 768 128 768 128 682.666667Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-menu2" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M891.525338 953.521832 618.191042 953.521832c-37.735439 0-68.333318-30.594809-68.333318-68.333318l0-273.335319c0-37.737486 30.597879-68.334341 68.333318-68.334341l273.333272 0c37.738509 0 68.333318 30.596855 68.333318 68.334341l0 273.335319C959.858656 922.926 929.263847 953.521832 891.525338 953.521832zM891.525338 479.45477 618.191042 479.45477c-37.735439 0-68.333318-30.596855-68.333318-68.333318l0-273.335319c0-37.736463 30.597879-68.333318 68.333318-68.333318l273.333272 0c37.738509 0 68.333318 30.596855 68.333318 68.333318l0 273.335319C959.858656 448.857914 929.263847 479.45477 891.525338 479.45477zM917.150972 169.108512c0-29.095665-23.589254-52.676733-52.676733-52.676733L653.785725 116.431779c-29.087479 0-52.677756 23.581068-52.677756 52.676733l0 210.69056c0 29.095665 23.590278 52.676733 52.677756 52.676733l210.689536 0c29.087479 0 52.676733-23.581068 52.676733-52.676733L917.151995 169.108512zM404.649552 953.521832l-273.335319 0c-37.736463 0-68.333318-30.594809-68.333318-68.333318l0-273.335319c0-37.737486 30.596855-68.334341 68.333318-68.334341l273.335319 0c37.737486 0 68.333318 30.596855 68.333318 68.334341l0 273.335319C472.98287 922.926 442.387038 953.521832 404.649552 953.521832zM404.649552 479.45477l-273.335319 0c-37.736463 0-68.333318-30.596855-68.333318-68.333318l0-273.335319c0-37.736463 30.596855-68.333318 68.333318-68.333318l273.335319 0c37.737486 0 68.333318 30.596855 68.333318 68.333318l0 273.335319C472.98287 448.857914 442.387038 479.45477 404.649552 479.45477z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)