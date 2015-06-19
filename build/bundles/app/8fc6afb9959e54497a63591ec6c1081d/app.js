"format register";!function() {
  function t() {
  }
  t.amd = {}, System.register("github:guardian/fence@0.2.11/fence", [], !1, function() {
    function t(e, n, o, i) {
      i = i || 0, e(), n > 0 && setTimeout(function() {
        var s = o + i;
        t(e, n - 1, s, o)
      }, o)
    }
    function e(e) {
      setTimeout(function() {
        t(function() {
          r(e), a(e)
        }, h, p)
      }, 0)
    }
    function n(t, e) {
      return t.classList ? t.classList.contains(e) : -1 !== t.className.indexOf(e)
    }
    function o(t, e) {
      return t.classList ? t.classList.add(e) : t.className += " " + e
    }
    function i() {
      for (var t = "iframe." + d, e = document.querySelectorAll(t), n = 0, o = e.length; o > n; ++n) s(e[n])
    }
    function s(t, i) {
      if (i = i || {}, "IFRAME" !== t.tagName)
        throw new Error("Cannot render non-iframe elements!");
      if (!n(t, d))
        throw new Error("Cannot render iframes with no " + d + " class!");
      var s = n(t, m);
      if (!s || i.force) {
        t.style.height = 0, t.frameBorder = 0, t.style.border = "none", t.style.overflow = "hidden", t.width = "100%";
        var r = !!t.srcdoc;
        if (r)
          "complete" === t.contentWindow.document.readyState ? e(t) : s || t.addEventListener("load", function() {
            e(t)
          }, !1); else {
          var a = t.getAttribute("srcdoc");
          a && "string" == typeof a && (t.contentWindow.contents = a, t.src = 'javascript:window["contents"]', e(t))
        }
        o(t, m)
      }
    }
    function r(t) {
      var e = t.contentWindow && t.contentWindow.document,
        n = e && e.body;n && (n.style.padding = 0, n.style.margin = 0, n.style.overflow = "hidden")
    }
    function a(t) {
      var e = t.contentWindow && t.contentWindow.document;
      if (e) {
        var n = e.documentElement && e.documentElement.scrollHeight || e.body && e.body.scrollHeight || 0;
        t.style.height = n + "px"
      }
    }
    function c(t) {
      var e = document.createElement("div");
      e.innerHTML = (t || "").trim();var n = e.firstChild,
        o = n && "IFRAME" === n.tagName,
        i = n && !n.nextSibling;return o && i
    }
    function l(t) {
      var e = document.createElement("div");return e.appendChild(document.createTextNode(t)), e.innerHTML
    }
    function u(t) {
      if (c(t)) return t;
      var e = l(t).replace(/\"/g, "&quot;"),
        n = "<html><head></head><body>" + e + "</body></html>";return '<iframe srcdoc="' + n + '" class="' + d + '"></iframe>'
    }
    var d = "fenced",
      m = "fenced-rendered",
      p = 300,
      h = 12;
    return {
      render: s,
      renderAll: i,
      isSafeCode: c,
      wrap: u
    }
  })
}(), System.register("common/views/content/richLinkTag.html!github:systemjs/plugin-text@0.0.2", [], !0, function(require, t, e) {
  var n = System.global,
    o = n.define;
  return n.define = void 0, e.exports = '<aside class="element element-rich-link element-rich-link--tag element--thumbnail element-rich-link--not-upgraded" data-component="rich-link-tag" data-link-name="rich-link-tag">\n    <p><a href="<%=href%>"><%=href%></a></p>\n</aside>\n', n.define = o, e.exports
}), function() {
  function t() {
  }
  t.amd = {}, System.register("common/modules/article/membership-events", ["github:wilsonpage/fastdom@0.8.6", "common/utils/$", "common/utils/ajax-promise"], !1, function(t, e, n) {
    return function(t, e, n) {
      function o(o) {
        var i = e("a", o).attr("href"),
          a = i.match(/https:\/\/membership.theguardian.com/);a && n({
          url: i + "/card",
          crossOrigin: !0
        }).then(function(n) {
          n.html && t.write(function() {
            e(o).html(n.html).removeClass(s).addClass(r)
          })
        })
      }
      function i() {
        e("." + s).each(o)
      }
      var s = "element-membership--not-upgraded",
        r = "element-membership--upgraded";
      return {
        upgradeEvent: o,
        upgradeEvents: i
      }
    }.call(this, t("github:wilsonpage/fastdom@0.8.6"), t("common/utils/$"), t("common/utils/ajax-promise"))
  })
}(), function() {
  function t() {
  }
  t.amd = {}, System.register("common/modules/article/open-module", ["github:wilsonpage/fastdom@0.8.6", "common/utils/$", "common/utils/ajax", "common/utils/config", "common/utils/detect", "common/modules/article/spacefinder"], !1, function(t, e, n) {
    return function(t, e, n, o, i, s) {
      function r() {
        return {
          minAbove: 200,
          minBelow: 250,
          clearContentMeta: 50,
          selectors: {
            " > h2": {
              minAbove: "mobile" === i.getBreakpoint() ? 20 : 0,
              minBelow: 200
            },
            " > *:not(p):not(h2)": {
              minAbove: 35,
              minBelow: 300
            },
            " .ad-slot": {
              minAbove: 150,
              minBelow: 200
            },
            " .element-rich-link": {
              minAbove: 400,
              minBelow: 400
            }
          }
        }
      }
      return {
        init: function() {
          o.page.openModule && s.getParaWithSpace(r()).then(function(i) {
            i && n({
              url: o.page.openModule,
              crossOrigin: !0,
              method: "get"
            }).then(function(n) {
              n.html && t.write(function() {
                e.create(n.html).addClass("element--supporting").insertBefore(i), e(".submeta-container--break").removeClass("submeta-container--break")
              })
            })
          })
        }
      }
    }.call(this, t("github:wilsonpage/fastdom@0.8.6"), t("common/utils/$"), t("common/utils/ajax"), t("common/utils/config"), t("common/utils/detect"), t("common/modules/article/spacefinder"))
  })
}(), function() {
  function t() {
  }
  t.amd = {}, System.register("common/modules/article/twitter", ["npm:bean@1.0.15", "npm:bonzo@1.4.0", "npm:qwery@3.4.2", "common/utils/_", "common/utils/$", "common/utils/config", "common/utils/detect", "common/utils/mediator"], !1, function(t, e, n) {
    return function(t, e, n, o, i, s, r, a) {
      function c() {
        a.on("window:scroll", o.debounce(l, 200))
      }
      function l() {
        if ("mobile" !== r.getBreakpoint() && s.switches.enhanceTweets) {
          var t,
            o = n("blockquote.js-tweet"),
            a = n("#twitter-widget"),
            c = e.viewport().height,
            l = n("blockquote.twitter-tweet");
          o.forEach(function(t) {
            var n = e(t);
            e(document.body).scrollTop() + 2.5 * c > n.offset().top && e(document.body).scrollTop() < n.offset().top + n.offset().height && i(t).removeClass("js-tweet").addClass("twitter-tweet")
          }), l.length > 0 && (0 === a.length ? (t = document.createElement("script"), t.id = "twitter-widget", t.async = !0, t.src = "//platform.twitter.com/widgets.js", i(document.body).append(t)) : "undefined" != typeof twttr && "widgets" in twttr && "load" in twttr.widgets && twttr.widgets.load(u))
        }
      }
      var u = n(".js-liveblog-body");
      return {
        init: c,
        enhanceTweets: l
      }
    }.call(this, t("npm:bean@1.0.15"), t("npm:bonzo@1.4.0"), t("npm:qwery@3.4.2"), t("common/utils/_"), t("common/utils/$"), t("common/utils/config"), t("common/utils/detect"), t("common/utils/mediator"))
  })
}(), function() {
  function t() {
  }
  t.amd = {}, System.register("common/utils/clamp", ["npm:bonzo@1.4.0", "npm:bean@1.0.15"], !1, function(t, e, n) {
    return function(t, e) {
      var n = function(n, o, i) {
        var s,
          r = n.clientHeight,
          a = getComputedStyle(n).getPropertyValue("line-height"),
          c = (parseInt(a, 10) + (i ? 2 : 0)) * o,
          l = t(t.create('<span class="clamp-fade"></span>')),
          u = t(n);
        c > r || (u.css({
          maxHeight: c + "px",
          overflow: "hidden"
        }), u.after(l), i && (s = t(t.create('<span class="clamp-fade__content u-fauxlink" role="button">Read more</span>')), l.append(s), e.on(s[0], "click", function() {
          l.remove(), u.css({
            maxHeight: "none",
            overflow: "auto"
          })
        })))
      };
      return n
    }.call(this, t("npm:bonzo@1.4.0"), t("npm:bean@1.0.15"))
  })
}(), function() {
  function t() {
  }
  t.amd = {}, System.register("common/modules/onward/social-most-popular", ["common/modules/component", "common/utils/mediator"], !1, function(t, e, n) {
    return function(t, e) {
      function n(t, e) {
        this.context = t, this.endpoint = "/most-read-" + e + ".json", this.fetch(this.context, "html")
      }
      return t.define(n), n.prototype.ready = function(t) {
          e.emit("page:new-content", t)
        }, n
    }.call(this, t("common/modules/component"), t("common/utils/mediator"))
  })
}(), function() {
  function t() {
  }
  t.amd = {}, System.register("common/modules/ui/rhc", ["common/utils/$", "npm:bonzo@1.4.0", "common/utils/_"], !1, function(t, e, n) {
    return function(t, e, n) {
      function o(o, s) {
        s = s || 1;var r,
          a = "component--rhc";return t.create('<div class="' + a + '" data-importance="' + s + '"></div>').append(o).each(function(o) {
          r = t("." + a, i[0]);
          var c = n.filter(r, function(t) {
            return !t.hasAttribute("data-importance") || s > parseInt(t.getAttribute("data-importance"), 10)
          });
          0 === c.length ? i.append(o) : e(c[0]).before(o)
        })
      }
      var i = t(".js-components-container");
      return {
        addComponent: o
      }
    }.call(this, t("common/utils/$"), t("npm:bonzo@1.4.0"), t("common/utils/_"))
  })
}(), function() {
  function t() {
  }
  t.amd = {}, System.register("common/utils/client-rects", [], !1, function() {
    var t,
      e = function() {
        if (void 0 === t) {
          var e = document.createElement("p"),
            n = document.createElement("p"),
            o = document.createTextNode("aa"),
            i = document.createTextNode("aa"),
            s = document.createRange();
          e.appendChild(o), n.appendChild(i), document.body.appendChild(e), document.body.appendChild(n), s.setStart(o, 1), s.setEnd(i, 1), t = s.getClientRects().length > 2, document.body.removeChild(e), document.body.removeChild(n)
        }
        return t
      },
      n = function(t) {
        if (!e()) return t.getClientRects();
        for (var n = [], o = t.endContainer, i = t.endOffset, s = document.createRange(); o !== t.commonAncestorContainer;) s.setStart(o, 0), s.setEnd(o, i), Array.prototype.push.apply(n, s.getClientRects()), i = Array.prototype.indexOf.call(o.parentNode.childNodes, o), o = o.parentNode;
        return s = t.cloneRange(), s.setEnd(o, i), Array.prototype.push.apply(n, s.getClientRects()), n
      },
      o = function(t) {
        var o, i, s,
          r = n(t),
          a = t.getBoundingClientRect();
        if (0 === r.length) return null;
        if (!e()) return t.getBoundingClientRect();
        if (0 === a.width && 0 === a.height) return r[0];
        for (o = 0, i = r.length; i > o; o++) s = s || {
              left: r[o].left,
              top: r[o].top,
              right: r[o].right,
              bottom: r[o].bottom
          }, s.left = Math.min(s.left, r[o].left), s.top = Math.min(s.top, r[o].top), s.right = Math.max(s.right, r[o].right), s.bottom = Math.max(s.bottom, r[o].bottom);
        return s && (s.width = s.right - s.left, s.height = s.bottom - s.top), s
      };
    return {
      getClientRects: n,
      getBoundingClientRect: o
    }
  })
}(), System.register("common/views/ui/selection-sharing.html!github:systemjs/plugin-text@0.0.2", [], !0, function(require, t, e) {
  var n = System.global,
    o = n.define;
  return n.define = void 0, e.exports = '<div class="selection-sharing">\n    <ul class="social u-unstyled u-cf" data-component="social-selection">\n        <li class="social__item" data-link-name="twitter">\n            <a  class="rounded-icon social-icon social-icon--twitter js-selection-twitter"\n                data-link-name="social-selection"\n                target="_blank"\n                href="#">\n                <span class="u-h">Share on Twitter</span>\n                <i class="i-share-twitter--white i"></i>\n            </a>\n        </li>\n        <li class="social__item" data-link-name="email">\n            <a  class="rounded-icon social-icon social-icon--email js-selection-email"\n                data-link-name="social-selection"\n                target="_blank"\n                href="#">\n                <span class="u-h">Share via Email</span>\n                <i class="i-share-email--white i"></i>\n            </a>\n        </li>\n    </ul>\n</div>\n', n.define = o, e.exports
}), function() {
  function t() {
  }
  t.amd = {}, System.register("github:guardian/enhancer@0.1.3/enhancer", [], !1, function() {
    function t(t, e, n, o) {
      var i = t.getAttribute("data-interactive");require([i], function(i) {
        i.boot(t, e, n, o)
      })
    }
    return {
      render: t
    }
  })
}(), System.register("npm:fastclick@1.0.6/lib/fastclick", [], !0, function(require, t, e) {
  var n = System.global,
    o = n.define;
  return n.define = void 0, function() {
      "use strict";
      function t(e, n) {
        function i(t, e) {
          return function() {
            return t.apply(e, arguments)
          }
        }
        var s;
        if (n = n || {}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = n.touchBoundary || 10, this.layer = e, this.tapDelay = n.tapDelay || 200, this.tapTimeout = n.tapTimeout || 700, !t.notNeeded(e)) {
          for (var r = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], a = this, c = 0, l = r.length; l > c; c++) a[r[c]] = i(a[r[c]], a);
          o && (e.addEventListener("mouseover", this.onMouse, !0), e.addEventListener("mousedown", this.onMouse, !0), e.addEventListener("mouseup", this.onMouse, !0)), e.addEventListener("click", this.onClick, !0), e.addEventListener("touchstart", this.onTouchStart, !1), e.addEventListener("touchmove", this.onTouchMove, !1), e.addEventListener("touchend", this.onTouchEnd, !1), e.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (e.removeEventListener = function(t, n, o) {
            var i = Node.prototype.removeEventListener;
            "click" === t ? i.call(e, t, n.hijacked || n, o) : i.call(e, t, n, o)
          }, e.addEventListener = function(t, n, o) {
            var i = Node.prototype.addEventListener;
            "click" === t ? i.call(e, t, n.hijacked || (n.hijacked = function(t) {
                t.propagationStopped || n(t)
              }), o) : i.call(e, t, n, o)
          }), "function" == typeof e.onclick && (s = e.onclick, e.addEventListener("click", function(t) {
            s(t)
          }, !1), e.onclick = null)
        }
      }
      var n = navigator.userAgent.indexOf("Windows Phone") >= 0,
        o = navigator.userAgent.indexOf("Android") > 0 && !n,
        i = /iP(ad|hone|od)/.test(navigator.userAgent) && !n,
        s = i && /OS 4_\d(_\d)?/.test(navigator.userAgent),
        r = i && /OS [6-7]_\d/.test(navigator.userAgent),
        a = navigator.userAgent.indexOf("BB10") > 0;
      t.prototype.needsClick = function(t) {
        switch (t.nodeName.toLowerCase()) {
          case "button":case "select":case "textarea":
            if (t.disabled) return !0;
            break;case "input":
            if (i && "file" === t.type || t.disabled) return !0;
            break;case "label":case "iframe":case "video":return !0
        }
        return /\bneedsclick\b/.test(t.className)
      }, t.prototype.needsFocus = function(t) {
        switch (t.nodeName.toLowerCase()) {
          case "textarea":return !0;case "select":return !o;case "input":switch (t.type) {
              case "button":case "checkbox":case "file":case "image":case "radio":case "submit":return !1
            }
            return !t.disabled && !t.readOnly;default:return /\bneedsfocus\b/.test(t.className)
        }
      }, t.prototype.sendClick = function(t, e) {
        var n, o;
        document.activeElement && document.activeElement !== t && document.activeElement.blur(), o = e.changedTouches[0], n = document.createEvent("MouseEvents"), n.initMouseEvent(this.determineEventType(t), !0, !0, window, 1, o.screenX, o.screenY, o.clientX, o.clientY, !1, !1, !1, !1, 0, null), n.forwardedTouchEvent = !0, t.dispatchEvent(n)
      }, t.prototype.determineEventType = function(t) {
        return o && "select" === t.tagName.toLowerCase() ? "mousedown" : "click"
      }, t.prototype.focus = function(t) {
        var e;
        i && t.setSelectionRange && 0 !== t.type.indexOf("date") && "time" !== t.type && "month" !== t.type ? (e = t.value.length, t.setSelectionRange(e, e)) : t.focus()
      }, t.prototype.updateScrollParent = function(t) {
        var e, n;
        if (e = t.fastClickScrollParent, !e || !e.contains(t)) {
          n = t;
          do {
            if (n.scrollHeight > n.offsetHeight) {
              e = n, t.fastClickScrollParent = n;break
            }
            n = n.parentElement
          } while (n)
          }
          e && (e.fastClickLastScrollTop = e.scrollTop)
        }, t.prototype.getTargetElementFromEventTarget = function(t) {
          return t.nodeType === Node.TEXT_NODE ? t.parentNode : t
        }, t.prototype.onTouchStart = function(t) {
          var e, n, o;
          if (t.targetTouches.length > 1) return !0;
          if (e = this.getTargetElementFromEventTarget(t.target), n = t.targetTouches[0], i) {
            if (o = window.getSelection(), o.rangeCount && !o.isCollapsed) return !0;
            if (!s) {
              if (n.identifier && n.identifier === this.lastTouchIdentifier) return t.preventDefault(), !1;
              this.lastTouchIdentifier = n.identifier, this.updateScrollParent(e)
            }
          }
          return this.trackingClick = !0, this.trackingClickStart = t.timeStamp, this.targetElement = e, this.touchStartX = n.pageX, this.touchStartY = n.pageY, t.timeStamp - this.lastClickTime < this.tapDelay && t.preventDefault(), !0
        }, t.prototype.touchHasMoved = function(t) {
          var e = t.changedTouches[0],
            n = this.touchBoundary;
          return Math.abs(e.pageX - this.touchStartX) > n || Math.abs(e.pageY - this.touchStartY) > n ? !0 : !1
        }, t.prototype.onTouchMove = function(t) {
          return this.trackingClick ? ((this.targetElement !== this.getTargetElementFromEventTarget(t.target) || this.touchHasMoved(t)) && (this.trackingClick = !1, this.targetElement = null), !0) : !0
        }, t.prototype.findControl = function(t) {
          return void 0 !== t.control ? t.control : t.htmlFor ? document.getElementById(t.htmlFor) : t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
        }, t.prototype.onTouchEnd = function(t) {
          var e, n, a, c, l,
            u = this.targetElement;
          if (!this.trackingClick) return !0;
          if (t.timeStamp - this.lastClickTime < this.tapDelay) return this.cancelNextClick = !0, !0;
          if (t.timeStamp - this.trackingClickStart > this.tapTimeout) return !0;
          if (this.cancelNextClick = !1, this.lastClickTime = t.timeStamp, n = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, r && (l = t.changedTouches[0], u = document.elementFromPoint(l.pageX - window.pageXOffset, l.pageY - window.pageYOffset) || u, u.fastClickScrollParent = this.targetElement.fastClickScrollParent), a = u.tagName.toLowerCase(), "label" === a) {
            if (e = this.findControl(u)) {
              if (this.focus(u), o) return !1;
              u = e
            }
          } else if (this.needsFocus(u)) return t.timeStamp - n > 100 || i && window.top !== window && "input" === a ? (this.targetElement = null, !1) : (this.focus(u), this.sendClick(u, t), i && "select" === a || (this.targetElement = null, t.preventDefault()), !1);
          return i && !s && (c = u.fastClickScrollParent, c && c.fastClickLastScrollTop !== c.scrollTop) ? !0 : (this.needsClick(u) || (t.preventDefault(), this.sendClick(u, t)), !1)
        }, t.prototype.onTouchCancel = function() {
          this.trackingClick = !1, this.targetElement = null
        }, t.prototype.onMouse = function(t) {
          return this.targetElement ? t.forwardedTouchEvent ? !0 : t.cancelable && (!this.needsClick(this.targetElement) || this.cancelNextClick) ? (t.stopImmediatePropagation ? t.stopImmediatePropagation() : t.propagationStopped = !0, t.stopPropagation(), t.preventDefault(), !1) : !0 : !0
        }, t.prototype.onClick = function(t) {
          var e;
          return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === t.target.type && 0 === t.detail ? !0 : (e = this.onMouse(t), e || (this.targetElement = null), e)
        }, t.prototype.destroy = function() {
          var t = this.layer;
          o && (t.removeEventListener("mouseover", this.onMouse, !0), t.removeEventListener("mousedown", this.onMouse, !0), t.removeEventListener("mouseup", this.onMouse, !0)), t.removeEventListener("click", this.onClick, !0), t.removeEventListener("touchstart", this.onTouchStart, !1), t.removeEventListener("touchmove", this.onTouchMove, !1), t.removeEventListener("touchend", this.onTouchEnd, !1), t.removeEventListener("touchcancel", this.onTouchCancel, !1)
        }, t.notNeeded = function(t) {
          var e, n, i, s;
          if ("undefined" == typeof window.ontouchstart) return !0;
          if (n = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
            if (!o) return !0;
            if (e = document.querySelector("meta[name=viewport]")) {
              if (-1 !== e.content.indexOf("user-scalable=no")) return !0;
              if (n > 31 && document.documentElement.scrollWidth <= window.outerWidth) return !0
            }
          }
          if (a && (i = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/), i[1] >= 10 && i[2] >= 3 && (e = document.querySelector("meta[name=viewport]")))) {
            if (-1 !== e.content.indexOf("user-scalable=no")) return !0;
            if (document.documentElement.scrollWidth <= window.outerWidth) return !0
          }
          return "none" === t.style.msTouchAction || "manipulation" === t.style.touchAction ? !0 : (s = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1], s >= 27 && (e = document.querySelector("meta[name=viewport]"), e && (-1 !== e.content.indexOf("user-scalable=no") || document.documentElement.scrollWidth <= window.outerWidth)) ? !0 : "none" === t.style.touchAction || "manipulation" === t.style.touchAction ? !0 : !1)
        }, t.attach = function(e, n) {
          return new t(e, n)
        }, "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function() {
          return t
        }) : "undefined" != typeof e && e.exports ? (e.exports = t.attach, e.exports.FastClick = t) : window.FastClick = t
      }(), n.define = o, e.exports
  }), function() {
    function t() {
    }
    t.amd = {}, System.register("common/utils/proximity-loader", ["npm:bonzo@1.4.0", "common/utils/_", "common/utils/mediator"], !1, function(t, e, n) {
      return function(t, e, n) {
        function o(t, e) {
          var o = {
            conditionFn: t,
            loadFn: e
          };a.push(o), 1 === a.length && n.on("window:scroll", s), r()
        }
        function i(e, n, i) {
          var s = t(e),
            r = function() {
              var t = s.offset(),
                e = t.top - n,
                o = t.top + t.height + n;
              return c.top > e && c.bottom < o
            };o(r, i)
        }
        var s, r,
          a = [],
          c = {
            top: 0,
            bottom: 0
          },
          l = function() {
            c.top = t(document.body).scrollTop(), c.bottom = c.top + t.viewport().height, a = e.filter(a, function(t) {
              return t.conditionFn() ? void t.loadFn() : !0
            }), 0 === a.length && n.off("window:scroll", s)
          };
        return s = e.throttle(l, 200, {
            leading: !1,
            trailing: !0
          }), r = e.debounce(l, 2e3), {
            add: i
        }
      }.call(this, t("npm:bonzo@1.4.0"), t("common/utils/_"), t("common/utils/mediator"))
    })
  }(), function() {
    function t() {
    }
    t.amd = {}, System.register("common/modules/analytics/foresee-survey", ["common/utils/config", "common/utils/cookies", "common/utils/detect"], !1, function(t, e, n) {
      return function(t, e, n) {
        function o() {
          require(["js!foresee"])
        }
        function i() {
          var i = "Network Front" === t.page.contentType,
            s = n.isBreakpoint({
              max: "mobile"
            }) ? .008 : .006,
            r = Math.random() <= s,
            a = /forceForesee/.test(location.hash);e.get("GU_TEST") || i || !(window.openForeseeWhenReady || r || a) || o(), window.guardian && (window.guardian.openForesee = o)
        }
        return {
          load: i
        }
      }.call(this, t("common/utils/config"), t("common/utils/cookies"), t("common/utils/detect"))
    })
  }(), function() {
    function t() {
    }
    t.amd = {}, System.register("common/modules/analytics/media-listener", ["npm:bean@1.0.15", "common/utils/mediator"], !1, function(t, e, n) {
      return function(t, e) {
        return {
          init: function() {
            if (window.matchMedia) {
              var t = window.matchMedia("print");
              t.addListener(function() {
                t.matches && e.emit("module:clickstream:interaction", "print")
              })
            }
          }
        }
      }.call(this, t("npm:bean@1.0.15"), t("common/utils/mediator"))
    })
  }(), System.register("vendor/omniture", [], !1, function(t, e, n) {
    return System.get("@@global-helpers").prepareGlobal(n.id, []), function() {
        function t(t) {
          t.prop61 = t.eVar9 = "D=g", t.campaign || (t.campaign = t.getParamValue("CMP")), t.campaign = t.getValOnce(t.campaign, "s_campaign", 0), t.campaign && (t.eVar38 = t.eVar39 = "D=v0");var e = new Date;
          now = Math.floor(e.getTime() / 864e5);var n = now - 13,
            o = t.c_r("s_daily_habit") + "";o = o.split(","), newDiary = [], vC = 1;
          for (var i = 0, s = o.length; s > i; ++i) {
            var r = o[i];r >= n && r != now && (vC += 1) && newDiary.push(r)
          }
          newDiary.push(now), newDiary = newDiary.join(","), e.setFullYear(e.getFullYear() + 5), t.c_w("s_daily_habit", newDiary, e), t.eVar64 = vC + "/14", t.eVar10 = t.getDaysSinceLastVisit("s_lv"), t.prop16 = t.getNewRepeat(30), t.prop71 = t.getPreviousValue(t.channel, "s_prev_ch")
        }
        function e() {
          var t = this;
          t.version = "1.4.1";var e = window;e.s_c_in || (e.s_c_il = [], e.s_c_in = 0), t._il = e.s_c_il, t._in = e.s_c_in, t._il[t._in] = t, e.s_c_in++, t._c = "s_c";var n = e.sb;n || (n = null);var o, i,
            s = e;try {
            for (o = s.parent, i = s.location; o && o.location && i && "" + o.location != "" + i && s.location && "" + o.location != "" + s.location && o.location.host == i.host;) s = o, o = s.parent
          } catch (r) {} t.eb = function(t) {
            try {
              console.log(t)
            } catch (e) {}
          }, t.ta = function(t) {
            return "" + parseInt(t) == "" + t
          }, t.replace = function(t, e, n) {
            return !t || t.indexOf(e) < 0 ? t : t.split(e).join(n)
          }, t.escape = function(e) {
            var n, o;
            if (!e) return e;
            for (e = encodeURIComponent(e), n = 0; 7 > n; n++) o = "+~!*()'".substring(n, n + 1), e.indexOf(o) >= 0 && (e = t.replace(e, o, "%" + o.charCodeAt(0).toString(16).toUpperCase()));
            return e
          }, t.unescape = function(e) {
            if (!e) return e;
            e = e.indexOf("+") >= 0 ? t.replace(e, "+", " ") : e;try {
              return decodeURIComponent(e)
            } catch (n) {} return unescape(e)
          }, t.Va = function() {
            var n,
              o = e.location.hostname,
              i = t.fpCookieDomainPeriods;
            if (i || (i = t.cookieDomainPeriods), o && !t.cookieDomain && !/^[0-9.]+$/.test(o) && (i = i ? parseInt(i) : 2, i = i > 2 ? i : 2, n = o.lastIndexOf("."), n >= 0)) {
              for (; n >= 0 && i > 1;) n = o.lastIndexOf(".", n - 1), i--;
              t.cookieDomain = n > 0 ? o.substring(n) : o
            }
            return t.cookieDomain
          }, t.c_r = t.cookieRead = function(e) {
            e = t.escape(e);
            var n = " " + t.d.cookie,
              o = n.indexOf(" " + e + "="),
              i = 0 > o ? o : n.indexOf(";", o);
            return e = 0 > o ? "" : t.unescape(n.substring(o + 2 + e.length, 0 > i ? n.length : i)), "[[B]]" != e ? e : ""
          }, t.c_w = t.cookieWrite = function(e, n, o) {
            var i,
              s = t.Va(),
              r = t.cookieLifetime;
            return n = "" + n, r = r ? ("" + r).toUpperCase() : "", o && "SESSION" != r && "NONE" != r && ((i = "" != n ? parseInt(r ? r : 0) : -60) ? (o = new Date, o.setTime(o.getTime() + 1e3 * i)) : 1 == o && (o = new Date, i = o.getYear(), o.setYear(i + 5 + (1900 > i ? 1900 : 0)))), e && "NONE" != r ? (t.d.cookie = e + "=" + t.escape("" != n ? n : "[[B]]") + "; path=/;" + (o && "SESSION" != r ? " expires=" + o.toGMTString() + ";" : "") + (s ? " domain=" + s + ";" : ""), t.cookieRead(e) == n) : 0
          }, t.C = [], t.B = function(e, n, o) {
            if (t.ma) return 0;
            t.maxDelay || (t.maxDelay = 250);
            var i = 0,
              s = (new Date).getTime() + t.maxDelay,
              r = t.d.qb,
              a = ["webkitvisibilitychange", "visibilitychange"];
            if (r || (r = t.d.rb), r && "prerender" == r) {
              if (!t.X)
                for (t.X = 1, o = 0; o < a.length; o++) t.d.addEventListener(a[o], function() {
                    var e = t.d.qb;
                    e || (e = t.d.rb), "visible" == e && (t.X = 0, t.delayReady())
                  });
              i = 1, s = 0
            } else o || t.q("_d") && (i = 1);
            return i && (t.C.push({
                m: e,
                a: n,
                t: s
              }), t.X || setTimeout(t.delayReady, t.maxDelay)), i
          }, t.delayReady = function() {
            var e,
              n = (new Date).getTime(),
              o = 0;
            for (t.q("_d") && (o = 1); t.C.length > 0;) {
              if (e = t.C.shift(), o && !e.t && e.t > n) {
                t.C.unshift(e), setTimeout(t.delayReady, parseInt(t.maxDelay / 2));break
              }
              t.ma = 1, t[e.m].apply(t, e.a), t.ma = 0
            }
          }, t.setAccount = t.sa = function(e) {
            var n, o;
            if (!t.B("setAccount", arguments))
              if (t.account = e, t.allAccounts)
                for (n = t.allAccounts.concat(e.split(",")), t.allAccounts = [], n.sort(), o = 0; o < n.length; o++) (0 == o || n[o - 1] != n[o]) && t.allAccounts.push(n[o]);
              else
                t.allAccounts = e.split(",")
          }, t.foreachVar = function(e, n) {
            var o, i, s, r,
              a = "";
            for (s = i = "", t.lightProfileID ? (o = t.H, (a = t.lightTrackVars) && (a = "," + a + "," + t.ba.join(",") + ",")) : (o = t.c, (t.pe || t.linkType) && (a = t.linkTrackVars, i = t.linkTrackEvents, t.pe && (s = t.pe.substring(0, 1).toUpperCase() + t.pe.substring(1), t[s]) && (a = t[s].pb, i = t[s].ob)), a && (a = "," + a + "," + t.z.join(",") + ","), i && a && (a += ",events,")), n && (n = "," + n + ","), i = 0; i < o.length; i++) s = o[i], (r = t[s]) && (!a || a.indexOf("," + s + ",") >= 0) && (!n || n.indexOf("," + s + ",") >= 0) && e(s, r)
          }, t.J = function(e, n, o, i, s) {
            var r, a, c, l,
              u = "",
              d = 0;
            if ("contextData" == e && (e = "c"), n) {
              for (r in n)
                if (!Object.prototype[r] && (!s || r.substring(0, s.length) == s) && n[r] && (!o || o.indexOf("," + (i ? i + "." : "") + r + ",") >= 0)) {
                  if (c = !1, d)
                    for (a = 0; a < d.length; a++) r.substring(0, d[a].length) == d[a] && (c = !0);
                  if (!c && ("" == u && (u += "&" + e + "."), a = n[r], s && (r = r.substring(s.length)), r.length > 0))
                    if (c = r.indexOf("."), c > 0) a = r.substring(0, c), c = (s ? s : "") + a + ".", d || (d = []), d.push(c), u += t.J(a, n, o, i, c);else if ("boolean" == typeof a && (a = a ? "true" : "false"), a) {
                      if ("retrieveLightData" == i && s.indexOf(".contextData.") < 0) switch (c = r.substring(0, 4), l = r.substring(4), r) {
                          case "transactionID":r = "xact";
                            break;case "channel":r = "ch";
                            break;case "campaign":r = "v0";
                            break;default:t.ta(l) && ("prop" == c ? r = "c" + l : "eVar" == c ? r = "v" + l : "list" == c ? r = "l" + l : "hier" == c && (r = "h" + l, a = a.substring(0, 255)))
                      }
                      u += "&" + t.escape(r) + "=" + t.escape(a)
                  }
              }
              "" != u && (u += "&." + e)
            }
            return u
          }, t.Xa = function() {
            var e, n, o, i, s, r, a, c,
              l = "",
              u = "",
              d = "",
              m = n = "";
            for (t.lightProfileID ? (e = t.H, (u = t.lightTrackVars) && (u = "," + u + "," + t.ba.join(",") + ",")) : (e = t.c, (t.pe || t.linkType) && (u = t.linkTrackVars, d = t.linkTrackEvents, t.pe && (n = t.pe.substring(0, 1).toUpperCase() + t.pe.substring(1), t[n]) && (u = t[n].pb, d = t[n].ob)), u && (u = "," + u + "," + t.z.join(",") + ","), d && (d = "," + d + ",", u && (u += ",events,")), t.events2 && (m += ("" != m ? "," : "") + t.events2)), t.AudienceManagement && t.AudienceManagement.isReady() && (l += t.J("d", t.AudienceManagement.getEventCallConfigParams())), n = 0; n < e.length; n++) {
              if (i = e[n], s = t[i], o = i.substring(0, 4), r = i.substring(4), !s && "events" == i && m && (s = m, m = ""), s && (!u || u.indexOf("," + i + ",") >= 0)) {
                switch (i) {
                  case "supplementalDataID":i = "sdid";
                    break;case "timestamp":i = "ts";
                    break;case "dynamicVariablePrefix":i = "D";
                    break;case "visitorID":i = "vid";
                    break;case "marketingCloudVisitorID":i = "mid";
                    break;case "analyticsVisitorID":i = "aid";
                    break;case "audienceManagerLocationHint":i = "aamlh";
                    break;case "audienceManagerBlob":i = "aamb";
                    break;case "authState":i = "as";
                    break;case "pageURL":i = "g", s.length > 255 && (t.pageURLRest = s.substring(255), s = s.substring(0, 255));
                    break;case "pageURLRest":i = "-g";
                    break;case "referrer":i = "r";
                    break;case "vmk":case "visitorMigrationKey":i = "vmt";
                    break;case "visitorMigrationServer":i = "vmf", t.ssl && t.visitorMigrationServerSecure && (s = "");
                    break;case "visitorMigrationServerSecure":i = "vmf", !t.ssl && t.visitorMigrationServer && (s = "");
                    break;case "charSet":i = "ce";
                    break;case "visitorNamespace":i = "ns";
                    break;case "cookieDomainPeriods":i = "cdp";
                    break;case "cookieLifetime":i = "cl";
                    break;case "variableProvider":i = "vvp";
                    break;case "currencyCode":i = "cc";
                    break;case "channel":i = "ch";
                    break;case "transactionID":i = "xact";
                    break;case "campaign":i = "v0";
                    break;case "latitude":i = "lat";
                    break;case "longitude":i = "lon";
                    break;case "resolution":i = "s";
                    break;case "colorDepth":i = "c";
                    break;case "javascriptVersion":i = "j";
                    break;case "javaEnabled":i = "v";
                    break;case "cookiesEnabled":i = "k";
                    break;case "browserWidth":i = "bw";
                    break;case "browserHeight":i = "bh";
                    break;case "connectionType":i = "ct";
                    break;case "homepage":i = "hp";
                    break;case "events":
                    if (m && (s += ("" != s ? "," : "") + m), d)
                      for (r = s.split(","), s = "", o = 0; o < r.length; o++) a = r[o], c = a.indexOf("="), c >= 0 && (a = a.substring(0, c)), c = a.indexOf(":"), c >= 0 && (a = a.substring(0, c)), d.indexOf("," + a + ",") >= 0 && (s += (s ? "," : "") + r[o]);
                    break;case "events2":s = "";
                    break;case "contextData":l += t.J("c", t[i], u, i), s = "";
                    break;case "lightProfileID":i = "mtp";
                    break;case "lightStoreForSeconds":i = "mtss", t.lightProfileID || (s = "");
                    break;case "lightIncrementBy":i = "mti", t.lightProfileID || (s = "");
                    break;case "retrieveLightProfiles":i = "mtsr";
                    break;case "deleteLightProfiles":i = "mtsd";
                    break;case "retrieveLightData":t.retrieveLightProfiles && (l += t.J("mts", t[i], u, i)), s = "";
                    break;default:t.ta(r) && ("prop" == o ? i = "c" + r : "eVar" == o ? i = "v" + r : "list" == o ? i = "l" + r : "hier" == o && (i = "h" + r, s = s.substring(0, 255)))
                }
                s && (l += "&" + i + "=" + ("pev" != i.substring(0, 3) ? t.escape(s) : s))
              }
              "pev3" == i && t.g && (l += t.g)
            }
            return l
          }, t.u = function(t) {
            var e = t.tagName;
            return "" + t.wb != "undefined" || "" + t.ib != "undefined" && "HTML" != ("" + t.ib).toUpperCase() ? "" : (e = e && e.toUpperCase ? e.toUpperCase() : "", "SHAPE" == e && (e = ""), e && (("INPUT" == e || "BUTTON" == e) && t.type && t.type.toUpperCase ? e = t.type.toUpperCase() : !e && t.href && (e = "A")), e)
          }, t.oa = function(t) {
            var e, n, o,
              i = t.href ? t.href : "";
            return e = i.indexOf(":"), n = i.indexOf("?"), o = i.indexOf("/"), i && (0 > e || n >= 0 && e > n || o >= 0 && e > o) && (n = t.protocol && t.protocol.length > 1 ? t.protocol : l.protocol ? l.protocol : "", e = l.pathname.lastIndexOf("/"), i = (n ? n + "//" : "") + (t.host ? t.host : l.host ? l.host : "") + ("/" != h.substring(0, 1) ? l.pathname.substring(0, 0 > e ? 0 : e) + "/" : "") + i), i
          }, t.D = function(e) {
            var n, o,
              i = t.u(e),
              s = "",
              r = 0;
            return i && (n = e.protocol, o = e.onclick, !e.href || "A" != i && "AREA" != i || o && n && !(n.toLowerCase().indexOf("javascript") < 0) ? o ? (s = t.replace(t.replace(t.replace(t.replace("" + o, "\r", ""), "\n", ""), "	", ""), " ", ""), r = 2) : "INPUT" == i || "SUBMIT" == i ? (e.value ? s = e.value : e.innerText ? s = e.innerText : e.textContent && (s = e.textContent), r = 3) : e.src && "IMAGE" == i && (s = e.src) : s = t.oa(e), s) ? {
              id: s.substring(0, 100),
              type: r
            } : 0
          }, t.tb = function(e) {
            for (var n = t.u(e), o = t.D(e); e && !o && "BODY" != n;) (e = e.parentElement ? e.parentElement : e.parentNode) && (n = t.u(e), o = t.D(e));
            return o && "BODY" != n || (e = 0), e && (n = e.onclick ? "" + e.onclick : "", n.indexOf(".tl(") >= 0 || n.indexOf(".trackLink(") >= 0) && (e = 0), e
          }, t.hb = function() {
            var n, o, i, s,
              r = t.linkObject,
              a = t.linkType,
              c = t.linkURL;
            if (t.ca = 1, r || (t.ca = 0, r = t.clickObject), r) {
              for (n = t.u(r), o = t.D(r); r && !o && "BODY" != n;) (r = r.parentElement ? r.parentElement : r.parentNode) && (n = t.u(r), o = t.D(r));
              if (o && "BODY" != n || (r = 0), r) {
                var l = r.onclick ? "" + r.onclick : "";
                (l.indexOf(".tl(") >= 0 || l.indexOf(".trackLink(") >= 0) && (r = 0)
              }
            } else
              t.ca = 1;
            if (!c && r && (c = t.oa(r)), c && !t.linkLeaveQueryString && (i = c.indexOf("?"), i >= 0 && (c = c.substring(0, i))), !a && c) {
              var u,
                d = 0,
                m = 0;
              if (t.trackDownloadLinks && t.linkDownloadFileTypes)
                for (l = c.toLowerCase(), i = l.indexOf("?"), s = l.indexOf("#"), i >= 0 ? s >= 0 && i > s && (i = s) : i = s, i >= 0 && (l = l.substring(0, i)), i = t.linkDownloadFileTypes.toLowerCase().split(","), s = 0; s < i.length; s++) (u = i[s]) && l.substring(l.length - (u.length + 1)) == "." + u && (a = "d");
              if (t.trackExternalLinks && !a && (l = c.toLowerCase(), t.ra(l)) && (t.linkInternalFilters || (t.linkInternalFilters = e.location.hostname), i = 0, t.linkExternalFilters ? (i = t.linkExternalFilters.toLowerCase().split(","), d = 1) : t.linkInternalFilters && (i = t.linkInternalFilters.toLowerCase().split(",")), i)) {
                for (s = 0; s < i.length; s++) u = i[s], l.indexOf(u) >= 0 && (m = 1);
                m ? d && (a = "e") : d || (a = "e")
              }
            }
            t.linkObject = r, t.linkURL = c, t.linkType = a, (t.trackClickMap || t.trackInlineStats) && (t.g = "", r && (a = t.pageName, c = 1, r = r.sourceIndex, a || (a = t.pageURL, c = 0), e.s_objectID && (o.id = e.s_objectID, r = o.type = 1), a && o && o.id && n && (t.g = "&pid=" + t.escape(a.substring(0, 255)) + (c ? "&pidt=" + c : "") + "&oid=" + t.escape(o.id.substring(0, 100)) + (o.type ? "&oidt=" + o.type : "") + "&ot=" + n + (r ? "&oi=" + r : ""))))
          }, t.Ya = function() {
            var e = t.ca,
              n = t.linkType,
              o = t.linkURL,
              i = t.linkName;
            if (n && (o || i) && (n = n.toLowerCase(), "d" != n && "e" != n && (n = "o"), t.pe = "lnk_" + n, t.pev1 = o ? t.escape(o) : "", t.pev2 = i ? t.escape(i) : "", e = 1), t.abort && (e = 0), t.trackClickMap || t.trackInlineStats) {
              n = {}, o = 0;
              var s, r, a,
                c = t.cookieRead("s_sq"),
                l = c ? c.split("&") : 0;
              if (c = 0, l)
                for (s = 0; s < l.length; s++) r = l[s].split("="), i = t.unescape(r[0]).split(","), r = t.unescape(r[1]), n[r] = i;
              if (i = t.account.split(","), e || t.g) {
                e && !t.g && (c = 1);
                for (r in n)
                  if (!Object.prototype[r])
                    for (s = 0; s < i.length; s++)
                      for (c && (a = n[r].join(","), a == t.account && (t.g += ("&" != r.charAt(0) ? "&" : "") + r, n[r] = [], o = 1)), l = 0; l < n[r].length; l++) a = n[r][l], a == i[s] && (c && (t.g += "&u=" + t.escape(a) + ("&" != r.charAt(0) ? "&" : "") + r + "&u=0"), n[r].splice(l, 1), o = 1);
                if (e || (o = 1), o) {
                  c = "", s = 2, !e && t.g && (c = t.escape(i.join(",")) + "=" + t.escape(t.g), s = 1);
                  for (r in n) !Object.prototype[r] && s > 0 && n[r].length > 0 && (c += (c ? "&" : "") + t.escape(n[r].join(",")) + "=" + t.escape(r), s--);
                  t.cookieWrite("s_sq", c)
                }
              }
            }
            return e
          }, t.Za = function() {
            if (!t.nb) {
              var e, n,
                o = new Date,
                i = s.location,
                r = n = e = "",
                a = "",
                c = "",
                l = "1.2",
                u = t.cookieWrite("s_cc", "true", 0) ? "Y" : "N",
                d = "",
                m = "";
              if (o.setUTCDate && (l = "1.3", 0..toPrecision && (l = "1.5", o = [], o.forEach))) {
                l = "1.6", n = 0, e = {};try {
                  n = new Iterator(e), n.next && (l = "1.7", o.reduce && (l = "1.8", l.trim && (l = "1.8.1", Date.parse && (l = "1.8.2", Object.create && (l = "1.8.5")))))
                } catch (p) {}
              }
              e = screen.width + "x" + screen.height, r = navigator.javaEnabled() ? "Y" : "N", n = screen.pixelDepth ? screen.pixelDepth : screen.colorDepth, a = t.w.innerWidth ? t.w.innerWidth : t.d.documentElement.offsetWidth, c = t.w.innerHeight ? t.w.innerHeight : t.d.documentElement.offsetHeight;try {
                t.b.addBehavior("#default#homePage"), d = t.b.ub(i) ? "Y" : "N"
              } catch (h) {} try {
                t.b.addBehavior("#default#clientCaps"), m = t.b.connectionType
              } catch (f) {}
              t.resolution = e, t.colorDepth = n, t.javascriptVersion = l, t.javaEnabled = r, t.cookiesEnabled = u, t.browserWidth = a, t.browserHeight = c, t.connectionType = m, t.homepage = d, t.nb = 1
            }
          }, t.I = {}, t.loadModule = function(n, o) {
            var i = t.I[n];
            if (!i) {
              i = e["AppMeasurement_Module_" + n] ? new e["AppMeasurement_Module_" + n](t) : {}, t.I[n] = t[n] = i, i.Fa = function() {
                return i.Ja
              }, i.Ka = function(e) {
                (i.Ja = e) && (t[n + "_onLoad"] = e, t.B(n + "_onLoad", [t, i], 1) || e(t, i))
              };try {
                Object.defineProperty ? Object.defineProperty(i, "onLoad", {
                  get: i.Fa,
                  set: i.Ka
                }) : i._olc = 1
              } catch (s) {
                i._olc = 1
              }
            }
            o && (t[n + "_onLoad"] = o, t.B(n + "_onLoad", [t, i], 1) || o(t, i))
          }, t.q = function(e) {
            var n, o;
            for (n in t.I)
              if (!Object.prototype[n] && (o = t.I[n]) && (o._olc && o.onLoad && (o._olc = 0, o.onLoad(t, o)), o[e] && o[e]())) return 1;
            return 0
          }, t.bb = function() {
            var e = Math.floor(1e13 * Math.random()),
              n = t.visitorSampling,
              o = t.visitorSamplingGroup;
            o = "s_vsn_" + (t.visitorNamespace ? t.visitorNamespace : t.account) + (o ? "_" + o : "");
            var i = t.cookieRead(o);
            if (n) {
              if (i && (i = parseInt(i)), !i) {
                if (!t.cookieWrite(o, e)) return 0;
                i = e
              }
              if (i % 1e4 > v) return 0
            }
            return 1
          }, t.K = function(e, n) {
            var o, i, s, r, a, c;
            for (o = 0; 2 > o; o++)
              for (i = o > 0 ? t.ia : t.c, s = 0; s < i.length; s++)
                if (r = i[s], (a = e[r]) || e["!" + r]) {
                  if (!n && ("contextData" == r || "retrieveLightData" == r) && t[r])
                    for (c in t[r]) a[c] || (a[c] = t[r][c]);
                  t[r] = a
            }
          }, t.Aa = function(e, n) {
            var o, i, s, r;
            for (o = 0; 2 > o; o++)
              for (i = o > 0 ? t.ia : t.c, s = 0; s < i.length; s++) r = i[s], e[r] = t[r], !n && !e[r] && (e["!" + r] = 1)
          }, t.Ua = function(t) {
            var e, n, o, i, s, r,
              a = 0,
              c = "",
              l = "";
            if (t && t.length > 255 && (e = "" + t, n = e.indexOf("?"), n > 0 && (r = e.substring(n + 1), e = e.substring(0, n), i = e.toLowerCase(), o = 0, "http://" == i.substring(0, 7) ? o += 7 : "https://" == i.substring(0, 8) && (o += 8), n = i.indexOf("/", o), n > 0 && (i = i.substring(o, n), s = e.substring(n), e = e.substring(0, n), i.indexOf("google") >= 0 ? a = ",q,ie,start,search_key,word,kw,cd," : i.indexOf("yahoo.co") >= 0 && (a = ",p,ei,"), a && r)))) {
              if ((t = r.split("&")) && t.length > 1) {
                for (o = 0; o < t.length; o++) i = t[o], n = i.indexOf("="), n > 0 && a.indexOf("," + i.substring(0, n) + ",") >= 0 ? c += (c ? "&" : "") + i : l += (l ? "&" : "") + i;
                c && l ? r = c + "&" + l : l = ""
              }
              n = 253 - (r.length - l.length) - e.length, t = e + (n > 0 ? s.substring(0, n) : "") + "?" + r
            }
            return t
          }, t.U = !1, t.O = !1, t.Ia = function(e) {
            t.marketingCloudVisitorID = e, t.O = !0, t.k()
          }, t.R = !1, t.L = !1, t.Ca = function(e) {
            t.analyticsVisitorID = e, t.L = !0, t.k()
          }, t.T = !1, t.N = !1, t.Ea = function(e) {
            t.audienceManagerLocationHint = e, t.N = !0, t.k()
          }, t.S = !1, t.M = !1, t.Da = function(e) {
            t.audienceManagerBlob = e, t.M = !0, t.k()
          }, t.isReadyToTrack = function() {
            var e = !0,
              n = t.visitor;
            return n && n.isAllowed() && (!t.U && !t.marketingCloudVisitorID && n.getMarketingCloudVisitorID && (t.U = !0, t.marketingCloudVisitorID = n.getMarketingCloudVisitorID([t, t.Ia]), t.marketingCloudVisitorID) && (t.O = !0), !t.R && !t.analyticsVisitorID && n.getAnalyticsVisitorID && (t.R = !0, t.analyticsVisitorID = n.getAnalyticsVisitorID([t, t.Ca]), t.analyticsVisitorID) && (t.L = !0), !t.T && !t.audienceManagerLocationHint && n.getAudienceManagerLocationHint && (t.T = !0, t.audienceManagerLocationHint = n.getAudienceManagerLocationHint([t, t.Ea]), t.audienceManagerLocationHint) && (t.N = !0), !t.S && !t.audienceManagerBlob && n.getAudienceManagerBlob && (t.S = !0, t.audienceManagerBlob = n.getAudienceManagerBlob([t, t.Da]), t.audienceManagerBlob) && (t.M = !0), (t.U && !t.O && !t.marketingCloudVisitorID || t.R && !t.L && !t.analyticsVisitorID || t.T && !t.N && !t.audienceManagerLocationHint || t.S && !t.M && !t.audienceManagerBlob) && (e = !1)), e
          }, t.j = n, t.l = 0, t.callbackWhenReadyToTrack = function(e, o, i) {
            var s;
            s = {}, s.Oa = e, s.Na = o, s.La = i, t.j == n && (t.j = []), t.j.push(s), 0 == t.l && (t.l = setInterval(t.k, 100))
          }, t.k = function() {
            var e;
            if (t.isReadyToTrack() && (t.l && (clearInterval(t.l), t.l = 0), t.j != n))
              for (; t.j.length > 0;) e = t.j.shift(), e.Na.apply(e.Oa, e.La)
          }, t.Ga = function(e) {
            var o, i,
              s = n,
              r = n;
            if (!t.isReadyToTrack()) {
              if (o = [], e != n)
                for (i in s = {}, e) s[i] = e[i];
              return r = {}, t.Aa(r, !0), o.push(s), o.push(r), t.callbackWhenReadyToTrack(t, t.track, o), !0
            }
            return !1
          }, t.Wa = function() {
            var e,
              n = t.cookieRead("s_fid"),
              o = "",
              i = "";
            e = 8;
            var s = 4;
            if (!n || n.indexOf("-") < 0) {
              for (n = 0; 16 > n; n++) e = Math.floor(Math.random() * e), o += "0123456789ABCDEF".substring(e, e + 1), e = Math.floor(Math.random() * s), i += "0123456789ABCDEF".substring(e, e + 1), e = s = 16;
              n = o + "-" + i
            }
            return t.cookieWrite("s_fid", n, 1) || (n = 0), n
          }, t.t = t.track = function(n, o) {
            var i,
              r = new Date,
              a = "s" + Math.floor(r.getTime() / 108e5) % 10 + Math.floor(1e13 * Math.random()),
              c = r.getYear();
            c = "t=" + t.escape(r.getDate() + "/" + r.getMonth() + "/" + (1900 > c ? c + 1900 : c) + " " + r.getHours() + ":" + r.getMinutes() + ":" + r.getSeconds() + " " + r.getDay() + " " + r.getTimezoneOffset()), t.visitor && (t.visitor.getAuthState && (t.authState = t.visitor.getAuthState()), !t.supplementalDataID && t.visitor.getSupplementalDataID && (t.supplementalDataID = t.visitor.getSupplementalDataID("AppMeasurement:" + t._in, t.expectSupplementalData ? !1 : !0))), t.q("_s"), t.B("track", arguments) || (t.Ga(n) || (o && t.K(o), n && (i = {}, t.Aa(i, 0), t.K(n)), t.bb() && (t.analyticsVisitorID || t.marketingCloudVisitorID || (t.fid = t.Wa()), t.hb(), t.usePlugins && t.doPlugins && t.doPlugins(t), t.account && (t.abort || (t.trackOffline && !t.timestamp && (t.timestamp = Math.floor(r.getTime() / 1e3)), r = e.location, t.pageURL || (t.pageURL = r.href ? r.href : r), t.referrer || t.Ba || (t.referrer = s.document.referrer, t.Ba = 1), t.referrer = t.Ua(t.referrer), t.q("_g")), t.Ya() && !t.abort && (t.Za(), c += t.Xa(), t.gb(a, c), t.q("_t"), t.referrer = ""))), n && t.K(i, 1)), t.abort = t.supplementalDataID = t.timestamp = t.pageURLRest = t.linkObject = t.clickObject = t.linkURL = t.linkName = t.linkType = e.vb = t.pe = t.pev1 = t.pev2 = t.pev3 = t.g = 0)
          }, t.tl = t.trackLink = function(e, n, o, i, s) {
            return t.linkObject = e, t.linkType = n, t.linkName = o, s && (t.i = e, t.p = s), t.track(i)
          }, t.trackLight = function(e, n, o, i) {
            return t.lightProfileID = e, t.lightStoreForSeconds = n, t.lightIncrementBy = o, t.track(i)
          }, t.clearVars = function() {
            var e, n;
            for (e = 0; e < t.c.length; e++) n = t.c[e], ("prop" == n.substring(0, 4) || "eVar" == n.substring(0, 4) || "hier" == n.substring(0, 4) || "list" == n.substring(0, 4) || "channel" == n || "events" == n || "eventList" == n || "products" == n || "productList" == n || "purchaseID" == n || "transactionID" == n || "state" == n || "zip" == n || "campaign" == n) && (t[n] = void 0)
          }, t.tagContainerMarker = "", t.gb = function(e, n) {
            var o,
              i = t.trackingServer;
            o = "";
            var s = t.dc,
              r = "sc.",
              a = t.visitorNamespace;
            i ? t.trackingServerSecure && t.ssl && (i = t.trackingServerSecure) : (a || (a = t.account, i = a.indexOf(","), i >= 0 && (a = a.substring(0, i)), a = a.replace(/[^A-Za-z0-9]/g, "")), o || (o = "2o7.net"), s = s ? ("" + s).toLowerCase() : "d1", "2o7.net" == o && ("d1" == s ? s = "112" : "d2" == s && (s = "122"), r = ""), i = a + "." + s + "." + r + o), o = t.ssl ? "https://" : "http://", s = t.AudienceManagement && t.AudienceManagement.isReady(), o += i + "/b/ss/" + t.account + "/" + (t.mobile ? "5." : "") + (s ? "10" : "1") + "/JS-" + t.version + (t.mb ? "T" : "") + (t.tagContainerMarker ? "-" + t.tagContainerMarker : "") + "/" + e + "?AQB=1&ndh=1&pf=1&" + (s ? "callback=s_c_il[" + t._in + "].AudienceManagement.passData&" : "") + n + "&AQE=1", t.Sa(o), t.Y()
          }, t.Sa = function(e) {
            t.e || t.$a(), t.e.push(e), t.aa = t.r(), t.za()
          }, t.$a = function() {
            t.e = t.cb(), t.e || (t.e = [])
          }, t.cb = function() {
            var n, o;
            if (t.fa()) {
              try {
                (o = e.localStorage.getItem(t.da())) && (n = e.JSON.parse(o))
              } catch (i) {} return n
            }
          }, t.fa = function() {
            var n = !0;
            return t.trackOffline && t.offlineFilename && e.localStorage && e.JSON || (n = !1), n
          }, t.pa = function() {
            var e = 0;
            return t.e && (e = t.e.length), t.v && e++, e
          }, t.Y = function() {
            if (!t.v)
              if (t.qa = n, t.ea) t.aa > t.G && t.xa(t.e), t.ha(500); else {
                var e = t.Ma();
                e > 0 ? t.ha(e) : (e = t.na()) && (t.v = 1, t.fb(e), t.jb(e))
            }
          }, t.ha = function(e) {
            t.qa || (e || (e = 0), t.qa = setTimeout(t.Y, e))
          }, t.Ma = function() {
            var e;
            return !t.trackOffline || t.offlineThrottleDelay <= 0 ? 0 : (e = t.r() - t.wa, t.offlineThrottleDelay < e ? 0 : t.offlineThrottleDelay - e)
          }, t.na = function() {
            return t.e.length > 0 ? t.e.shift() : void 0
          }, t.fb = function(e) {
            if (t.debugTracking) {
              var n = "AppMeasurement Debug: " + e;
              e = e.split("&");
              var o;
              for (o = 0; o < e.length; o++) n += "\n	" + t.unescape(e[o]);
              t.eb(n)
            }
          }, t.Ha = function() {
            return t.marketingCloudVisitorID || t.analyticsVisitorID
          }, t.Q = !1;var a;try {
            a = JSON.parse('{"x":"y"}')
          } catch (c) {
            a = null
          } a && "y" == a.x ? (t.Q = !0, t.P = function(t) {
            return JSON.parse(t)
          }) : e.$ && e.$.parseJSON ? (t.P = function(t) {
            return e.$.parseJSON(t)
          }, t.Q = !0) : t.P = function() {
            return null
          }, t.jb = function(n) {
            var o, i, s;
            if (t.Ha() && n.length > 2047 && ("undefined" != typeof XMLHttpRequest && (o = new XMLHttpRequest, "withCredentials" in o ? i = 1 : o = 0), !o && "undefined" != typeof XDomainRequest && (o = new XDomainRequest, i = 2), o && t.AudienceManagement && t.AudienceManagement.isReady()) && (t.Q ? o.ja = !0 : o = 0), !o && t.ab && (n = n.substring(0, 2047)), !o && t.d.createElement && t.AudienceManagement && t.AudienceManagement.isReady() && (o = t.d.createElement("SCRIPT")) && "async" in o && ((s = (s = t.d.getElementsByTagName("HEAD")) && s[0] ? s[0] : t.d.body) ? (o.type = "text/javascript", o.setAttribute("async", "async"), i = 3) : o = 0), o || (o = new Image, o.alt = ""), o.la = function() {
                try {
                  t.ga && (clearTimeout(t.ga), t.ga = 0), o.timeout && (clearTimeout(o.timeout), o.timeout = 0)
                } catch (e) {}
              }, o.onload = o.lb = function() {
                if (o.la(), t.Ra(), t.V(), t.v = 0, t.Y(), o.ja) {
                  o.ja = !1;try {
                    var e = t.P(o.responseText);AudienceManagement.passData(e)
                  } catch (n) {}
                }
              }, o.onabort = o.onerror = o.Ta = function() {
                o.la(), (t.trackOffline || t.ea) && t.v && t.e.unshift(t.Qa), t.v = 0, t.aa > t.G && t.xa(t.e), t.V(), t.ha(500)
              }, o.onreadystatechange = function() {
                4 == o.readyState && (200 == o.status ? o.lb() : o.Ta())
              }, t.wa = t.r(), 1 == i || 2 == i) {
              var r = n.indexOf("?");
              s = n.substring(0, r), r = n.substring(r + 1), r = r.replace(/&callback=[a-zA-Z0-9_.\[\]]+/, ""), 1 == i ? (o.open("POST", s, !0), o.send(r)) : 2 == i && (o.open("POST", s), o.send(r))
            } else if (o.src = n, 3 == i) {
              if (t.ua) try {
                  s.removeChild(t.ua)
                } catch (a) {} s.firstChild ? s.insertBefore(o, s.firstChild) : s.appendChild(o), t.ua = t.Pa
            }
            o.abort && (t.ga = setTimeout(o.abort, 5e3)), t.Qa = n, t.Pa = e["s_i_" + t.replace(t.account, ",", "_")] = o, (t.useForcedLinkTracking && t.A || t.p) && (t.forcedLinkTrackingTimeout || (t.forcedLinkTrackingTimeout = 250), t.W = setTimeout(t.V, t.forcedLinkTrackingTimeout))
          }, t.Ra = function() {
            if (t.fa() && !(t.va > t.G)) try {
                e.localStorage.removeItem(t.da()), t.va = t.r()
              } catch (n) {}
          }, t.xa = function(n) {
            if (t.fa()) {
              t.za();try {
                e.localStorage.setItem(t.da(), e.JSON.stringify(n)), t.G = t.r()
              } catch (o) {}
            }
          }, t.za = function() {
            if (t.trackOffline)
              for ((!t.offlineLimit || t.offlineLimit <= 0) && (t.offlineLimit = 10); t.e.length > t.offlineLimit;) t.na()
          }, t.forceOffline = function() {
            t.ea = !0
          }, t.forceOnline = function() {
            t.ea = !1
          }, t.da = function() {
            return t.offlineFilename + "-" + t.visitorNamespace + t.account
          }, t.r = function() {
            return (new Date).getTime()
          }, t.ra = function(t) {
            return t = t.toLowerCase(), 0 != t.indexOf("#") && 0 != t.indexOf("about:") && 0 != t.indexOf("opera:") && 0 != t.indexOf("javascript:") ? !0 : !1
          }, t.setTagContainer = function(e) {
            var n, o, i;
            for (t.mb = e, n = 0; n < t._il.length; n++)
              if ((o = t._il[n]) && "s_l" == o._c && o.tagContainerName == e) {
                if (t.K(o), o.lmq)
                  for (n = 0; n < o.lmq.length; n++) i = o.lmq[n], t.loadModule(i.n);
                if (o.ml)
                  for (i in o.ml)
                    if (t[i])
                      for (n in e = t[i], i = o.ml[i]) !Object.prototype[n] && ("function" != typeof i[n] || ("" + i[n]).indexOf("s_c_il") < 0) && (e[n] = i[n]);
                if (o.mmq)
                  for (n = 0; n < o.mmq.length; n++) i = o.mmq[n], t[i.m] && (e = t[i.m], e[i.f] && "function" == typeof e[i.f] && (i.a ? e[i.f].apply(e, i.a) : e[i.f].apply(e)));
                if (o.tq)
                  for (n = 0; n < o.tq.length; n++) t.track(o.tq[n]);
                o.s = t;break
            }
          }, t.Util = {
            urlEncode: t.escape,
            urlDecode: t.unescape,
            cookieRead: t.cookieRead,
            cookieWrite: t.cookieWrite,
            getQueryParam: function(n, o, i) {
              var s;
              return o || (o = t.pageURL ? t.pageURL : e.location), i || (i = "&"), n && o && (o = "" + o, s = o.indexOf("?"), s >= 0 && (o = i + o.substring(s + 1) + i, s = o.indexOf(i + n + "="), s >= 0 && (o = o.substring(s + i.length + n.length + 1), s = o.indexOf(i), s >= 0 && (o = o.substring(0, s)), o.length > 0))) ? t.unescape(o) : ""
            }
          }, t.z = ["supplementalDataID", "timestamp", "dynamicVariablePrefix", "visitorID", "marketingCloudVisitorID", "analyticsVisitorID", "audienceManagerLocationHint", "authState", "fid", "vmk", "visitorMigrationKey", "visitorMigrationServer", "visitorMigrationServerSecure", "charSet", "visitorNamespace", "cookieDomainPeriods", "fpCookieDomainPeriods", "cookieLifetime", "pageName", "pageURL", "referrer", "contextData", "currencyCode", "lightProfileID", "lightStoreForSeconds", "lightIncrementBy", "retrieveLightProfiles", "deleteLightProfiles", "retrieveLightData", "pe", "pev1", "pev2", "pev3", "pageURLRest"], t.c = t.z.concat(["purchaseID", "variableProvider", "channel", "server", "pageType", "transactionID", "campaign", "state", "zip", "events", "events2", "products", "audienceManagerBlob", "tnt"]), t.ba = ["timestamp", "charSet", "visitorNamespace", "cookieDomainPeriods", "cookieLifetime", "contextData", "lightProfileID", "lightStoreForSeconds", "lightIncrementBy"], t.H = t.ba.slice(0), t.ia = ["account", "allAccounts", "debugTracking", "visitor", "trackOffline", "offlineLimit", "offlineThrottleDelay", "offlineFilename", "usePlugins", "doPlugins", "configURL", "visitorSampling", "visitorSamplingGroup", "linkObject", "clickObject", "linkURL", "linkName", "linkType", "trackDownloadLinks", "trackExternalLinks", "trackClickMap", "trackInlineStats", "linkLeaveQueryString", "linkTrackVars", "linkTrackEvents", "linkDownloadFileTypes", "linkExternalFilters", "linkInternalFilters", "useForcedLinkTracking", "forcedLinkTrackingTimeout", "trackingServer", "trackingServerSecure", "ssl", "abort", "mobile", "dc", "lightTrackVars", "maxDelay", "expectSupplementalData", "AudienceManagement"];
          for (o = 0; 250 >= o; o++) 76 > o && (t.c.push("prop" + o), t.H.push("prop" + o)), t.c.push("eVar" + o), t.H.push("eVar" + o), 6 > o && t.c.push("hier" + o), 4 > o && t.c.push("list" + o);
          o = ["latitude", "longitude", "resolution", "colorDepth", "javascriptVersion", "javaEnabled", "cookiesEnabled", "browserWidth", "browserHeight", "connectionType", "homepage"], t.c = t.c.concat(o), t.z = t.z.concat(o), t.ssl = e.location.protocol.toLowerCase().indexOf("https") >= 0, t.charSet = "UTF-8", t.contextData = {}, t.offlineThrottleDelay = 0, t.offlineFilename = "AppMeasurement.offline", t.wa = 0, t.aa = 0, t.G = 0, t.va = 0, t.linkDownloadFileTypes = "exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx", t.w = e, t.d = e.document;try {
            t.ab = "Microsoft Internet Explorer" == navigator.appName
          } catch (u) {} t.V = function() {
            t.W && (e.clearTimeout(t.W), t.W = n), t.i && t.A && t.i.dispatchEvent(t.A), t.p && ("function" == typeof t.p ? t.p() : t.i && t.i.href && (t.d.location = t.i.href)), t.i = t.A = t.p = 0
          }, t.ya = function() {
            t.b = t.d.body, t.b ? (t.o = function(n) {
              var o, i, s, r, a;
              if (!(t.d && t.d.getElementById("cppXYctnr") || n && n["s_fe_" + t._in])) {
                if (t.ka) {
                  if (!t.useForcedLinkTracking) return t.b.removeEventListener("click", t.o, !0), void (t.ka = t.useForcedLinkTracking = 0);
                  t.b.removeEventListener("click", t.o, !1)
                } else
                  t.useForcedLinkTracking = 0;
                t.clickObject = n.srcElement ? n.srcElement : n.target;try {
                  if (!t.clickObject || t.F && t.F == t.clickObject || !(t.clickObject.tagName || t.clickObject.parentElement || t.clickObject.parentNode))
                    t.clickObject = 0; else {
                    var c = t.F = t.clickObject;
                    if (t.Z && (clearTimeout(t.Z), t.Z = 0), t.Z = setTimeout(function() {
                        t.F == c && (t.F = 0)
                      }, 1e4), s = t.pa(), t.track(), s < t.pa() && t.useForcedLinkTracking && n.target) {
                      for (r = n.target; r && r != t.b && "A" != r.tagName.toUpperCase() && "AREA" != r.tagName.toUpperCase();) r = r.parentNode;
                      if (r && (a = r.href, t.ra(a) || (a = 0), i = r.target, n.target.dispatchEvent && a && (!i || "_self" == i || "_top" == i || "_parent" == i || e.name && i == e.name))) {
                        try {
                          o = t.d.createEvent("MouseEvents")
                        } catch (l) {
                          o = new e.MouseEvent
                        }
                        if (o) {
                          try {
                            o.initMouseEvent("click", n.bubbles, n.cancelable, n.view, n.detail, n.screenX, n.screenY, n.clientX, n.clientY, n.ctrlKey, n.altKey, n.shiftKey, n.metaKey, n.button, n.relatedTarget)
                          } catch (u) {
                            o = 0
                          } o && (o["s_fe_" + t._in] = o.s_fe = 1, n.stopPropagation(), n.kb && n.kb(), n.preventDefault(), t.i = n.target, t.A = o)
                        }
                      }
                    }
                  }
                } catch (d) {
                  t.clickObject = 0
                }
              }
            }, t.b && t.b.attachEvent ? t.b.attachEvent("onclick", t.o) : t.b && t.b.addEventListener && (navigator && (navigator.userAgent.indexOf("WebKit") >= 0 && t.d.createEvent || navigator.userAgent.indexOf("Firefox/2") >= 0 && e.MouseEvent) && (t.ka = 1, t.useForcedLinkTracking = 1, t.b.addEventListener("click", t.o, !0)), t.b.addEventListener("click", t.o, !1))) : setTimeout(t.ya, 30)
          }, t.ya()
        }
        function n(t) {
          var n, o, i, s, r,
            a = window.s_c_il,
            c = t.split(","),
            l = 0;
          if (a)
            for (o = 0; !l && o < a.length;) {
              if (n = a[o], "s_c" == n._c && (n.account || n.oun))
                if (n.account && n.account == t)
                  l = 1;else
                  for (i = n.account ? n.account : n.oun, i = n.allAccounts ? n.allAccounts : i.split(","), s = 0; s < c.length; s++)
                    for (r = 0; r < i.length; r++) c[s] == i[r] && (l = 1);
              o++
          }
          return l || (n = new e), n.setAccount ? n.setAccount(t) : n.sa && n.sa(t), n
        }
        function o() {
          var t, e, o,
            i = window,
            s = i.s_giq;
          if (s)
            for (t = 0; t < s.length; t++) e = s[t], o = n(e.oun), o.setAccount(e.un), o.setTagContainer(e.tagContainerName);
          i.s_giq = 0
        }
        var i = this.s,
          s = this.s_sv_dynamic_root,
          r = this.s_sv_gather_root,
          a = this.j,
          i = n(s_account);
        i.charSet = "UTF-8", i.currencyCode = "GBP", i.trackDownloadLinks = !0, i.trackExternalLinks = !1, i.trackInlineStats = !0, i.linkDownloadFileTypes = "exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx", i.linkInternalFilters = "javascript:,adinfo-guardian.co.uk,dating.guardian.co.uk,guardian.co.uk,guardian.greatgetaways.co.uk,guardian.lcplc-online.co.uk,guardian.oddschecker.com,guardian.pickthescore.co.uk,guardian.sportinglife.com,guardian.touch-line.com,guardian.unbiased.co.uk,guardianapis.com,guardianapps.co.uk,guardianbooks.co.uk,guardianbookshop.co.uk,guardiancottages.co.uk,guardiandigitalcomparison.co.uk,guardiandirectsubs.co.uk,guardianeatright.co.uk,guardianecostore.co.uk,guardianenergycomparison.co.uk,guardianenergycomparison.com,guardianfashionstore.co.uk,guardiangardencentre.co.uk,guardiangiftexperiences.co.uk,guardianholidayoffers.co.uk,guardianhomeexchange.co.uk,guardianhomeexchange.com,guardianinvesting.co.uk,guardianjobs.co.uk,guardianjobs.com,guardianjobs.mobi,guardianjobsrecruiter.co.uk,guardiannews.com,guardian-newspaper.com,guardianoffers.co.uk,guardianprofessional.co.uk,guardianpublic.co.uk,guardiansubscriptions.co.uk,guardiantickets.co.uk,guardianvouchercodes.co.uk,guardianweekly.co.uk,guardianweekly.com,id.guardian.co.uk,ivebeenthere.co.uk,jobs.guardian.co.uk,kable.co.uk,money-deals.co.uk,mps-expenses.guardian.co.uk,ogenterprises.co.uk,ogtravelinsurance.co.uk,sixsongsof.me,sixwordmemoirs.co.uk,smarthealthcare.com,sofacinema.co.uk,static.guim.co.uk,theguardian.co.uk,theguardian.com,traffic.outbrain.com,tvlistings.guardian.co.uk", i.linkLeaveQueryString = !1, i.linkTrackVars = "None", i.linkTrackEvents = "None", i._tpDST = {
          2012: "3/25,10/28",
          2013: "3/31,10/27",
          2014: "3/30,10/26",
          2015: "3/29,10/25",
          2016: "3/27,10/30",
          2017: "3/26,10/29",
          2018: "3/25,10/28",
          2019: "3/31,10/27"
        }, i.usePlugins = !0, i.doPlugins = t;
        var s = "survey.112.2o7.net/survey/dynamic",
          r = "survey.112.2o7.net/survey/gather";
        i.loadMediaModule = function(t, e) {
          var n = this;
          n.loadModule("Media"), n.Media.autoTrack = !1, n.Media.trackWhilePlaying = !0, n.Media.trackSeconds = 15, n.Media.trackVars = "events,eVar7,eVar43,eVar44,prop44,eVar47,eVar48,eVar56,eVar61", n.Media.trackEvents = "event17,event18,event21,event22,event23,event57,event63", n.Media.trackMilestones = "25,50,75", n.Media.segmentByMilestones = !0, n.Media.trackUsingContextData = !0, n.Media.contextDataMapping = {
            "a.media.name": "eVar44,prop44",
            "a.media.segment": "eVar48",
            "a.contentType": "eVar43",
            "a.media.timePlayed": "event57",
            "a.media.view": "event17",
            "a.media.segmentView": "event63",
            "a.media.complete": "event18",
            "a.media.milestones": {
              25: "event21",
              50: "event22",
              75: "event23"
            }
          }, n.Media.monitor = function(t, e) {
            "OPEN" == e.event && (t.eVar7 = t.pageName, t.eVar61 = t._GUVideo.restricted ? "restricted" : "not restricted", t._GUVideo.ad ? t.eVar47 = "video ad" : (t.eVar47 = "video content", t.eVar56 = t._GUVideo.provider), t.Media.track(e.name))
          }, n._GUVideo = {}, n._GUVideo.provider = t, n._GUVideo.restricted = e
        }, i.trackVideoContent = function(t, e) {
          var n = this;
          n.Media.autoTrack = !1, n.Media.trackVars = "events,eVar7,eVar11,eVar43,eVar44,prop44,eVar47,eVar48,eVar56,eVar61", n.Media.trackEvents = "event17,event18,event21,event22,event23,event57,event63", n.Media.trackMilestones = "25,50,75", n.Media.segmentByMilestones = !0, n.Media.trackUsingContextData = !0, n.Media.contextDataMapping = {
            "a.media.name": "eVar44,prop44",
            "a.media.segment": "eVar48",
            "a.contentType": "eVar43",
            "a.media.timePlayed": "event57",
            "a.media.view": "event17",
            "a.media.segmentView": "event63",
            "a.media.complete": "event18",
            "a.media.milestones": {
              25: "event21",
              50: "event22",
              75: "event23"
            }
          }, n._GUVideo.ad = !1, n._GUVideo.provider = t, n._GUVideo.restricted = e
        }, i.trackVideoAd = function() {
          var t = this;
          t.Media.autoTrack = !1, t.Media.trackVars = "events,eVar7,eVar11,eVar43,prop44,eVar44,eVar47,eVar56,eVar61", t.Media.trackEvents = "event57,event59,event64", t.Media.segmentByMilestones = !1, t.Media.trackUsingContextData = !0, t.Media.contextDataMapping = {
            "a.media.name": "eVar44,prop44",
            "a.contentType": "eVar43",
            "a.media.timePlayed": "event57",
            "a.media.view": "event59",
            "a.media.complete": "event64"
          }, t._GUVideo.ad = !0, t._GUVideo.restricted = !1
        }, i.trackingServer = "hits.guardian.co.uk", i.trackingServerSecure = "hits-secure.guardian.co.uk", i.visitorNamespace = "guardian", i.getValOnce = new Function("v", "c", "e", "t", "var s=this,a=new Date,v=v?v:'',c=c?c:'s_gvo',e=e?e:0,i=t=='m'?60000:86400000;k=s.c_r(c);if(v){a.setTime(a.getTime()+e*i);s.c_w(c,v,e==0?0:a);}return v==k?'':v"), i.getDaysSinceLastVisit = new Function("c", "var s=this,e=new Date(),es=new Date(),cval,cval_s,cval_ss,ct=e.getTime(),day=24*60*60*1000,f1,f2,f3,f4,f5;e.setTime(ct+3*365*day);es.setTime(ct+30*60*1000);f0='Cookies Not Supported';f1='First Visit';f2='More than 30 days';f3='More than 7 days';f4='Less than 7 days';f5='Less than 1 day';cval=s.c_r(c);if(cval && cval.length==0){s.c_w(c,ct,e);s.c_w(c+'_s',f1,es);}else{var d=ct-cval;if(d>30*60*1000){if(d>30*day){s.c_w(c,ct,e);s.c_w(c+'_s',f2,es);}else if(d<30*day+1 && d>7*day){s.c_w(c,ct,e);s.c_w(c+'_s',f3,es);}else if(d<7*day+1 && d>day){s.c_w(c,ct,e);s.c_w(c+'_s',f4,es);}else if(d<day+1){s.c_w(c,ct,e);s.c_w(c+'_s',f5,es);}}else{s.c_w(c,ct,e);cval_ss=s.c_r(c+'_s');s.c_w(c+'_s',cval_ss,es);}}cval_s=s.c_r(c+'_s');if(cval_s.length==0) return f0;else if(cval_s!=f1&&cval_s!=f2&&cval_s!=f3&&cval_s!=f4&&cval_s!=f5) return '';else return cval_s;"), i.crossVisitParticipation = new Function("v", "cn", "ex", "ct", "dl", "ev", "dv", "var s=this,ce;if(typeof(dv)==='undefined')dv=0;if(s.events&&ev){var ay=s.split(ev,',');var ea=s.split(s.events,',');for(var u=0;u<ay.length;u++){for(var x=0;x<ea.length;x++){if(ay[u]==ea[x]){ce=1;}}}}if(!v||v==''){if(ce){s.c_w(cn,'');return'';}else return'';}v=escape(v);var arry=new Array(),a=new Array(),c=s.c_r(cn),g=0,h=new Array();if(c&&c!=''){arry=s.split(c,'],[');for(q=0;q<arry.length;q++){z=arry[q];z=s.repl(z,'[','');z=s.repl(z,']','');z=s.repl(z,\"'\",'');arry[q]=s.split(z,',')}}var e=new Date();e.setFullYear(e.getFullYear()+5);if(dv==0&&arry.length>0&&arry[arry.length-1][0]==v)arry[arry.length-1]=[v,new Date().getTime()];else arry[arry.length]=[v,new Date().getTime()];var start=arry.length-ct<0?0:arry.length-ct;var td=new Date();for(var x=start;x<arry.length;x++){var diff=Math.round((td.getTime()-arry[x][1])/86400000);if(diff<ex){h[g]=unescape(arry[x][0]);a[g]=[arry[x][0],arry[x][1]];g++;}}var data=s.join(a,{delim:',',front:'[',back:']',wrap:\"'\"});s.c_w(cn,data,e);var r=s.join(h,{delim:dl});if(ce)s.c_w(cn,'');return r;"), i.getNewRepeat = new Function("d", "cn", "var s=this,e=new Date(),cval,sval,ct=e.getTime();d=d?d:30;cn=cn?cn:'s_nr';e.setTime(ct+d*24*60*60*1000);cval=s.c_r(cn);if(cval.length==0){s.c_w(cn,ct+'-New',e);return'New';}sval=s.split(cval,'-');if(ct-sval[0]<30*60*1000&&sval[1]=='New'){s.c_w(cn,ct+'-New',e);return'New';}else{s.c_w(cn,ct+'-Repeat',e);return'Repeat';}"), i.getPreviousValue = new Function("v", "c", "el", "var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el){if(s.events){i=s.split(el,',');j=s.split(s.events,',');for(x in i){for(y in j){if(i[x]==j[y]){if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t):s.c_w(c,'no value',t);return r}}}}}else{if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t):s.c_w(c,'no value',t);return r}"), i.getLoadTimeDim = new Function("", "var t='';if(typeof performance!=='undefined'){t=(new Date()).getTime()-performance.timing.requestStart;t=t/1000;t=(t>=0&&t<500)?t.toFixed(1):'';}return t;"), i.inList = new Function("v", "l", "d", "var s=this,ar=Array(),i=0,d=(d)?d:',';if(typeof(l)=='string'){if(s.split)ar=s.split(l,d);else if(l.split)ar=l.split(d);else return-1}else ar=l;while(i<ar.length){if(v==ar[i])return true;i++}return false;"), i.apl = new Function("l", "v", "d", "u", "var s=this,m=0;if(!l)l='';if(u){var i,n,a=s.split(l,d);for(i=0;i<a.length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCase()));}}if(!m)l=l?l+d+v:v;return l"), i.split = new Function("l", "d", "var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x++]=l.substring(0,i);l=l.substring(i+d.length);}return a"), i.getTimeParting = new Function("h", "z", "var s=this,od;od=new Date('1/1/2000');if(od.getDay()!=6||od.getMonth()!=0){return'Data Not Available';}else{var H,M,D,W,U,ds,de,tm,tt,da=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],d=new Date(),a=[];z=z?z:0;z=parseFloat(z);if(s._tpDST && s._tpDST[d.getFullYear()]){var dso=s._tpDST[d.getFullYear()].split(/,/);ds=new Date(dso[0]+'/'+d.getFullYear());de=new Date(dso[1]+'/'+d.getFullYear());if(h=='n'&&d>ds&&d<de){z=z+1;}else if(h=='s'&&(d>de||d<ds)){z=z+1;}}d=d.getTime()+(d.getTimezoneOffset()*60000);d=new Date(d+(3600000*z));H=d.getHours();M=d.getMinutes();M=(M<10)?'0'+M:M;D=d.getDay();U='AM';W='Weekday';if(H>=12){U='PM';H=H-12;}if(H==0){H=12;}if(D==6||D==0){W='Weekend';}D=da[D];tm=H+':'+M+U;tt=H+':'+((M>30)?'30':'00')+U;a=[tm,tt,D,W];return a;}"), i.getParamValue = function(t) {
          var e,
            n = window.location.search,
            o = "&";
          return t && n && (e = n.indexOf("?"), e >= 0 && (n = o + n.substring(e + 1) + o, e = n.indexOf(o + t + "="), e >= 0 && (n = n.substring(e + o.length + t.length + 1), e = n.indexOf(o), e >= 0 && (n = n.substring(0, e)), n.length > 0))) ? i.unescape(n) : ""
        };
        var a = null;
        e.getInstance = n, window.s_objectID || (window.s_objectID = 0), o(), this.s = i, this.s_sv_dynamic_root = s, this.s_sv_gather_root = r, this.j = a
      }.call(System.global), System.get("@@global-helpers").retrieveGlobal(n.id, !1)
  }), function() {
    function t() {
    }
    t.amd = {}, System.register("common/utils/date-formats", [], !1, function(t, e, n) {
      return function() {
        function t(t) {
          return new Date(t).toISOString().substr(0, 10).replace(/-/g, "/")
        }
        return {
          utcDateString: t
        }
      }.call(this)
    })
  }(), System.register("common/views/history/tag.html!github:systemjs/plugin-text@0.0.2", [], !0, function(require, t, e) {
    var n = System.global,
      o = n.define;
    return n.define = void 0, e.exports = '<li class="inline-list__item">\n    <a href="/<%=id%>" class="button button--small button--tag button--secondary" data-link-name="<%=index%> | <%=name%>"><%=name%></a>\n</li>\n', n.define = o, e.exports
  }), System.register("common/views/history/mega-nav.html!github:systemjs/plugin-text@0.0.2", [], !0, function(require, t, e) {
    var n = System.global,
      o = n.define;
    return n.define = void 0, e.exports = '<li class="global-navigation__section js-global-navigation__section--history" data-link-name="shortcuts">\n    <span class="global-navigation__title global-navigation__title--history">recently visited</span>\n    <ul class="global-navigation__children global-navigation__children--history">\n        <%=tags%>\n        <a class="button button--small button--tag button--tertiary" href="/preferences" data-link-name="edit">edit these</a>\n    </ul>\n</li>\n', n.define = o, e.exports
  }), function() {
    function t() {
    }
    t.amd = {}, System.register("common/modules/analytics/register", ["common/utils/mediator", "common/modules/experiments/ab", "common/utils/_"], !1, function(t, e, n) {
      return function(t, e, n) {
        function o(t) {
          c.push({
            name: t,
            status: "unfinished"
          })
        }
        function i(t) {
          n.where(c, {
            name: t
          }).forEach(function(t) {
            t.status = "completed", t.endTime = Date.now() - l + "ms"
          })
        }
        function s(t) {
          n.where(c, {
            name: t
          }).forEach(function(t) {
            t.status = "failed", t.endTime = Date.now() - l + "ms"
          })
        }
        function r() {
          require(["ophan/ng"], function(t) {
            t.record({
              register: c,
              abTestRegister: e.getAbLoggableObject()
            })
          })
        }
        function a() {
          t.on("register:begin", o), t.on("register:end", i), t.on("register:error", s), window.setTimeout(r.bind(), 5e3)
        }
        var c = [],
          l = Date.now();
        return {
          initialise: a,
          begin: o,
          end: i,
          error: s
        }
      }.call(this, t("common/utils/mediator"), t("common/modules/experiments/ab"), t("common/utils/_"))
    })
  }(), function() {
    function t() {
    }
    t.amd = {}, System.register("common/modules/analytics/scrollDepth", ["common/utils/_", "common/utils/mediator"], !1, function(t, e, n) {
      return function(t, e) {
        function n(e) {
          this.opts = t.assign(this.opts, e), this.opts.isContent && (this.opts.contentEl = this.contentEl || document.getElementById("article") || document.getElementById("live-blog")), this.init()
        }
        return n.prototype.opts = {
            changeThreshold: 10,
            isContent: !1,
            pageEl: document.body
          }, n.prototype.data = {
            page: {
              start: (new Date).getTime(),
              depth: 0,
              duration: 0
            },
            content: {
              depth: 0
            }
          }, n.prototype.timeSince = function(t) {
            return (new Date).getTime() - t
          }, n.prototype.getPercentageInViewPort = function(t) {
            var e = t.getBoundingClientRect(),
              n = window.innerHeight || document.body.clientHeight;
            return e.bottom < 0 || e.bottom < n ? 100 : e.top > n ? 0 : e.top > 0 ? 100 / (e.height || 1) * (n - e.top) : 100 / (e.height || 1) * (Math.abs(e.top) + n)
          }, n.prototype.isInViewport = function(t) {
            var e = t.getBoundingClientRect();
            return e.top < (window.innerHeight || document.body.clientHeight) && e.left < (window.innerWidth || document.body.clientWidth)
          }, n.prototype.setData = function(t) {
            var e,
              n = this.opts[t + "El"];
            return n ? (e = this.getPercentageInViewPort(n), e - this.data[t].depth > this.opts.changeThreshold ? (this.data[t].depth = e, "number" == typeof this.data[t].duration && (this.data[t].duration = this.timeSince(this.data[t].start)), !0) : !1) : !1
          }, n.prototype.hasDataChanged = function() {
            var t = this.setData("page"),
              e = this.opts.isContent ? this.setData("content") : !1;
            (t || e) && this.log()
          }, n.prototype.assertScrolling = function() {
            function t() {
              e.emit("scrolldepth:inactive")
            }
            "number" == typeof this.timeoutId && window.clearTimeout(this.timeoutId), this.timeoutId = window.setTimeout(t.bind(this), 1e3)
          }, n.prototype.log = function() {
            e.emit("scrolldepth:data", this.data)
          }, n.prototype.init = function() {
            e.on("window:scroll", t.debounce(this.assertScrolling.bind(this), 200)), e.on("scrolldepth:inactive", this.hasDataChanged.bind(this)), e.on("module:clickstream:click", this.hasDataChanged.bind(this))
          }, n
      }.call(this, t("common/utils/_"), t("common/utils/mediator"))
    })
  }(), function() {
    function t() {
    }
    t.amd = {}, System.register("common/utils/scan", ["common/utils/_"], !1, function(t, e, n) {
      return function(t) {
        return function(e, n, o) {
          return t.reduce(e, function(e, o) {
            return e.concat(n(t.last(e), o))
          }, [o])
        }
      }.call(this, t("common/utils/_"))
    })
  }(), function() {
    function t() {
    }
    t.amd = {}, System.register("common/modules/analytics/simple-metrics", ["common/utils/mediator", "common/modules/analytics/beacon"], !1, function(t, e, n) {
      return function(t, e) {
        return {
          init: function() {
            navigator.sendBeacon && (e.beaconCounts("sm-page-view"), t.on("module:clickstream:click", function(t) {
              var n = [];
              t.samePage ? n.push("sm-interaction-on-same-page") : t.sameHost && n.push("sm-another-guardian-page"), /related-content/.test(t.tag) && n.push("sm-clicked-related-content"), /\| series \|/.test(t.tag) && n.push("sm-clicked-series-component"), /\| most popular \|/.test(t.tag) && n.push("sm-clicked-most-popular-component"), n.length > 0 && e.beaconCounts(n)
            }))
          }
        }
      }.call(this, t("common/utils/mediator"), t("common/modules/analytics/beacon"))
    })
  }(), function() {
    function t() {
    }
    t.amd = {}, System.register("common/utils/formatters", [], !1, function() {
      return {
        integerCommas: function(t) {
          var e, n, o,
            i = parseInt(t, 10);
          if (!isNaN(i)) {
            for (e = i.toFixed(0).split(""), o = e.length, n = e.length - 1; n >= 1; n--) (o - n) % 3 === 0 && e.splice(n, 0, ",");
            return e.join("")
          }
        }
      }
    })
  }(), System.register("common/views/discussion/comment-count.html!github:systemjs/plugin-text@0.0.2", [], !0, function(require, t, e) {
    var n = System.global,
      o = n.define;
    return n.define = void 0, e.exports = '<a class="fc-trail__count fc-trail__count--commentcount" href="<%=url%>" data-link-name="Comment count"><%=icon%> <%=count%></a>\n', n.define = o, e.exports
  }), System.register("common/views/discussion/comment-count--content.html!github:systemjs/plugin-text@0.0.2", [], !0, function(require, t, e) {
    var n = System.global,
      o = n.define;
    return n.define = void 0, e.exports = '<a href="<%=url%>" data-link-name="Comment count" class="commentcount2 tone-colour">\n    <h3 class="commentcount2__heading"><%=icon%> Comments</h3>\n    <span class="commentcount2__value tone-colour"><%=count%></span>\n</a>\n', n.define = o, e.exports
  }), function() {
    function t() {
    }
    t.amd = {}, System.register("common/utils/easing", [], !1, function() {
      "use strict";
      function t(t, n) {
        var o = new Date,
          i = e[t];return function() {
          var t = new Date - o;
          return i(Math.min(1, t / n))
        }
      }
      var e = {
        linear: function(t) {
          return t
        },
        easeInQuad: function(t) {
          return t * t
        },
        easeOutQuad: function(t) {
          return t * (2 - t)
        },
        easeInOutQuad: function(t) {
          return .5 > t ? 2 * t * t : -1 + (4 - 2 * t) * t
        },
        easeInCubic: function(t) {
          return t * t * t
        },
        easeOutCubic: function(t) {
          return --t * t * t + 1
        },
        easeInOutCubic: function(t) {
          return .5 > t ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
        },
        easeInQuart: function(t) {
          return t * t * t * t
        },
        easeOutQuart: function(t) {
          return 1 - --t * t * t * t
        },
        easeInOutQuart: function(t) {
          return .5 > t ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t
        },
        easeInQuint: function(t) {
          return t * t * t * t * t
        },
        easeOutQuint: function(t) {
          return 1 + --t * t * t * t * t
        },
        easeInOutQuint: function(t) {
          return .5 > t ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t
        }
      };
      return {
        functions: e,
        create: t
      }
    })
  }(), function() {
    function t() {
    }
    t.amd = {}, System.register("common/modules/analytics/discussion", ["npm:bonzo@1.4.0", "common/utils/_", "common/utils/$", "common/utils/mediator", "common/modules/analytics/omniture", "common/modules/identity/api"], !1, function(t, e, n) {
      return function(t, e, n, o, i, r) {
        var a = {};
        return a.seen = !1, a.getLinkTrackVars = function(t) {
            t = t || [];
            var e = ["prop6", "prop19", "prop75", "eVar8", "eVar19", "eVar31", "eVar51", "eVar66"];
            return "," + e.concat(t).join(",")
          }, a.comment = function(t) {
            i.populateEventProperties("comment"), s.events += ",event51", s.linkTrackVars += this.getLinkTrackVars(["eVar68"]), s.linkTrackEvents += ",event51", s.eVar66 = r.getUserFromCookie().id || null, s.eVar68 = t.replyTo ? "response" : "comment", s.eVar67 = t.replyTo ? t.replyTo.authorId : null, s.tl(!0, "o", "comment")
          }, a.recommend = function(t) {
            i.populateEventProperties("Recommend a comment"), s.events += ",event72", s.linkTrackVars += this.getLinkTrackVars(["eVar65", "eVar67"]), s.linkTrackEvents += ",event72", s.eVar65 = "recommendation", s.eVar66 = r.getUserFromCookie() ? r.getUserFromCookie().id : null, s.eVar67 = t.userId, s.tl(!0, "o", "Recommend a comment")
          }, a.jumpedToComments = function() {
            a.seen || (i.populateEventProperties("seen jump-to-comments"), s.events += ",event72", s.linkTrackVars += this.getLinkTrackVars(["eVar65"]), s.linkTrackEvents += ",event72", s.eVar65 = "seen jump-to-comments", s.eVar66 = r.getUserFromCookie() ? r.getUserFromCookie().id : null, s.tl(!0, "o", "seen jump-to-comments"), a.seen = !0)
          }, a.commentPermalink = function() {
            a.seen || (i.populateEventProperties("seen comment-permalink"), s.events += ",event72", s.linkTrackVars += this.getLinkTrackVars(["eVar65"]), s.linkTrackEvents += ",event72", s.eVar65 = "seen comment-permalink", s.eVar66 = r.getUserFromCookie() ? r.getUserFromCookie().id : null, s.tl(!0, "o", "seen comment-permalink"), a.seen = !0)
          }, a.scrolledToComments = function() {
            a.seen || (i.populateEventProperties("seen scroll-top"), s.events += ",event72", s.linkTrackVars += this.getLinkTrackVars(["eVar65"]), s.linkTrackEvents += ",event72", s.eVar65 = "seen scroll-top", s.eVar66 = r.getUserFromCookie() ? r.getUserFromCookie().id : null, s.tl(!0, "o", "seen scroll-top"), a.seen = !0)
          }, a.areCommentsSeen = function() {
            var t,
              n = function() {
                a.seen || t || !a.areCommentsVisible() || (a.scrolledToComments(), o.off("window:scroll", e.debounce(n, 200)))
              };
            a.seen || o.on("window:scroll", e.debounce(n, 200))
          }, a.areCommentsVisible = function() {
            var e = n("#comments").offset(),
              o = n("body").first().scrollTop(),
              i = t.viewport().height;
            return e.top - i / 2 < o && e.top + e.height - i / 3 > o ? !0 : !1
          }, {
            init: function() {
              o.on("discussion:commentbox:post:success", a.comment.bind(a)), o.on("discussion:comment:recommend:success", a.recommend.bind(a)), o.on("discussion:seen:comment-permalink", a.commentPermalink.bind(a)), o.on("discussion:seen:comments-anchor", a.jumpedToComments.bind(a)), o.on("discussion:seen:comments-scrolled-to", a.scrolledToComments.bind(a)), a.areCommentsSeen()
            }
        }
      }.call(this, t("npm:bonzo@1.4.0"), t("common/utils/_"), t("common/utils/$"), t("common/utils/mediator"), t("common/modules/analytics/omniture"), t("common/modules/identity/api"))
    })
  }(), function() {
    function t() {
    }
    t.amd = {}, System.register("common/modules/discussion/api", ["common/modules/user-prefs", "common/utils/ajax", "common/utils/config", "common/utils/cookies"], !1, function(t, e, n) {
      return function(t, e, n, o) {
        var i = {
          root: "https:" === document.location.protocol ? n.page.secureDiscussionApiRoot : t.isOn("discussion.useProxy") ? "http://www.theguardian.com/guardianapis/discussion/discussion-api" : n.page.discussionApiRoot,
          clientHeader: n.page.discussionApiClientHeader
        };
        return i.send = function(t, n, s) {
            s = s || {}, o.get("GU_U") && (s.GU_U = o.get("GU_U"));
            var r = e({
              url: i.root + t,
              type: "get" === n ? "jsonp" : "json",
              method: n,
              crossOrigin: !0,
              data: s,
              headers: {
                "D2-X-UID": "zHoBy6HNKsk",
                "GU-Client": i.clientHeader
              }
            });
            return r
          }, i.postComment = function(t, e) {
            var n = "/discussion/" + t + "/comment" + (e.replyTo ? "/" + e.replyTo.commentId + "/reply" : "");
            return i.send(n, "post", e)
          }, i.previewComment = function(t) {
            var e = "/comment/preview";
            return i.send(e, "post", t)
          }, i.recommendComment = function(t) {
            var e = "/comment/" + t + "/recommend";
            return i.send(e, "post")
          }, i.pickComment = function(t) {
            var e = "/comment/" + t + "/highlight";
            return i.send(e, "post")
          }, i.unPickComment = function(t) {
            var e = "/comment/" + t + "/unhighlight";
            return i.send(e, "post")
          }, i.reportComment = function(t, e) {
            var n = "/comment/" + t + "/reportAbuse";
            return i.send(n, "post", e)
          }, i.getUser = function(t) {
            var e = "/profile/" + (t ? t : "me");
            return i.send(e, "get")
          }, i
      }.call(this, t("common/modules/user-prefs"), t("common/utils/ajax"), t("common/utils/config"), t("common/utils/cookies"))
    })
  }(), function() {
    function t() {
    }
    t.amd = {}, System.register("common/modules/discussion/user-avatars", ["common/utils/$", "npm:bonzo@1.4.0", "common/modules/discussion/api"], !1, function(t, e, n) {
      return function(t, e, n) {
        function o() {
          t(".user-avatar").each(i)
        }
        function i(t) {
          var o = e(t),
            i = e(e.create('<div class="is-updating"></div>')),
            s = e(e.create('<img class="user-avatar__image" alt="" />')),
            r = o.data("userid");o.removeClass("is-hidden"), i.css("display", "block").appendTo(o), n.getUser(r).then(function(t) {
            s.attr("src", t.userProfile.secureAvatarUrl), i.remove(), s.appendTo(o)
          })
        }
        return {
          init: o,
          avatarify: i
        }
      }.call(this, t("common/utils/$"), t("npm:bonzo@1.4.0"), t("common/modules/discussion/api"))
    })
  }(), function() {
    function t() {
    }
    t.amd = {}, System.register("common/modules/identity/validation-email", ["npm:bean@1.0.15", "npm:bonzo@1.4.0", "common/utils/mediator", "common/modules/identity/api"], !1, function(t, e, n) {
      return function(t, e, n, o) {
        return {
          init: function() {
            var i,
              s = document.body.querySelector(".js-id-send-validation-email");
            s && (i = e(s), t.on(s, "click", function(t) {
              t.preventDefault(), o.isUserLoggedIn() && o.sendValidationEmail().then(function(t) {
                "error" === t.status ? (n.emit("module:identity:validation-email:fail"), i.innerHTML = "An error occured, please click here to try again.") : (n.emit("module:identity:validation-email:success"), i.replaceWith("<p>Sent. Please check your email and follow the link.</p>"))
              }, function() {
                n.emit("module:identity:validation-email:fail"), i.innerHTML = "An error occured, please click here to try again."
              })
            }))
          }
        }
      }.call(this, t("npm:bean@1.0.15"), t("npm:bonzo@1.4.0"), t("common/utils/mediator"), t("common/modules/identity/api"))
    })
  }(), function() {
    function t() {
    }
    t.amd = {}, System.register("common/modules/discussion/whole-discussion", ["npm:bean@1.0.15", "npm:bonzo@1.4.0", "npm:qwery@3.4.2", "github:guardian/native-promise-only@0.7.6-e", "common/utils/$", "common/utils/_", "common/utils/ajax-promise"], !1, function(t, e, n) {
      return function(t, e, n, o, i, s, r) {
        function a(t, e) {
          return new o(function(n) {
            function o() {
              c--, a.length ? i(a.shift()) : c || n()
            }
            function i(e) {
              c++, t.call(null, e).then(o, o)
            }
            if (!e || !e.length) return void n();
            var r = e.splice(0, u),
              a = e,
              c = 0;
            s.forEach(r, i)
          })
        }
        function c(t) {
          this.discussionId = t.discussionId, this.discussion = [], this.params = {
            orderBy: t.orderBy,
            displayThreaded: t.displayThreaded,
            maxResponses: t.maxResponses
          }
        }
        var l = 50,
          u = 3,
          d = 1e3;
        return c.prototype.firstPageLoaded = function(t) {
            if (this.storeCommentPage(t, 1), this.discussionContainer = e.create(t.commentsHtml), this.commentsThread = i(".d-thread--comments", this.discussionContainer).empty(), this.postedCommentHtml = t.postedCommentHtml, this.lastPage = t.lastPage, t.commentCount > d)
              throw new Error("Discussion comment count too large");
            return s.range(2, this.lastPage + 1)
          }, c.prototype.storeCommentPage = function(t, n) {
            var o = i(".d-thread--comments", e.create(t.commentsHtml)),
              s = i(".d-comment--top-level", o);
            "newest" === this.params.orderBy && (s = s.map(function(t) {
              return t
            }).reverse()), this.discussion[n] = s
          }, c.prototype.loadPage = function(t) {
            var e = {
              orderBy: "oldest",
              page: t,
              pageSize: l,
              displayThreaded: this.params.displayThreaded
            };
            return this.params.maxResponses && (e.maxResponses = this.params.maxResponses), r({
                url: "/discussion/" + this.discussionId + ".json",
                type: "json",
                method: "get",
                crossOrigin: !0,
                data: e
              })
          }, c.prototype.loadPageAndStore = function(t) {
            return this.loadPage(t).then(function(e) {
              this.storeCommentPage(e, t)
            }.bind(this))
          }, c.prototype.loadRemainingPages = function(t) {
            return a(this.loadPageAndStore.bind(this), t)
          }, c.prototype.makeDiscussionResponseObject = function() {
            return "newest" === this.params.orderBy && this.discussion.reverse(), this.discussion.reduce(function(t, e) {
                return t.append(e), t
              }, this.commentsThread), {
                paginationHtml: "",
                postedCommentHtml: this.postedCommentHtml,
                commentsHtml: this.discussionContainer.html(),
                lastPage: this.lastPage
            }
          }, c.prototype.loadAllComments = function() {
            return this.loadPage(1).then(this.firstPageLoaded.bind(this)).then(this.loadRemainingPages.bind(this)).then(this.makeDiscussionResponseObject.bind(this))
          }, c
      }.call(this, t("npm:bean@1.0.15"), t("npm:bonzo@1.4.0"), t("npm:qwery@3.4.2"), t("github:guardian/native-promise-only@0.7.6-e"), t("common/utils/$"), t("common/utils/_"), t("common/utils/ajax-promise"))
    })
  }(), function() {
    function t() {
    }
    t.amd = {}, System.register("common/modules/ui/relativedates", ["common/utils/$", "common/utils/config", "common/utils/mediator", "npm:bonzo@1.4.0"], !1, function(t, e, n) {
      return function(t, e, n, o) {
        function i() {
          return new Date((new Date).getTime() - k)
        }
        function s(t) {
          return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][t]
        }
        function r(t) {
          return ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][t]
        }
        function a(t) {
          return 10 > t ? "0" + t : t
        }
        function c(t) {
          var e = i();return t && t.toDateString() === e.toDateString()
        }
        function l(t) {
          var e = i();return t && t.valueOf() > e.valueOf() - 864e5
        }
        function u(t, e) {
          var n = i();return t && t.valueOf() > n.valueOf() - 1e3 * (e || 0)
        }
        function d(t) {
          var e = i(),
            n = i();return n.setDate(e.getDate() - 1), t.toDateString() === n.toDateString()
        }
        function m(t) {
          var e = i().valueOf() - 6048e5;return t.valueOf() >= e
        }
        function p(t) {
          return "[object Date]" !== Object.prototype.toString.call(t) ? !1 : !isNaN(t.getTime())
        }
        function h(t, e, n) {
          var o,
            i = {
              s: {
                "short": ["s"],
                med: ["s ago"],
                "long": [" second ago", " seconds ago"]
              },
              m: {
                "short": ["m"],
                med: ["m ago"],
                "long": [" minute ago", " minutes ago"]
              },
              h: {
                "short": ["h"],
                med: ["h ago"],
                "long": [" hour ago", " hours ago"]
              },
              d: {
                "short": ["d"],
                med: ["d ago"],
                "long": [" day ago", " days ago"]
              }
            };return i[t] ? (o = i[t][e], 1 === n ? o[0] : o[o.length - 1]) : ""
        }
        function f(t, e) {
          e = e || {};var n, o, a, u,
            f = new Date(Number(t)),
            v = i(),
            y = e.format || "short",
            b = "short" === e.format || "med" === e.format;return p(f) ? (u = parseInt((v.getTime() - f) / 1e3, 10), 0 > u ? !1 : e.notAfter && u > e.notAfter ? !1 : 55 > u ? u + h("s", y, u) : 3300 > u ? (n = Math.round(u / 60, 10), n + h("m", y, n)) : c(f) || b && l(f) ? (o = Math.round(u / 3600), o + h("h", y, o)) : b && m(f) ? (a = Math.round(u / 3600 / 24), a + h("d", y, a)) : d(f) ? "Yesterday" + g(f) : 432e3 > u ? [s(f.getDay()), f.getDate(), r(f.getMonth()), f.getFullYear()].join(" ") + (e.showTime ? g(f) : "") : [f.getDate(), r(f.getMonth()), f.getFullYear()].join(" ") + (e.showTime ? g(f) : "")) : !1
        }
        function g(t) {
          return " " + t.getHours() + ":" + a(t.getMinutes())
        }
        function v() {
          return t(".js-timestamp, .js-item__timestamp")
        }
        function y() {
          var e = "js-locale-timestamp";t("." + e).each(function(t) {
            var n,
              i = o(t),
              s = parseInt(i.attr("data-timestamp"), 10);
            s && (n = new Date(s), t.innerHTML = a(n.getHours()) + ":" + a(n.getMinutes()), i.removeClass(e))
          })
        }
        function b(t) {
          t = t || {}, v().each(function(e) {
            var n,
              i = o(e),
              s = parseInt(i.attr("data-timestamp"), 10) || i.attr("datetime"),
              r = new Date(s),
              a = f(r.getTime(), {
                showTime: o(i.parent()).hasClass("block-time"),
                format: i.attr("data-relativeformat"),
                notAfter: t.notAfter
              });
            a ? (n = i[0].querySelector(".timestamp__text") || i[0], n.getAttribute("title") || n.setAttribute("title", o(n).text()), n.innerHTML = a) : t.notAfter && i.addClass("modern-hidden")
          })
        }
        function w(t) {
          b(t), y(t)
        }
        var k = e.page && e.page.renderTime ? Math.max(0, new Date - new Date(e.page.renderTime)) : 0;
        return ["related", "autoupdate"].forEach(function(t) {
            n.on("modules:" + t + ":render", b)
          }), {
            makeRelativeDate: f,
            isWithinSeconds: u,
            init: w
        }
      }.call(this, t("common/utils/$"), t("common/utils/config"), t("common/utils/mediator"), t("npm:bonzo@1.4.0"))
    })
  }(), function() {
    function t() {
    }
    t.amd = {}, System.register("common/modules/identity/facebook-authorizer", [], !1, function() {
      function t(t) {
        n = this, this.appId = t, this.onConnected = new e, this.onFBScriptLoaded = new e, this.onUserDataLoaded = new e, this.onNotAuthorized = new e, this.onNotLoggedIn = new e, this.cancelledLogin = new e
      }
      function e() {
        this.callbacks = []
      }
      var n = null,
        o = "facebook-jssdk";
      return t.DEFAULT_PERMISSIONS = {
          scope: "email,publish_actions,publish_stream"
        }, t.prototype.onConnected = null, t.prototype.onFBScriptLoaded = null, t.prototype.onUserDataLoaded = null, t.prototype.onNotAuthorized = null, t.prototype.onNotLoggedIn = null, t.prototype.cancelledLogin = null, t.accessToken = null, t.userId = null, t.userData = null, t.prototype.login = function(e, n) {
          return (n || !this.accessToken && !this.loginPending) && (this.cancelledLogin.reset(), this.onConnected.reset(), this.loginPending = !0, this._loadFacebookAPI().then(function(n) {
            n.login(this._handleGotLoginStatus.bind(this, !0), e || t.DEFAULT_PERMISSIONS)
          }.bind(this))), this.onConnected
        }, t.prototype.getLoginStatus = function(e) {
          return this.loginStatusPending || (this.loginStatusPending = !0, this._loadFacebookAPI().then(function(n) {
              n.getLoginStatus(this._handleGotLoginStatus.bind(this, !1), e || t.DEFAULT_PERMISSIONS)
            }.bind(this))), this.onConnected
        }, t.prototype._handleGotLoginStatus = function(t, e) {
          switch (this.loginStatusPending = !1, this.loginPending = !1, e.status) {
            case "connected":this.accessToken = e.authResponse.accessToken, this.userId = e.authResponse.userID, this._getUserData(), this.onConnected.resolve(FB, e.authResponse);
              break;case "not_authorized":this._getUserData(), this.onNotAuthorized.resolve(this);
              break;default:t && this.cancelledLogin.resolve(), this.onNotLoggedIn.resolve()
          }
        }, t.prototype._getUserData = function() {
          FB.api("/me", this._handleGotUserData.bind(this))
        }, t.prototype._handleGotUserData = function(t) {
          t && !t.error && (this.userData = t, this.onUserDataLoaded.resolve(t))
        }, t.prototype._loadFacebookAPI = function() {
          return window.FB ? this.onFBScriptLoaded.resolve(window.FB) : document.getElementById(o) || this._requiredAlready || (this._requiredAlready = !0, this._loadFacebookScript()), this.onFBScriptLoaded
        }, t.prototype._loadFacebookScript = function() {
          require(["js!facebook"], this._handleScriptLoaded.bind(this))
        }, t.prototype._handleScriptLoaded = function() {
          FB && (FB.init({
            appId: this.appId,
            status: !0,
            cookie: !0,
            xfbml: !0
          }), this.onFBScriptLoaded.resolve(FB))
        }, t.prototype.destroy = function() {
          n = null
        }, e.prototype.resolve = function() {
          this.args = Array.prototype.slice.apply(arguments);
          var t,
            e = this.callbacks.length;
          for (t = 0; e > t; t++) this.callbacks[t].apply(null, this.args);
          this.callbacks = []
        }, e.prototype.then = function(t) {
          void 0 !== this.args ? t.apply(null, this.args) : this.callbacks.push(t)
        }, e.prototype.reset = function() {
          this.args = void 0
        }, t
    })
  }(), function() {
    function t() {
    }
    t.amd = {}, System.register("common/modules/navigation/profile", ["npm:bean@1.0.15", "npm:bonzo@1.4.0", "github:wilsonpage/fastdom@0.8.6", "common/utils/config", "common/utils/_", "common/utils/ajax", "common/utils/mediator", "common/modules/identity/api"], !1, function(t, e, n) {
      return function(t, e, n, o, i, s, r, a) {
        function c(t) {
          this.opts = i.assign(this.opts, t), this.dom.container = document.body.querySelector("." + c.CONFIG.classes.container), this.dom.content = this.dom.container.querySelector("." + c.CONFIG.classes.content), this.dom.popup = document.body.querySelector("." + c.CONFIG.classes.popup), this.dom.register = document.body.querySelector("." + c.CONFIG.classes.register)
        }
        return c.CONFIG = {
            eventName: "modules:profilenav",
            classes: {
              container: "js-profile-nav",
              content: "js-profile-info",
              popup: "js-profile-popup",
              register: "js-profile-register"
            }
          }, c.prototype.opts = {
            url: "https://profile.theguardian.com"
          }, c.prototype.dom = {}, c.prototype.init = function() {
            this.setFragmentFromCookie()
          }, c.prototype.setFragmentFromCookie = function() {
            var t = a.getUserFromCookie(),
              o = e(this.dom.container),
              i = e(this.dom.content),
              s = e(this.dom.popup),
              r = e(this.dom.register);
            t && (o.hasClass("is-signed-in") || n.write(function() {
              i.text(t.displayName), o.addClass("is-signed-in"), r.hide()
            }), s.html('<ul class="popup popup__group popup--profile is-off" data-link-name="Sub Sections" data-test-id="popup-profile">' + this.menuListItem("Comment activity", this.opts.url + "/user/id/" + t.id) + this.menuListItem("Edit profile", this.opts.url + "/public/edit") + this.menuListItem("Email preferences", this.opts.url + "/email-prefs") + this.menuListItem("Change password", this.opts.url + "/password/change") + this.menuListItem("Sign out", this.opts.url + "/signout") + "</ul>")), this.emitLoadedEvent(t)
          }, c.prototype.menuListItem = function(t, e) {
            return '<li class="popup__item"><a href="' + e + '" class="brand-bar__item--action" data-link-name="' + t + '">' + t + "</a></li>"
          }, c.prototype.emitLoadedEvent = function(t) {
            r.emit(c.CONFIG.eventName + ":loaded", t)
          }, c.prototype.emitErrorEvent = function() {
            r.emit(c.CONFIG.eventName + ":error")
          }, c
      }.call(this, t("npm:bean@1.0.15"), t("npm:bonzo@1.4.0"), t("github:wilsonpage/fastdom@0.8.6"), t("common/utils/config"), t("common/utils/_"), t("common/utils/ajax"), t("common/utils/mediator"), t("common/modules/identity/api"))
    })
  }(), function() {
    function t() {
    }
    t.amd = {}, System.register("common/modules/ui/toggles", ["npm:bean@1.0.15", "npm:bonzo@1.4.0", "common/utils/$", "common/utils/_", "common/utils/mediator"], !1, function(t, e, n) {
      return function(t, e, n, o, i) {
        var s = function() {
          var s,
            r = this,
            a = ["popup--search"],
            c = "js-toggle-ready";
          this.init = function() {
            s = Array.prototype.slice.call(document.body.querySelectorAll("[data-toggle]")), s.forEach(function(n) {
              if (!e(n).hasClass(c)) {
                var o = r.getTarget(n);
                o && (n.toggleTarget = o, e(n).addClass(c), t.add(n, "click", function(t) {
                  t.preventDefault(), r.toggle(n, s)
                }))
              }
            })
          }, this.reset = function(t) {
            s.filter(function(e) {
              return !(t === e || o.contains(a, n(e).attr("data-toggle")))
            }).map(r.close)
          }, i.on("module:clickstream:click", function(t) {
            r.reset(t ? t.target : null)
          })
        };
        return s.prototype.toggle = function(t, n) {
            var o = this;
            n.forEach(function(n) {
              n === t ? o[e(n).hasClass("is-active") ? "close" : "open"](n) : o.close(n)
            })
          }, s.prototype.getTarget = function(t) {
            var n = e(t).data("toggle");
            return n ? document.body.querySelector("." + n) : void 0
          }, s.prototype.open = function(t) {
            e(t).addClass("is-active"), e(t.toggleTarget).removeClass("is-off")
          }, s.prototype.close = function(t) {
            e(t).removeClass("is-active"), e(t.toggleTarget).addClass("is-off")
          }, s
      }.call(this, t("npm:bean@1.0.15"), t("npm:bonzo@1.4.0"), t("common/utils/$"), t("common/utils/_"), t("common/utils/mediator"))
    })
  }(), function() {
    function t() {
    }
    t.amd = {}, System.register("common/modules/navigation/navigation", ["npm:bean@1.0.15", "npm:qwery@3.4.2", "github:wilsonpage/fastdom@0.8.6", "common/utils/mediator", "common/utils/detect", "common/utils/$"], !1, function(t, e, n) {
      return function(t, e, n, o, i, s) {
        var r = {
          init: function() {
            this.copyMegaNavMenu(), this.enableMegaNavToggle(), this.replaceAllSectionsLink(), i.isIOS() && i.getUserAgent.version > 5 && n.write(function() {
              s(".navigation__scroll").css({
                "-webkit-overflow-scrolling": "touch"
              })
            })
          },
          copyMegaNavMenu: function() {
            var t = s.create(s(".js-mega-nav").html()),
              e = s(".js-mega-nav-placeholder");
            s(".global-navigation", t).addClass("global-navigation--top"), n.write(function() {
              e.append(t)
            })
          },
          replaceAllSectionsLink: function() {
            s(".js-navigation-header .js-navigation-toggle").attr("href", "#nav-allsections")
          },
          enableMegaNavToggle: function() {
            t.on(document, "click", ".js-navigation-toggle", function(t) {
              var e = s("." + t.currentTarget.getAttribute("data-target-nav"));
              t.preventDefault(), n.write(function() {
                e.toggleClass("navigation-container--expanded navigation-container--collapsed"), o.emit(e.hasClass("navigation-container--expanded") ? "modules:nav:open" : "modules:nav:close")
              })
            })
          }
        };
        return r
      }.call(this, t("npm:bean@1.0.15"), t("npm:qwery@3.4.2"), t("github:wilsonpage/fastdom@0.8.6"), t("common/utils/mediator"), t("common/utils/detect"), t("common/utils/$"))
    })
  }(), function() {
    function t() {
    }
    t.amd = {}, System.register("common/modules/navigation/search", ["npm:bean@1.0.15", "github:wilsonpage/fastdom@0.8.6", "common/utils/_", "common/utils/$", "common/utils/config"], !1, function(t, e, n) {
      return function(t, e, n, o, i) {
        var s = function() {
          var s, r, a, c, l,
            u = this;
          i.switches.googleSearch && i.page.googleSearchUrl && i.page.googleSearchId && (r = !0, a = i.page.googleSearchUrl + "?cx=" + i.page.googleSearchId, c = "identity" === i.page.section ? 3 : 10, s = n.throttle(function() {
            u.load()
          }), t.on(document, "click", ".js-search-toggle", function(t) {
            s(), u.focusSearchField(), t.preventDefault()
          }), t.on(document, "click", ".search-results", function(t) {
            var e = t.target;
            "a" === e.nodeName.toLowerCase() && (e.target = "_self")
          })), this.focusSearchField = function() {
            var t = o("input.gsc-input");
            t.length > 0 && t.focus()
          }, this.load = function() {
            var t, n;
            l = document.body.querySelector(".js-search-placeholder"), window.__gcse = {
              callback: u.focusSearchField
            }, Array.prototype.forEach.call(document.querySelectorAll(".js-search-placeholder"), function(t) {
              t !== l && e.write(function() {
                t.innerHTML = ""
              })
            }), l.innerHTML || (e.write(function() {
              l.innerHTML = '<div class="search-box" role="search"><gcse:searchbox></gcse:searchbox></div><div class="search-results" data-link-name="search"><gcse:searchresults webSearchResultSetSize="' + c + '"></gcse:searchresults></div>'
            }), t = document.createElement("script"), t.async = !0, t.src = a, n = document.getElementsByTagName("script")[0], e.write(function() {
              n.parentNode.insertBefore(t, n)
            }))
          }, this.init = function() {}
        };
        return s
      }.call(this, t("npm:bean@1.0.15"), t("github:wilsonpage/fastdom@0.8.6"), t("common/utils/_"), t("common/utils/$"), t("common/utils/config"))
    })
  }(), function() {
    function t() {
    }
    t.amd = {}, System.register("common/modules/onward/more-tags", ["common/utils/$", "npm:bean@1.0.15"], !1, function(t, e, n) {
      return function(t, e) {
        function n() {
          this.init = function() {
            var n = t(".js-more-tags");
            0 !== n.length && (n.removeClass("modern-hidden"), e.on(document.querySelector(".js-more-tags__link"), "click", function() {
              t(".modern-hidden-tag").removeClass("modern-hidden"), n.addClass("modern-hidden")
            }))
          }
        }
        return n
      }.call(this, t("common/utils/$"), t("npm:bean@1.0.15"))
    })
  }(), function() {
    function t() {
    }
    t.amd = {}, System.register("common/modules/onward/popular", ["common/utils/_", "npm:qwery@3.4.2", "common/utils/$", "common/utils/config", "common/modules/component", "common/utils/mediator", "common/modules/commercial/create-ad-slot", "common/modules/commercial/dfp"], !1, function(t, e, n) {
      return function(t, e, n, o, i, s, r, a) {
        function c() {
          var e = ["info", "global"];s.emit("register:begin", "popular-in-section"), this.hasSection = o.page && o.page.section && !t.contains(e, o.page.section), this.endpoint = "/most-read" + (this.hasSection ? "/" + o.page.section : "") + ".json"
        }
        return i.define(c), c.prototype.init = function() {
            this.fetch(e(".js-popular-trails"), "html")
          }, c.prototype.prerender = function() {
            o.page.shouldHideAdverts ? this.$mpu = void 0 : this.$mpu = n(".js-fc-slice-mpu-candidate", this.elem).append(r("inline3", "container-inline"))
          }, c.prototype.ready = function() {
            this.$mpu && (a.addSlot(n(".ad-slot", this.$mpu)), this.$mpu.removeClass("fc-slice__item--no-mpu")), s.emit("modules:popular:loaded", this.elem), s.emit("page:new-content", this.elem), s.emit("register:end", "popular-in-section")
          }, c
      }.call(this, t("common/utils/_"), t("npm:qwery@3.4.2"), t("common/utils/$"), t("common/utils/config"), t("common/modules/component"), t("common/utils/mediator"), t("common/modules/commercial/create-ad-slot"), t("common/modules/commercial/dfp"))
    })
  }(), function() {
    function t() {
    }
    t.amd = {}, System.register("common/modules/ui/expandable", ["common/utils/$", "npm:bean@1.0.15", "npm:bonzo@1.4.0"], !1, function(t, e, n) {
      return function(t, e, n) {
        var o = function(o) {
          var i = o || {},
            s = t(i.dom),
            r = i.expanded === !1 ? !1 : !0,
            a = document.createElement("button"),
            c = i.showCount === !1 ? !1 : !0,
            l = {
              updateCallToAction: function() {
                var t = "Show ";
                c && (t += u.getCount() + " "), t += r ? "fewer" : "more", a.innerHTML = t, a.setAttribute("data-link-name", "Show " + (r ? "more" : "fewer")), a.setAttribute("data-is-ajax", "1")
              },
              renderState: function() {
                r ? s.removeClass("shut") : s.addClass("shut")
              },
              renderCallToAction: function() {
                e.add(a, "click", function() {
                  u.toggleExpanded()
                }), a.className = "cta", i.buttonAfterEl ? n(i.buttonAfterEl).after(a) : s[0].appendChild(a), l.updateCallToAction()
              },
              scrollToCallToAction: function() {
                r || window.setTimeout(function() {
                  a.scrollIntoView()
                }, 550)
              }
            },
            u = {
              toggleExpanded: function() {
                r = r ? !1 : !0, l.renderState(), l.updateCallToAction()
              },
              getCount: function() {
                return parseInt(s.attr("data-count"), 10)
              },
              isOpen: function() {
                return s.hasClass("shut") ? !1 : !0
              }
            };
          return {
            init: function() {
              return s.hasClass("expandable-initialised") || !s.html() || u.getCount() < 3 ? !1 : (s.addClass("expandable-initialised"), l.renderCallToAction(), void l.renderState())
            },
            toggle: u.toggleExpanded
          }
        };
        return o
      }.call(this, t("common/utils/$"), t("npm:bean@1.0.15"), t("npm:bonzo@1.4.0"))
    })
  }(), function() {
    function t() {
    }
    t.amd = {}, System.register("common/modules/onward/tech-feedback", ["npm:bean@1.0.15", "github:wilsonpage/fastdom@0.8.6", "common/utils/_", "common/utils/$"], !1, function(t, e, n) {
      return function(t, e, n, o) {
        function i(t) {
          return n.reduce(t, function(t, e, n) {
            return t + n + ": " + e + "\n"
          }, "")
        }
        function s(t) {
          return function() {
            var e = t.attr("href"),
              n = {
                browser: window.navigator.userAgent,
                page: window.location,
                width: window.innerWidth
              },
              o = "\r\n\r\n\r\n\r\n------------------------------\r\nAdditional technical data about your request - please do not edit:\r\n\r\n" + i(n) + "\r\n\r\n";
            t.attr("href", e + "?body=" + encodeURIComponent(o))
          }
        }
        function r(e) {
          var n = o(e);n.length && t.on(n[0], "click", s(n))
        }
        return {
          init: function() {
            r(".js-tech-feedback-mailto"), r(".js-userhelp-mailto")
          }
        }
      }.call(this, t("npm:bean@1.0.15"), t("github:wilsonpage/fastdom@0.8.6"), t("common/utils/_"), t("common/utils/$"))
    })
  }(), function() {
    function t() {
    }
    t.amd = {}, System.register("common/modules/onward/tonal", ["common/utils/config", "common/utils/mediator", "common/modules/analytics/register", "common/modules/component"], !1, function(t, e, n) {
      return function(t, e, n, o) {
        function i() {
          n.begin("tonal-content"), this.edition = t.page.edition.toLowerCase(), this.isSupported() ? this.endpoint = this.getEndpoint() : this.fetch = s
        }
        var s = function() {};
        return o.define(i), i.prototype.tones = {
            features: "-alpha/features/feature-stories.json",
            comment: "-alpha/contributors/feature-stories.json"
          }, i.prototype.getEndpoint = function() {
            return "/container/" + this.edition + this.tones[this.getTone()]
          }, i.prototype.isSupported = function() {
            return this.getTone() in this.tones
          }, i.prototype.getTone = function() {
            return t.page.tones.split(",")[0].toLowerCase()
          }, i.prototype.ready = function() {
            var t = document.body.querySelector(".tone-feature");
            e.emit("page:new-content", t), e.emit("ui:images:upgradePictures"), n.end("tonal-content")
          }, i.prototype.error = function() {
            n.error("tonal-content")
          }, i
      }.call(this, t("common/utils/config"), t("common/utils/mediator"), t("common/modules/analytics/register"), t("common/modules/component"))
    })
  }(), System.register("common/views/content/share-count.html!github:systemjs/plugin-text@0.0.2", [], !0, function(require, t, e) {
    var n = System.global,
      o = n.define;
    return n.define = void 0, e.exports = '<h3 class="sharecount__heading"><i class="i"></i>Shares</h3>\n<div class="sharecount__value sharecount__value--full">0</div>\n<div class="sharecount__value sharecount__value--short">0</div>', n.define = o, e.exports
  }), function() {
    function t() {
    }
    t.amd = {}, System.register("common/modules/ui/accessibility-prefs", ["common/utils/_", "common/utils/$", "common/modules/user-prefs"], !1, function(t, e, n) {
      return function(t, e, n) {
        function o(t) {
          var n = t + "(100%)";e("body").css({
            "-webkit-filter": n,
            filter: n
          })
        }
        function i() {
          t.forEach(["sepia", "grayscale", "invert", "contrast", "saturate", "opacity"], function(t) {
            n.isOn(t) && o(t)
          })
        }
        return {
          init: i
        }
      }.call(this, t("common/utils/_"), t("common/utils/$"), t("common/modules/user-prefs"))
    })
  }(), function() {
    function t() {
    }
    t.amd = {}, System.register("common/modules/ui/clickstream", ["npm:bean@1.0.15", "common/utils/_", "common/utils/mediator", "common/modules/experiments/ab"], !1, function(t, e, n) {
      return function(t, e, n, o) {
        var i = function(i) {
          i = i || {};
          var s = i.filter || [],
            r = function(t) {
              return s.filter(function(e) {
                return e === t
              })
            },
            a = function(t) {
              var e, n, o, i;
              return t = t || "", e = t.match(/:\/\/(.[^\/]+)/), e && (e = e[1], n = t.match(/^(https?:)\/\//), n = n ? n[1] : void 0, o = window.location.hostname, i = window.location.protocol), 0 === t.indexOf("mailto:") ? !1 : !e || e === o && n === i
            },
            c = function(t, n) {
              if (!t.el) return !1;
              var o,
                i = t.el,
                s = i.tagName.toLowerCase(),
                l = i.getAttribute("data-link-name");
              if (l && t.tag.unshift(l), "body" === s) return t.tag = t.tag.join(" | "),
                  delete t.el
                  , t.validTarget && i.getAttribute("data-link-test") && (t.tag = i.getAttribute("data-link-test") + " | " + t.tag), t;
              var u = JSON.parse(i.getAttribute("data-custom-event-properties") || "{}");
              return t.customEventProperties = e.merge(u, t.customEventProperties), t.validTarget || (t.validTarget = r(s).length > 0 || !!n, t.validTarget && (t.target = i, o = i.getAttribute("href"), t.samePage = o && 0 === o.indexOf("#") || "button" === s || i.hasAttribute("data-is-ajax"), t.sameHost = t.samePage || a(o))), !t.linkContext && i.getAttribute("data-link-context-path") && (t.linkContextPath = i.getAttribute("data-link-context-path"), t.linkContextName = i.getAttribute("data-link-context-name")), t.el = i.parentNode, c(t)
            };
          return i.addListener !== !1 && t.add(document.body, "click", function(t) {
              var i,
                s = {
                  el: t.target,
                  tag: []
                };
              s.target = t.target, s = c(s), i = o.getActiveTestsEventIsApplicableTo(s), void 0 !== i && i.length > 0 && (s.tag = e.map(i, function(t) {
                var e = o.getTestVariantId(t);
                return "AB," + t + "," + e + "," + s.tag
              }).join(",")), n.emit("module:clickstream:click", s)
            }), {
              getClickSpec: c
          }
        };
        return i
      }.call(this, t("npm:bean@1.0.15"), t("common/utils/_"), t("common/utils/mediator"), t("common/modules/experiments/ab"))
    })
  }(), function() {
    function t() {
    }
    t.amd = {}, System.register("common/modules/ui/dropdowns", ["common/utils/$", "npm:bonzo@1.4.0", "npm:bean@1.0.15"], !1, function(t, e, n) {
      return function(t, e, n) {
        function o() {
          n.on(document.body, "click", s.button, function(n) {
            var o = e(t.ancestor(n.currentTarget, s.container.substring(1)));
            o.toggleClass("dropdown--active"), i(o)
          })
        }
        function i(n) {
          n.each(function(n) {
            var o = e(n).hasClass("dropdown--active");
            t(s.content, n).attr("aria-hidden", !o), t(s.button, n).attr("aria-expanded", o), t(s.content, n).attr("aria-expanded", o)
          })
        }
        var s = {
          container: ".dropdown",
          button: ".dropdown__button",
          content: ".dropdown__content"
        };
        return {
          init: o,
          updateAria: i
        }
      }.call(this, t("common/utils/$"), t("npm:bonzo@1.4.0"), t("npm:bean@1.0.15"))
    })
  }(), function() {
    function t() {
    }
    t.amd = {}, System.register("common/modules/ui/faux-block-link", ["npm:bean@1.0.15", "npm:bonzo@1.4.0", "common/utils/$"], !1, function(t, e, n) {
      return function(t, e, n) {
        var o = function() {
          var e = ".u-faux-block-link__overlay",
            o = "u-faux-block-link--hover",
            i = {
              add: function(t) {
                n(t.currentTarget).parent().addClass(o)
              },
              remove: function(t) {
                n(t.currentTarget).parent().removeClass(o)
              }
            };
          return {
            init: function() {
              t.on(document.body, "mouseenter", e, i.add), t.on(document.body, "mouseleave", e, i.remove)
            }
          }
        };
        return o
      }.call(this, t("npm:bean@1.0.15"), t("npm:bonzo@1.4.0"), t("common/utils/$"))
    })
  }(), function() {
    function t() {
    }
    t.amd = {}, System.register("common/modules/ui/fonts", ["npm:bonzo@1.4.0", "npm:qwery@3.4.2", "github:getsentry/raven-js@1.1.18", "common/utils/$", "common/utils/ajax", "common/utils/config", "common/utils/cookies", "common/utils/detect", "common/utils/mediator", "common/utils/storage"], !1, function(t, e, n) {
      return function(t, e, n, o, i, s, r, a, c, l) {
        var u = "gu.fonts.",
          d = a.getFontFormatSupport(navigator.userAgent);
        return {
          disabled: function() {
            return "off" === r.get("GU_fonts")
          },
          load: function() {
            return !s.switches.webFonts || this.disabled() || e(".webfonts").length ? !1 : (l.local.get(u + "format") || l.local.set(u + "format", d), void o(".webfont:not([data-loaded-from])").each(function(e) {
              var o = t(e),
                s = o.data("cache-file-" + ("Off" === a.fontHinting ? "" : "hinted-" + a.fontHinting + "-") + d),
                r = o.data("min-breakpoint");
              (!r || a.isBreakpoint({
                min: r
              })) && i({
                url: s,
                type: "jsonp",
                jsonpCallbackName: "guFont",
                success: function(t) {
                  if (!t) return void n.captureMessage("Failed to load fonts");
                  var e = s.match(/fonts\/([^/]*?)\/?([^/]*)\.(woff2|woff|tff).json$/),
                    i = e[1],
                    r = e[2];
                  o.text(t.css).attr("data-loaded-from", "ajax"), l.local.clearByPrefix(u + r.replace(/(CleartypeHinted|AutoHinted)$/, "")), l.local.set(u + r + "." + i, t.css), c.emit("modules:fonts:loaded", name)
                }
              })
            }))
          }
        }
      }.call(this, t("npm:bonzo@1.4.0"), t("npm:qwery@3.4.2"), t("github:getsentry/raven-js@1.1.18"), t("common/utils/$"), t("common/utils/ajax"), t("common/utils/config"), t("common/utils/cookies"), t("common/utils/detect"), t("common/utils/mediator"), t("common/utils/storage"))
    })
  }(), function() {
    function t() {
    }
    t.amd = {}, System.register("common/modules/ui/last-modified", ["npm:bean@1.0.15", "npm:qwery@3.4.2", "common/utils/$"], !1, function(t, e, n) {
      return function(t, e, n) {
        function o() {
          n(".js-lm").toggleClass("u-h")
        }
        function i() {
          n(".js-lm").length && (n(".js-wpd").addClass("content__dateline-wpd--modified tone-colour"),
          t.on(e(".js-wpd")[0], "click", o))
        }
        return {
          init: i
        }
      }.call(this, t("npm:bean@1.0.15"), t("npm:qwery@3.4.2"), t("common/utils/$"))
    })
  }(), function() {
    function t() {
    }
    t.amd = {}, System.register("common/modules/ui/smartAppBanner", ["common/utils/cookies", "common/utils/detect", "common/utils/storage", "common/utils/template", "common/modules/user-prefs", "common/modules/ui/message"], !1, function(t, e, n) {
      return function(t, e, n, o, i, s) {
        function r() {
          return (e.isIOS() || e.isAndroid()) && !e.isFireFoxOSApp()
        }
        function a() {
          return 4 > p
        }
        function c() {
          var n = e.isIOS() ? "ios" : "android",
            i = new s(n),
            r = h + ("mobile" === e.getBreakpoint() ? "" : f);i.show(o(r, d[n.toUpperCase()])), t.add(u, p + 1)
        }
        function l() {
          r() && a() && c()
        }
        var u = "GU_SMARTAPPBANNER",
          d = {
            IOS: {
              LOGO: "http://assets.guim.co.uk/images/apps/ios-logo.png",
              SCREENSHOTS: "http://assets.guim.co.uk/images/apps/ios-screenshots.jpg",
              LINK: "http://ad-x.co.uk/API/click/guardian789057jo/web3537df56ab1f7e",
              STORE: "on the App Store"
            },
            ANDROID: {
              LOGO: "http://assets.guim.co.uk/images/apps/android-logo-2x.png",
              SCREENSHOTS: "http://assets.guim.co.uk/images/apps/ios-screenshots.jpg",
              LINK: "http://ad-x.co.uk/API/click/guardian789057jo/web3537df5992e76b",
              STORE: "in Google Play"
            }
          },
          m = t.get(u),
          p = m && !isNaN(m) ? parseInt(m, 10) : 0,
          h = '<img src="<%=LOGO%>" class="app__logo" alt="Guardian App logo" /><div class="app__cta"><h4 class="app__heading">The Guardian app</h4><p class="app__copy">Instant alerts. Offline reading.<br/>Tailored to you.</p><p class="app__copy"><strong>FREE</strong> \u2013 <%=STORE%></p></div><a href="<%=LINK%>" class="app__link">View</a>',
          f = '<img src="<%=SCREENSHOTS%>" class="app__screenshots" alt="screenshots" />';
        return {
          init: l
        }
      }.call(this, t("common/utils/cookies"), t("common/utils/detect"), t("common/utils/storage"), t("common/utils/template"), t("common/modules/user-prefs"), t("common/modules/ui/message"))
    })
  }(), System.register("common/views/breaking-news.html!github:systemjs/plugin-text@0.0.2", [], !0, function(require, t, e) {
    var n = System.global,
      o = n.define;
    return n.define = void 0, e.exports = '<div class="js-breaking-news__item breaking-news__item" data-breaking-article-id="<%=id%>">\n    <div class="breaking-news__item-content">\n        <div class="breaking-news__item-header">\n            <%=marque36icon%>\n            <em class="breaking-news__item-kicker">Breaking news</em>\n            <div class="breaking-news__item-headline"><%=headline%></div>\n        </div>\n        <div class="breaking-news__item-options">\n            <button class="js-breaking-news__item__close button button--tertiary u-faux-block-link__promote"\n                    aria-label="Dismiss"\n                    data-link-name="close button"><%=closeIcon%></button>\n        </div>\n    </div>\n    <a class="u-faux-block-link__overlay" href="/<%=id%>"></a>\n</div>\n', n.define = o, e.exports
  }), System.register("common/views/international-message.html!github:systemjs/plugin-text@0.0.2", [], !0, function(require, t, e) {
    var n = System.global,
      o = n.define;
    return n.define = void 0, e.exports = '<p class="site-message__message" id="site-message__message">\n    You\u2019re viewing a beta release of the Guardian\u2019s international edition.\n</p>\n<ul class="site-message__actions u-unstyled">\n    <li class="site-message__actions__item">\n        <i class="i i-arrow-white-right"></i>\n        <a href="https://www.surveymonkey.com/s/ZCPVY5Q" data-link-name="survey">Leave feedback</a>\n    </li>\n    <li class="site-message__actions__item">\n        <i class="i i-back"></i>\n        <a class="js-main-site-link" rel="nofollow" href="/preference/edition/uk" data-link-name="opt-out">Opt out and go to UK edition</a>\n    </li>\n</ul>\n', n.define = o, e.exports
  }), System.register("common/views/international-control-message.html!github:systemjs/plugin-text@0.0.2", [], !0, function(require, t, e) {
    var n = System.global,
      o = n.define;
    return n.define = void 0, e.exports = '<p class="site-message__message" id="site-message__message">\n    We\'re testing an international edition and would love your feedback\n</p>\n<ul class="site-message__actions u-unstyled">\n    <li class="site-message__actions__item">\n        <i class="i i-arrow-white-right"></i>\n        <a class="js-main-site-link" rel="nofollow" href="/preference/edition/intl" data-link-name="opt-in">Preview beta</a>\n    </li>\n</ul>\n', n.define = o, e.exports
  }), System.register("common/views/donot-use-adblock.html!github:systemjs/plugin-text@0.0.2", [], !0, function(require, t, e) {
    var n = System.global,
      o = n.define;
    return n.define = void 0, e.exports = '<p class="site-message__message" id="site-message__message">\n    <%=messageText%></p>\n<ul class="site-message__actions u-unstyled">\n    <li class="site-message__actions__item">\n        <i class="i i-arrow-white-right"></i>\n        <a href="<%=adblockLink%>" target="_blank" data-link-name="read more"><%=linkText%></a>\n    </li>\n</ul>\n', n.define = o, e.exports
  }), function() {
    function t() {
    }
    t.amd = {}, System.register("common/modules/identity/forms", ["npm:bean@1.0.15", "npm:bonzo@1.4.0"], !1, function(t, e, n) {
      return function(t, e) {
        function n() {
          var t, e,
            n = document.body.querySelector(".js-reset-form");n && (t = window.location.hash.match("email=([^&#]*)"), t && (e = n.querySelector(".js-reset-email"), e.value = t[1]))
        }
        function o() {
          var e, n, o,
            i = document.body.querySelector(".js-signin-form");i && (e = i.querySelector(".js-signin-email"), n = i.querySelector(".js-forgotten-password"), o = n.getAttribute("href"), t.add(n, "click", function() {
            var t = e.value;
            "" !== t && n.setAttribute("href", o + "#email=" + t)
          }))
        }
        function i() {
          var n, o, i, s,
            r = document.body.querySelector(".js-register-form");r && (n = r.querySelector(".js-register-password"), o = "js-toggle-password", i = '<div class="form-field__note form-field__note--right mobile-only"><a href="#toggle-password" class="' + o + '" data-password-label="Show password" data-text-label="Hide password" data-link-name="Toggle password field">Show password</a></div>', s = e(e.create(i)).insertBefore(n), s.previous().addClass("form-field__note--left"), t.add(s[0], "." + o, "click", function(t) {
            t.preventDefault();
            var o = t.target,
              i = "password" === n.getAttribute("type") ? "text" : "password",
              s = o.getAttribute("data-" + i + "-label");
            n.setAttribute("type", i), e(o).text(s)
          }))
        }
        return {
          forgottenEmail: n,
          forgottenPassword: o,
          passwordToggle: i
        }
      }.call(this, t("npm:bean@1.0.15"), t("npm:bonzo@1.4.0"))
    })
  }(), function() {
    function t() {
    }
    t.amd = {}, System.register("common/modules/identity/formstack", ["npm:bean@1.0.15", "common/utils/_", "common/utils/$", "common/modules/identity/api"], !1, function(t, e, n) {
      return function(t, e, n, o) {
        function i(i, s, r) {
          var a = this,
            c = {},
            l = s.split("-")[0];r = e.assign({
            idClasses: {
              form: "form",
              field: "form-field",
              note: "form-field__note form-field__note--below",
              label: "label",
              checkboxLabel: "check-label",
              textInput: "text-input",
              textArea: "textarea textarea--no-resize",
              submit: "submit-input",
              fieldError: "form-field--error",
              formError: "form__error",
              fieldset: "formstack-fieldset",
              required: "formstack-required",
              sectionHeader: "formstack-heading",
              sectionHeaderFirst: "formstack-heading--first",
              sectionText: "formstack-section",
              characterCount: "formstack-count",
              hide: "is-hidden"
            },
            fsSelectors: {
              form: "#fsForm" + l,
              field: ".fsRow",
              note: ".fsSupporting, .showMobile",
              label: ".fsLabel",
              checkboxLabel: ".fsOptionLabel",
              textInput: '.fsField[type="text"], .fsField[type="email"], .fsField[type="number"], .fsField[type="tel"]',
              textArea: "textarea.fsField",
              submit: ".fsSubmitButton",
              fieldError: ".fsValidationError",
              formError: ".fsError",
              fieldset: "fieldset",
              required: ".fsRequiredMarker",
              sectionHeader: ".fsSectionHeading",
              sectionHeaderFirst: ".fsSection:first-child .fsSectionHeading",
              sectionText: ".fsSectionText",
              characterCount: ".fsCounter",
              hide: ".hidden, .fsHidden, .ui-datepicker-trigger"
            },
            hiddenSelectors: {
              userId: '[type="number"]',
              email: '[type="email"]'
            }
          }, r), a.init = function() {
            var t = o.getUserOrSignIn();
            a.dom(t), n(i).removeClass(r.idClasses.hide), n("html").addClass("iframed--overflow-hidden"), a.postMessage("ready")
          }, a.dom = function(e) {
            var o, s, l, u;
            c.$form = n(r.fsSelectors.form).addClass(r.idClasses.form), n("link", i).remove();
            for (o in r.fsSelectors) n(r.fsSelectors[o], c.$form).addClass(r.idClasses[o]);
            s = n(r.hiddenSelectors.userId, c.$form).remove(), l = n(r.hiddenSelectors.email, c.$form).remove(), u = '<input type="hidden" name="' + s.attr("name") + '" value="' + e.id + '"><input type="hidden" name="' + l.attr("name") + '" value="' + e.primaryEmailAddress + '">', c.$form.append(u), t.on(window, "unload", a.unload), t.on(c.$form[0], "submit", a.submit)
          }, a.submit = function() {
            setTimeout(function() {
              n("." + r.idClasses.formError).removeClass(r.idClasses.formError), n("." + r.idClasses.fieldError).removeClass(r.idClasses.fieldError), n(r.fsSelectors.formError, c.$form).addClass(r.idClasses.formError), n(r.fsSelectors.fieldError, c.$form).addClass(r.idClasses.fieldError), n(r.fsSelectors.textArea, i).each(function(e) {
                t.fire(e, "keyup")
              }), a.postMessage("refreshHeight")
            }, 100)
          }, a.unload = function() {
            a.postMessage("unload")
          }, a.postMessage = function(t) {
            var e = r.page.idUrl;
            window.top.postMessage(t, e)
          }
        }
        return i
      }.call(this, t("npm:bean@1.0.15"), t("common/utils/_"), t("common/utils/$"), t("common/modules/identity/api"))
    })
  }(), function() {
    function t() {
    }
    t.amd = {}, System.register("common/modules/identity/formstack-iframe", ["npm:bean@1.0.15", "common/utils/$", "common/utils/mediator"], !1, function(t, e, n) {
      return function(t, e, n) {
        function o(o, i) {
          var s = this;s.init = function() {
            t.on(window, "message", function(t) {
              t.origin === i.page.idUrl && s.onMessage(t)
            }), n.on("window:resize", s.refreshHeight), t.on(o, "load", function() {
              s.show(), s.refreshHeight()
            })
          }, s.onMessage = function(t) {
            switch (t.data) {
              case "ready":s.show(), s.refreshHeight();
                break;case "unload":s.refreshHeight(!0);
                break;case "refreshHeight":s.refreshHeight()
            }
          }, s.refreshHeight = function(t) {
            t && e(o).css({
              height: 0
            });
            var n = o.contentWindow.document,
              i = n.body,
              s = n.documentElement,
              r = Math.max(i.scrollHeight, i.offsetHeight, s.clientHeight, s.scrollHeight, s.offsetHeight);
            e(o).css({
              height: r
            })
          }, s.show = function() {
            e(o).removeClass("is-hidden")
          }
        }
        return o
      }.call(this, t("npm:bean@1.0.15"), t("common/utils/$"), t("common/utils/mediator"))
    })
  }(), function() {
    function t() {
    }
    t.amd = {}, System.register("common/modules/identity/formstack-iframe-embed", ["npm:bean@1.0.15", "common/utils/_", "common/utils/$", "common/modules/identity/api"], !1, function(t, e, n) {
      return function(t, e, n, o) {
        function i(i, s, r) {
          var a = this,
            c = {},
            l = s.split("-")[0];r = e.assign({
            idClasses: {
              form: "form",
              field: "form-field",
              note: "form-field__note form-field__note--below",
              label: "label",
              checkboxLabel: "check-label",
              textInput: "text-input",
              textArea: "textarea textarea--no-resize",
              submit: "submit-input",
              fieldError: "form-field--error",
              formError: "form__error",
              fieldset: "formstack-fieldset",
              required: "formstack-required",
              sectionHeader: "formstack-heading",
              sectionHeaderFirst: "formstack-heading--first",
              sectionText: "formstack-section",
              characterCount: "formstack-count",
              hide: "is-hidden"
            },
            fsSelectors: {
              form: "#fsForm" + l,
              field: ".fsRow",
              note: ".fsSupporting, .showMobile",
              label: ".fsLabel",
              checkboxLabel: ".fsOptionLabel",
              textInput: '.fsField[type="text"], .fsField[type="email"], .fsField[type="number"], .fsField[type="tel"]',
              textArea: "textarea.fsField",
              submit: ".fsSubmitButton",
              fieldError: ".fsValidationError",
              formError: ".fsError",
              fieldset: "fieldset",
              required: ".fsRequiredMarker",
              sectionHeader: ".fsSectionHeading",
              sectionHeaderFirst: ".fsSection:first-child .fsSectionHeading",
              sectionText: ".fsSectionText",
              characterCount: ".fsCounter",
              hide: ".hidden, .fsHidden, .ui-datepicker-trigger"
            },
            hiddenSelectors: {
              userId: '[type="number"]',
              email: '[type="email"]'
            }
          }, r), a.init = function() {
            var t = o.getUserOrSignIn();
            a.dom(t), n(i).removeClass(r.idClasses.hide), n("html").addClass("iframed--overflow-hidden"), a.sendHeight()
          }, a.dom = function(e) {
            var o, s, l, u;
            c.$form = n(r.fsSelectors.form).addClass(r.idClasses.form), n("link", i).remove();
            for (o in r.fsSelectors) n(r.fsSelectors[o], c.$form).addClass(r.idClasses[o]);
            s = n(r.hiddenSelectors.userId, c.$form).remove(), l = n(r.hiddenSelectors.email, c.$form).remove(), u = '<input type="hidden" name="' + s.attr("name") + '" value="' + e.id + '"><input type="hidden" name="' + l.attr("name") + '" value="' + e.primaryEmailAddress + '">', c.$form.append(u), t.on(window, "unload", a.unload), t.on(c.$form[0], "submit", a.submit), window.addEventListener("message", function(t) {
              var e = JSON.parse(t.data);
              e.iframeTop && a.scrollToTopOfIframe(e.iframeTop)
            }, !1)
          }, a.submit = function(e) {
            e.preventDefault(), setTimeout(function() {
              n("." + r.idClasses.formError).removeClass(r.idClasses.formError), n("." + r.idClasses.fieldError).removeClass(r.idClasses.fieldError), n(r.fsSelectors.formError, c.$form).addClass(r.idClasses.formError), n(r.fsSelectors.fieldError, c.$form).addClass(r.idClasses.fieldError), n(r.fsSelectors.textArea, i).each(function(e) {
                t.fire(e, "keyup")
              }), a.postMessage("get-position", "get-position"), 0 === n(r.fsSelectors.formError, c.$form).length && c.$form[0].submit()
            }, 100)
          }, a.scrollToTopOfIframe = function(t) {
            a.postMessage("scroll-to", "scroll-to", 0, t)
          }, a.unload = function() {
            a.sendHeight(!0)
          }, a.sendHeight = function() {
            var t = document.body,
              e = document.documentElement,
              n = Math.max(t.scrollHeight, t.offsetHeight, e.clientHeight, e.scrollHeight, e.offsetHeight);
            a.postMessage("set-height", n)
          }, a.postMessage = function(t, e, n, o) {
            var i = {
              type: t,
              value: e,
              href: window.location.href
            };
            n && (i.x = n), o && (i.y = o), window.top.postMessage(JSON.stringify(i), "*")
          }
        }
        return i
      }.call(this, t("npm:bean@1.0.15"), t("common/utils/_"), t("common/utils/$"), t("common/modules/identity/api"))
    })
  }(), function() {
    function t() {
    }
    t.amd = {}, System.register("common/modules/identity/password-strength", ["npm:bean@1.0.15", "npm:bonzo@1.4.0", "common/utils/_"], !1, function(t, e, n) {
      return function(t, e, n) {
        function o(o, i) {
          i = n.assign({
            text: {
              label: "Password strength",
              "long": "Password too long",
              "short": "Password too short"
            },
            classes: {
              indicator: "js-password-strength-indicator",
              label: "js-password-strength-label",
              ready: "has-indicator"
            },
            labels: ["weak", "poor", "medium", "good", "strong"],
            minLength: 6,
            maxLength: 20
          }, i);var s,
            r = !1,
            a = {
              element: o
            },
            c = '<div class="password-strength-indicator ' + i.classes.indicator + ' score-null is-off"><div class="form-field__note form-field__note--below form-field__note--right password-strength ' + i.classes.label + '">' + i.text.label + "</div></div>";this.init = function() {
            if (!e(a.element).hasClass(i.classes.ready)) {
              var n = this;
              require(["js!zxcvbn"], function() {
                s = this.zxcvbn, a.indicator = e(e.create(c)).insertAfter(a.element)[0], a.label = a.indicator.querySelector("." + i.classes.label), t.on(a.element, "keyup.count", n.checkCount), t.on(a.element, "keyup.key", n.checkStrength), n.checkCount(), n.checkStrength(), e(a.element).addClass(i.classes.ready)
              })
            }
          }, this.checkCount = function() {
            a.element.value.length >= i.minLength && (r = !0, e(a.indicator).removeClass("is-off"), t.off(a.element, "keyup.count"))
          }, this.checkStrength = function() {
            if (r) {
              var t = s(a.element.value).score,
                n = i.text.label + ": " + i.labels[t];
              a.element.value.length < i.minLength ? (n = i.text["short"], t = null) : a.element.value.length > i.maxLength && (n = i.text["long"], t = null), a.indicator.className = a.indicator.className.replace(/\bscore-\S+/g, "score-" + t), e(a.label).text(n)
            }
          }
        }
        return o
      }.call(this, t("npm:bean@1.0.15"), t("npm:bonzo@1.4.0"), t("common/utils/_"))
    })
  }(), function() {
    function t() {
    }
    t.amd = {}, System.register("common/modules/identity/account-profile", ["common/utils/$", "npm:bean@1.0.15", "npm:bonzo@1.4.0", "common/utils/url"], !1, function(t, e, n) {
      return function(t, e, n, o) {
        var i = function() {
          var n = this;
          return n.classes = {
              forms: ".js-account-profile-forms",
              accountForm: ".js-account-details-form",
              publicForm: ".js-public-profile-form",
              tabs: ".js-tabs",
              formError: ".form__error",
              changed: "js-form-changed",
              textInput: ".text-input",
              avatarUploadForm: ".js-avatar-upload-form",
              memberShipContainer: ".js-memebership-tab-container"
            }, n.messages = {
              noCorsError: "Cross-origin resource sharing is not supported by this browser. Please upgrade your browser to use this feature.",
              noServerError: "The image upload server could not be reached."
            }, n.urls = {
              avatarTokenUrl: "https://gu-image-upload.appspot.com/upload-endpoint-generator"
            }, n.unsavedFields = [], {
              init: function() {
                if (n.accountProfileForms = document.body.querySelector(n.classes.forms), n.accountProfileForms) {
                  n.bindAvatarUpload(), n.bindInputs(n.accountProfileForms.querySelector(n.classes.accountForm)), n.bindInputs(n.accountProfileForms.querySelector(n.classes.publicForm));
                  var o = n.accountProfileForms.querySelector(n.classes.tabs);
                  require(["bootstraps/membership"], function(t) {
                    t.init()
                  }), t(n.classes.tabs + " .tabs__tab a").each(function() {
                    this.href = this.getAttribute("data-tabs-href")
                  }), e.on(o, "click", n.handleTabsClick.bind(n))
                }
              }
          }
        };
        return i.prototype.handleTabsClick = function(t) {
            var i = this;
            "a" === t.target.nodeName.toLowerCase() && (i.unsavedChangesForm ? (t.preventDefault(), t.stopImmediatePropagation(), i.unsavedChangesForm.querySelector(i.classes.formError) || (n(i.unsavedChangesForm).prepend(i.genUnsavedError()), e.on(i.unsavedChangesForm.querySelector(".js-save-unsaved"), "click", function() {
              i.unsavedChangesForm.submit()
            }))) : o.pushUrl({}, t.target.innerHTML, t.target.getAttribute("data-pushstate-url")))
          }, i.prototype.bindAvatarUpload = function() {
            var t = this,
              n = t.accountProfileForms.querySelector(t.classes.avatarUploadForm);
            n && e.on(n, "submit", function(e) {
              e.preventDefault();
              var o = t.createCORSRequest("GET", t.urls.avatarTokenUrl);
              o || t.prependErrorMessage(t.messages.noCorsError, n), o.onerror = function() {
                t.prependErrorMessage(t.messages.noServerError, n)
              }, o.onload = function() {
                n.setAttribute("action", o.responseText), n.submit()
              }, o.send()
            })
          }, i.prototype.prependErrorMessage = function(t, e) {
            var n = document.createElement("div");
            n.innerHTML = t, n.className = this.classes.formError.replace(".", ""), e.insertBefore(n, e.firstChild)
          }, i.prototype.createCORSRequest = function(t, e) {
            var n = new XMLHttpRequest;
            return "withCredentials" in n ? n.open(t, e, !0) : "undefined" != typeof XDomainRequest ? (n = new XDomainRequest, n.open(t, e)) : n = null, n
          }, i.prototype.genUnsavedError = function() {
            var t, e, n,
              o = '<div class="form__error">',
              i = "</div>",
              s = '<a href="#" class="js-save-unsaved">Save changes</a>',
              r = "Your form has unsaved changes in ";
            for (t = 0; t < this.unsavedFields.length; t++) e = this.unsavedFields[t].id, n = this.accountProfileForms.querySelector('[for="' + e + '"]').innerHTML, r += '"' + n + '"', r += t === this.unsavedFields.length - 1 ? ". " : t === this.unsavedFields.length - 2 ? " and " : ", ";
            return o + r + s + i
          }, i.prototype.onInputChange = function(t) {
            n(t.target.form).addClass(this.classes.changed), this.unsavedChangesForm = t.target.form, this.unsavedFields.some(function(e) {
              return e === t.target
            }) || this.unsavedFields.push(t.target)
          }, i.prototype.bindInputs = function(t) {
            var e, n,
              o = Array.prototype.slice.call(t.querySelectorAll(this.classes.textInput));
            for (o = o.concat(Array.prototype.slice.call(t.querySelectorAll("select"))), e = o.length - 1; e >= 0; e--) n = o[e], n.form = t, "select-one" === n.type ? n.addEventListener("change", this.onInputChange.bind(this)) : n.addEventListener("input", this.onInputChange.bind(this))
          }, i
      }.call(this, t("common/utils/$"), t("npm:bean@1.0.15"), t("npm:bonzo@1.4.0"), t("common/utils/url"))
    })
  }(), System.register("common/views/save-for-later/delete-all-button.html!github:systemjs/plugin-text@0.0.2", [], !0, function(require, t, e) {
    var n = System.global,
      o = n.define;
    return n.define = void 0, e.exports = '<div class="save-for-later-delete-all" data-link-name="meta-save-for-later-delete--all" data-component="meta-save-for-later--delete-all">\n    <button type="submit" class="submit-input button button--medium button--tertiary save-for-later__button--delete-all js-save-for-later__button save-for-later__button--delete-all--<%= state %>" data-link-name="meta-save-for-later--delete-all" value="all" name="deleteArticle">\n        <%= icon %>\n        <span class="save-for-later__label save-for-later__label--delete-all">Remove all</span>\n        <span class="save-for-later__label save-for-later__label--delete-all--confirm">Remove all stories?</span>\n    </button>\n</div>\n', n.define = o, e.exports
  }), function() {
    function t() {
    }
    t.amd = {}, System.register("bootstraps/gallery", ["npm:bean@1.0.15", "npm:bonzo@1.4.0", "npm:qwery@3.4.2", "common/utils/_", "common/utils/$", "common/utils/config", "common/utils/mediator", "common/modules/component"], !1, function(t, e, n) {
      return function(t, e, n, o, i, s, r, a) {
        var c = function() {
            var t = function() {
              if (!e(document.body).hasClass("has-overlay")) {
                var t = i(".js-gallery-img"),
                  n = 300,
                  o = t.parent().dim().width,
                  s = Math.max(n, Math.min(o, .9 * window.innerHeight));
                t.css("max-height", s), i(".gallery2__img-container--portrait").css("padding-bottom", s)
              }
            };
            t(), r.addListeners({
              "window:resize": o.debounce(t, 200),
              "window:orientationchange": o.debounce(t, 200),
              "ui:images:vh": t
            })
          },
          l = function() {
            var t = new a,
              e = n(".js-gallery-most-popular")[0];
            t.manipulationType = "html", t.endpoint = "/gallery/most-viewed.json", t.ready = function() {
              r.emit("page:new-content", e)
            }, t.fetch(e, "html")
          },
          u = function() {
            c(), r.emit("ui:images:upgradePictures"), r.emit("page:gallery:ready"), l()
          };
        return {
          init: u
        }
      }.call(this, t("npm:bean@1.0.15"), t("npm:bonzo@1.4.0"), t("npm:qwery@3.4.2"), t("common/utils/_"), t("common/utils/$"), t("common/utils/config"), t("common/utils/mediator"), t("common/modules/component"))
    })
  }(), function() {
    function t() {
    }
    t.amd = {}, System.register("common/modules/accessibility/main", ["common/modules/user-prefs"], !1, function(t, e, n) {
      return function(t) {
        function e(e) {
          for (var n in e) e.hasOwnProperty(n) && t.set(i.KEY_PREFIX + "." + n, e[n])
        }
        function n(e) {
          var n = t.get(i.KEY_PREFIX + "." + e);return n === !1 ? !1 : !0
        }
        function o(t) {
          return n(t) === !0
        }
        var i = {
          KEY_PREFIX: "accessibility",
          saveState: e,
          isOn: o
        };
        return i
      }.call(this, t("common/modules/user-prefs"))
    })
  }(), function() {
    function t() {
    }
    t.amd = {}, System.register("common/modules/commercial/liveblog-adverts", ["npm:bean@1.0.15", "npm:bonzo@1.4.0", "common/utils/_", "common/utils/$", "common/utils/config", "common/utils/mediator", "common/modules/commercial/create-ad-slot", "common/modules/commercial/dfp"], !1, function(t, e, n) {
      return function(t, e, n, o, i, s, r, a) {
        var c, l, u,
          d = new Date,
          m = 6e4,
          p = ["inline1", "inline2"],
          h = "first",
          f = {
            minutebyminute: {
              first: {
                timeout: 12e4,
                posts: 2
              },
              further: {
                timeout: 3e5,
                posts: 5
              }
            },
            "default": {
              first: {
                timeout: 12e4,
                posts: 1
              },
              further: {
                timeout: 3e5,
                posts: 5
              }
            },
            test: {
              first: {
                timeout: 1e4,
                posts: 1
              },
              further: {
                timeout: 1e4,
                posts: 1
              }
            }
          },
          g = function() {
            c = 0, l = !1, window.setInterval(function() {
              l = !0
            }, u[h].timeout)
          },
          v = function() {
            if (!i.switches.liveblogAdverts) return !1;
            var v;
            v = i.page.isDev ? "test" : n.contains(i.page.toneIds.split(","), "tone/minutebyminute") ? "minutebyminute" : "default", u = f[v], g(), s.on("modules:autoupdate:updates", function(t) {
              if (c += t.length, c >= u[h].posts && l && new Date - d < m) {
                var n = p.length,
                  i = n ? e(r(p.shift(), "liveblog-inline")) : o(".js-liveblog-body .ad-slot").last().detach();
                o(".js-liveblog-body .block:first-child").after(i), n ? a.addSlot(i) : a.refreshSlot(i), g(), h = "further"
              }
            }), t.on(document.body, "mousemove", n.debounce(function() {
              d = new Date
            }, 200))
          };
        return {
          init: n.once(v)
        }
      }.call(this, t("npm:bean@1.0.15"), t("npm:bonzo@1.4.0"), t("common/utils/_"), t("common/utils/$"), t("common/utils/config"), t("common/utils/mediator"), t("common/modules/commercial/create-ad-slot"), t("common/modules/commercial/dfp"))
    })
  }(), function() {
    function t() {
    }
    t.amd = {}, System.register("common/utils/request-animation-frame", [], !1, function() {
      function t(t) {
        var e,
          n = 0,
          o = ["ms", "moz", "webkit", "o"];
        for (e = 0; e < o.length && !window.requestAnimationFrame; ++e) window.requestAnimationFrame = window[o[e] + "RequestAnimationFrame"];
        window.requestAnimationFrame ? window.requestAnimationFrame(t) : window.requestAnimationFrame = function(t) {
          var e = (new Date).getTime(),
            o = Math.max(0, 16 - (e - n)),
            i = window.setTimeout(function() {
              t(e + o)
            }, o);
          return n = e + o, i
        }
      }
      return t
    })
  }(), function() {
    function t() {
    }
    t.amd = {}, System.register("common/modules/live/filter", ["npm:bonzo@1.4.0", "npm:bean@1.0.15", "npm:qwery@3.4.2", "common/utils/$", "common/utils/mediator", "common/utils/_"], !1, function(t, e, n) {
      return function(t, e, n, o, i, s) {
        function r(t) {
          this.context = t, this.order = "newest"
        }
        return r.prototype.ready = function() {
            e.on(n(".js-live-oldest")[0], "click", this.toggle.bind(this, "oldest")), e.on(n(".js-live-newest")[0], "click", this.toggle.bind(this, "newest"))
          }, r.prototype.toggle = function(r) {
            if (e.fire(n('button[data-toggle="popup--live-blog"]')[0], "click"), this.order !== r) {
              var a = s.toArray(o(".block", this.context).detach());
              a.reverse(), t(this.context).prepend(a), i.emit("module:filter:toggle", "oldest" === r), this.order = r
            }
          }, r
      }.call(this, t("npm:bonzo@1.4.0"), t("npm:bean@1.0.15"), t("npm:qwery@3.4.2"), t("common/utils/$"), t("common/utils/mediator"), t("common/utils/_"))
    })
  }(), function() {
    function t() {
    }
    t.amd = {}, System.register("common/modules/live/notification-bar", ["common/utils/mediator", "common/modules/component"], !1, function(t, e, n) {
      return function(t, e) {
        function n(e) {
          this.attachTo = e.attachTo, this.mediator = t
        }
        return e.define(n), n.prototype.componentClass = "notify", n.prototype.manipulationType = "prepend", n.prototype.classes = {
            count: "js-notify-count",
            button: "js-notify-btn"
          }, n.prototype.template = '<div class="block block--notification js-block-notification notify"><div class="block-elements"><button class="notify__btn u-button-reset js-notify-btn"> Show <span class="notify__count js-notify-count"></span> new post(s)</button></div></div>', n.prototype.ready = function() {
            this.on("click", this.getClass("button"), function() {
              this.setState("hidden"), this.mediator.emit("modules:notificationbar:show", !0)
            })
          }, n.prototype.notify = function(t) {
            this.rendered || this.render(this.attachTo), this.removeState("hidden"), this.setCount(t)
          }, n.prototype.setCount = function(t) {
            this.getElem("count").innerHTML = t
          }, n
      }.call(this, t("common/utils/mediator"), t("common/modules/component"))
    })
  }(), function() {
    function t() {
    }
    t.amd = {}, System.register("common/modules/ui/notification-counter", ["common/utils/mediator"], !1, function(t, e, n) {
      return function(t) {
        "use strict";
        function e() {
        }
        var n = document.title;
        return e.prototype.init = function() {
            var e = this;
            t.on("modules:autoupdate:unread", function(t) {
              e.setCount(t)
            })
          }, e.prototype.setCount = function(t) {
            t > 0 ? document.title = "(" + t + ") " + n : this.restorePageTitle()
          }, e.prototype.restorePageTitle = function() {
            document.title = n
          }, e
      }.call(this, t("common/utils/mediator"))
    })
  }(), function() {
    function t() {
    }
    t.amd = {}, System.register("common/utils/defer-to-analytics", ["common/utils/mediator"], !1, function(t, e, n) {
      return function(t) {
        function e(e) {
          n ? e() : t.on("analytics:ready", function() {
            e()
          })
        }
        var n = !1;
        return t.on("analytics:ready", function() {
            n = !0
          }), e
      }.call(this, t("common/utils/mediator"))
    })
  }(), function() {
    function t() {
    }
    t.amd = {}, System.register("common/modules/analytics/omnitureMedia", ["common/utils/_", "common/utils/config", "npm:qwery@3.4.2"], !1, function(t, e, n) {
      return function(t, e, n) {
        function o(o) {
          function i(t) {
            return o.el().getAttribute(t)
          }
          var r, a,
            c = i("data-embed-path") || e.page.pageId,
            l = n("audio", o.el()).length ? "audio" : "video",
            u = !1,
            d = !1,
            m = !!guardian.isEmbed,
            p = {
              "video:request": "event98",
              "preroll:request": "event97",
              "preroll:play": "event59",
              "preroll:skip": "event99",
              "preroll:end": "event64",
              "video:play": "event17",
              "audio:play": "event19",
              "video:25": "event21",
              "video:50": "event22",
              "video:75": "event23",
              "video:end": "event18",
              "audio:end": "event20",
              "video:fullscreen": "event96",
              duration: "event57"
            };this.getDuration = function() {
            return parseInt(i("data-duration"), 10) || void 0
          }, this.getPosition = function() {
            return o.currentTime()
          }, this.play = function() {
            "video" === l && u && this.startDurationEventTimer()
          }, this.pause = function() {
            "video" === l && this.stopDurationEventTimer()
          }, this.sendEvent = function(e, n, o) {
            s.eVar74 = o ? l + " ad" : l + " content", s.eVar43 = s.prop43 = l.charAt(0).toUpperCase() + l.slice(1), s.eVar44 = s.prop44 = c, d && (s.prop41 = "PrerollMilestone"), s.linkTrackVars = "events,eVar11,prop41,eVar43,prop43,eVar44,prop44,prop9,channel", s.linkTrackEvents = t.values(p).join(","), s.events = e, s.tl(!0, "o", n || e), s.prop41 = s.eVar44 = s.prop44 = s.eVar43 = s.prop43 = void 0
          }, this.sendNamedEvent = function(t, e) {
            this.sendEvent(p[t], t, e)
          }, this.omnitureInit = function() {
            s.loadModule("Media"), s.Media.autoTrack = !1, s.Media.trackWhilePlaying = !1, s.Media.trackVars = "events,eVar7,eVar43,eVar44,prop44,eVar47,eVar61,channel", s.Media.trackEvents = "event17,event18,event19,event20,event21,event22,event23,event57,event59,event64,event96,event97,event98", s.Media.segmentByMilestones = !1, s.Media.trackUsingContextData = !1, s.eVar11 = s.prop11 = m ? "Embedded" : e.page.sectionName || "", s.eVar7 = s.pageName, s.Media.open(c, this.getDuration(), "HTML5 Video"), "video" === l && this.sendNamedEvent("video:request")
          }, this.getDurationWatched = function() {
            var t = 0,
              e = new Date,
              n = (e - r) / 1e3;
            return a && u && n > 1 && (t = Math.round(n)), r = e, t
          }, this.baseDurationEvent = function() {
            var t = [],
              e = this.getDurationWatched();
            return e && t.push(p.duration + "=" + e), t
          }, this.sendSegment = function(t) {
            var e = this.baseDurationEvent();
            e.push(t), this.sendEvent(e.join(","))
          }, this.sendDurationEvent = function() {
            var t = this.baseDurationEvent();
            t && t.length > 0 && this.sendEvent(t.join(","))
          }, this.startDurationEventTimer = function() {
            this.stopDurationEventTimer(), r = new Date, a = window.setInterval(this.sendDurationEvent.bind(this), 1e4)
          }, this.stopDurationEventTimer = function() {
            this.sendDurationEvent(), a && window.clearInterval(a), a = !1
          }, this.onContentPlay = function() {
            u = !0, this.sendNamedEvent("video:play"), this.startDurationEventTimer()
          }, this.onPrerollPlay = function() {
            d = !0, this.sendNamedEvent("preroll:play", !0)
          }, this.init = function() {
            this.omnitureInit(), o.on("play", this.play.bind(this)), o.on("pause", this.pause.bind(this)), o.one("video:preroll:request", this.sendNamedEvent.bind(this, "preroll:request", !0)), o.one("video:preroll:play", this.onPrerollPlay.bind(this)), o.one("video:preroll:end", this.sendNamedEvent.bind(this, "preroll:end", !0)), o.one("video:content:play", this.onContentPlay.bind(this)), o.one("audio:content:play", this.sendNamedEvent.bind(this, "audio:play")), o.one("video:play:25", this.sendNamedEvent.bind(this, "video:25")), o.one("video:play:50", this.sendNamedEvent.bind(this, "video:50")), o.one("video:play:75", this.sendNamedEvent.bind(this, "video:75")), o.one("video:content:end", this.sendNamedEvent.bind(this, "video:end")), o.one("audio:content:end", this.sendNamedEvent.bind(this, "audio:end")), o.on("player:fullscreen", this.sendNamedEvent.bind(this, "video:fullscreen"))
          }
        }
        return o
      }.call(this, t("common/utils/_"), t("common/utils/config"), t("npm:qwery@3.4.2"))
    })
  }(), System.register("common/views/ui/video-ads-skip-overlay.html!github:systemjs/plugin-text@0.0.2", [], !0, function(require, t, e) {
    var n = System.global,
      o = n.define;
    return n.define = void 0, e.exports = '<div class="js-ads-skip vjs-ads-skip">\n    <span class="vjs-ads-skip__countdown">You may skip this advert in <span class="js-skip-remaining-time"><%=skipTimeout%></span> seconds</span>\n</div>\n', n.define = o, e.exports
  }), function() {
    function t() {
    }
    t.amd = {}, System.register("common/modules/video/fullscreener", ["npm:bean@1.0.15", "npm:bonzo@1.4.0"], !1, function(t, e, n) {
      return function(t, e) {
        function n() {
          var n = this,
            o = e.create('<div class="vjs-fullscreen-clickbox"></div>')[0],
            i = {
              click: function(t) {
                this.paused() ? this.play() : this.pause(), t.stop()
              },
              dblclick: function(t) {
                t.stop(), this.isFullScreen() ? this.exitFullscreen() : this.requestFullscreen()
              }
            };e(o).appendTo(n.contentEl()), t.on(o, "click", i.click.bind(n)), t.on(o, "dblclick", i.dblclick.bind(n)), n.on("fullscreenchange", function() {
            this.isFullScreen() && n.trigger("player:fullscreen")
          })
        }
        return n
      }.call(this, t("npm:bean@1.0.15"), t("npm:bonzo@1.4.0"))
    })
  }(), function() {
    function t() {
    }
    t.amd = {}, System.register("common/modules/video/supportedBrowsers", ["npm:bean@1.0.15", "common/utils/$", "common/utils/_", "common/utils/detect", "common/utils/config"], !1, function(t, e, n) {
      return function(t, e, n, o, i) {
        function s(n) {
          t.on(e("." + a)[0], "click", function() {
            n.error(null)
          })
        }
        var r = {
            Firefox: "25",
            Chrome: "28",
            IE: "9",
            Opera: "14",
            Safari: "6"
          },
          a = "vjs-error-display__close",
          c = o.getUserAgent,
          l = 'Your browser is no longer supported. <a href="http://whatbrowser.org" target="_blank">Update your browser?</a> <button class="' + a + '">close</button>';
        return function(t) {
          var e = n.some(r, function(t, e) {
            return c.browser === e && c.version < t
          });
          e && i.switches.mediaPlayerSupportedBrowsers && (t.error(l), s(t))
        }
      }.call(this, t("npm:bean@1.0.15"), t("common/utils/$"), t("common/utils/_"), t("common/utils/detect"), t("common/utils/config"))
    })
  }(), function() {
    function t() {
    }
    t.amd = {}, System.register("common/modules/video/tech-order", ["common/utils/$", "common/utils/_", "common/utils/config"], !1, function(t, e, n) {
      return function(t, e, n) {
        function o(e) {
          return t("source", e).map(function(t) {
            var e = t.getAttribute("type");
            return s[e] ? s[e] : e
          })
        }
        function i(t) {
          return e.chain(o(t)).map(function(e) {
            return t.canPlayType(e)
          }).compact().contains("probably").value()
        }
        var s = {
          "video/m3u8": 'video/m3u8; codecs="avc1.42C01e, mp4a.40.2"',
          "video/mp4": 'video/mp4; codecs="avc1.42C01e, mp4a.40.2"',
          "video/3gp:large": 'video/3gp:large; codecs="avc1.42C01e, mp4a.40.2"',
          "video/3gp:small": 'video/3gp:small; codecs="avc1.42C01e, mp4a.40.2"',
          "video/webm": 'video/webm; codecs="vp8, vorbis"'
        };
        return function(t) {
          var e = ["flash", "html5"];
          return n.switches.html5MediaCompatibilityCheck && "canPlayType" in t && i(t) ? e.reverse() : e
        }
      }.call(this, t("common/utils/$"), t("common/utils/_"), t("common/utils/config"))
    })
  }(), System.register("common/views/ui/loading.html!github:systemjs/plugin-text@0.0.2", [], !0, function(require, t, e) {
    var n = System.global,
      o = n.define;
    return n.define = void 0, e.exports = '<div class="pamplemousse">\n    <div class="pamplemousse__pip"><i></i></div>\n    <div class="pamplemousse__pip"><i></i></div>\n    <div class="pamplemousse__pip"><i></i></div>\n</div>\n', n.define = o, e.exports
  }), function() {
    function t() {
    }
    t.amd = {}, System.register("common/modules/discussion/activity-stream", ["npm:bonzo@1.4.0", "npm:bean@1.0.15", "common/utils/$", "common/modules/component", "common/modules/discussion/api"], !1, function(t, e, n) {
      return function(t, e, n, o, i) {
        function s(t) {
          this.setOptions(t)
        }
        function r(t) {
          e.on(t.elem, "click", ".js-activity-stream-page-change", function(e) {
            var n = e.currentTarget.getAttribute("data-page");
            e.preventDefault(), t.change({
              page: n
            })
          })
        }
        return o.define(s), s.prototype.endpoint = "/discussion/profile/:userId/:streamType.json?page=:page", s.prototype.componentClass = "activity-stream", s.prototype.defaultOptions = {
            page: 1,
            streamType: "discussions",
            userId: null
          }, s.prototype.ready = function() {
            this.removeState("loading"), this.on("click", ".js-disc-recommend-comment", this.recommendComment), n(".js-disc-recommend-comment").addClass("disc-comment__recommend--open"), r(this)
          }, s.prototype.recommendComment = function(e) {
            var o = e.currentTarget;
            i.recommendComment(o.getAttribute("data-comment-id")), t(o).addClass("disc-comment__recommend--active"), n(".js-disc-recommend-count", o).each(function(t) {
              t.innerHTML = parseInt(t.innerHTML, 10) + 1
            })
          }, s.prototype.change = function(e) {
            var o = t(this.elem).empty();
            return this.setState("loading"), this.setOptions(e), this._fetch().then(function(t) {
                n.create(t.html).each(function(t) {
                  o.html(n(t).html()).attr({
                    "class": t.className
                  })
                }), this.removeState("loading")
              }.bind(this))
          }, s
      }.call(this, t("npm:bonzo@1.4.0"), t("npm:bean@1.0.15"), t("common/utils/$"), t("common/modules/component"), t("common/modules/discussion/api"))
    })
  }(), function() {
    function t() {
    }
    t.amd = {}, System.register("bootstraps/sport", ["common/utils/$", "common/utils/config", "common/modules/component"], !1, function(t, e, n) {
      return function(t, e, n) {
        function o() {
          var o, i,
            s = e.page.cricketMatch;s && (o = new n, i = t(".js-cricket-score")[0], o.endpoint = "/sport/cricket/match/" + s + ".json", o.fetch(i, "summary"))
        }
        return {
          init: o
        }
      }.call(this, t("common/utils/$"), t("common/utils/config"), t("common/modules/component"))
    })
  }(), function() {
    function t() {
    }
    t.amd = {}, System.register("github:guardian/fence@0.2.11", ["github:guardian/fence@0.2.11/fence"], !1, function(t, e, n) {
      return function(t) {
        return t
      }.call(this, t("github:guardian/fence@0.2.11/fence"))
    })
  }(), function() {
    function t() {
    }
    t.amd = {}, System.register("common/modules/article/truncate", ["common/utils/$", "npm:bean@1.0.15", "npm:bonzo@1.4.0", "npm:qwery@3.4.2", "common/utils/_", "common/utils/config", "common/utils/detect", "common/utils/mediator", "common/modules/article/twitter"], !1, function(t, e, n) {
      return function(t, e, n, o, i, s, r, a, c) {
        function l() {
          t(".truncated-block blockquote.tweet-truncated").removeClass("tweet-truncated").addClass("js-tweet"), g.removeClass(m), t(".article-elongator").addClass("u-h"), c.enhanceTweets()
        }
        function u() {
          var t = window.location.hash.slice(1);return i.find(f, function(e) {
            return e.id === t
          })
        }
        function d() {
          var n = h.length,
            o = n - p,
            i = "";s.page.isLiveBlog && n > p && !u() && (i = 1 === o ? "View 1 more update" : "View " + o + " more updates", t.create('<button class="u-button-reset button button--large button--show-more liveblog__show-more article-elongator" data-link-name="continue reading" data-test-id="article-expand"><i class="i i-plus-white"></i>' + i + "</button>").each(function(e) {
            t(".js-liveblog-body").append(e)
          }), e.on(document.body, "click", ".article-elongator", l.bind(this)), a.on("module:liveblog:showkeyevents", l.bind(this)), a.on("module:filter:toggle", l.bind(this)), g.addClass(m), t(".truncated-block blockquote.tweet").removeClass("js-tweet").addClass("tweet-truncated"))
        }
        var m = "truncated-block",
          p = "mobile" === r.getBreakpoint() ? 5 : 10,
          h = o(".block"),
          f = h.slice(p),
          g = n(f);
        return d
      }.call(this, t("common/utils/$"), t("npm:bean@1.0.15"), t("npm:bonzo@1.4.0"), t("npm:qwery@3.4.2"), t("common/utils/_"), t("common/utils/config"), t("common/utils/detect"), t("common/utils/mediator"), t("common/modules/article/twitter"))
    })
  }(), function() {
    function t() {
    }
    t.amd = {}, System.register("common/modules/open/cta", ["common/utils/$", "common/utils/clamp", "common/modules/component"], !1, function(t, e, n) {
      return function(t, e, n) {
        var o = function(t, e) {
          this.mediator = t, this.setOptions(e)
        };
        return n.define(o), o.prototype.endpoint = "/open/cta/article/:discussionKey.json", o.prototype.componentClass = "comment", o.prototype.useBem = !0, o.prototype.defaultOptions = {
            discussionKey: null
          }, o.prototype.prerender = function() {
            var e = t(".comment", this.elem),
              n = e[Math.floor(Math.random() * e.length) + 0];
            0 === e.length ? this.destroy() : this.elem = n
          }, o.prototype.ready = function() {
            e(this.getElem("body"), 10, !0)
          }, o
      }.call(this, t("common/utils/$"), t("common/utils/clamp"), t("common/modules/component"))
    })
  }(), function() {
    function t() {
    }
    t.amd = {}, System.register("common/modules/ui/selection-sharing", ["npm:bean@1.0.15", "npm:bonzo@1.4.0", "common/utils/_", "common/utils/$", "common/utils/client-rects", "common/utils/config", "common/utils/detect", "common/utils/mediator", "common/utils/template", "common/views/ui/selection-sharing.html!github:systemjs/plugin-text@0.0.2"], !1, function(t, e, n) {
      return function(t, e, n, o, i, s, r, a, c, l) {
        var u, d,
          m = e(document.body),
          p = o.create(l),
          h = s.page.shortUrl + "/stw",
          f = 'https://twitter.com/intent/tweet?text="<%=text%>"&url=<%=url%>',
          g = 115,
          v = s.page.shortUrl + "/sbl",
          y = 'mailto:?subject=<%=subject%>&body="<%=selection%>" <%=url%>',
          b = ["js-article__body", "content__standfirst", "block", "caption--main", "content__headline"],
          w = function() {
            var t, e, n, o, r, a,
              l = window.getSelection && document.createRange && window.getSelection();
            if (l && l.rangeCount > 0 && l.toString()) {
              if (t = l.getRangeAt(0), e = i.getBoundingClientRect(t), n = m.scrollTop() + e.bottom, o = t.toString(), !x(t)) return void k();
              o.length > g && (o = o.slice(0, g - 1) + "\u2026"), r = c(f, {
                text: encodeURI(o),
                url: encodeURI(h)
              }), a = c(y, {
                subject: encodeURI(s.page.webTitle),
                selection: encodeURI(t.toString()),
                url: encodeURI(v)
              }), u.attr("href", r), d.attr("href", a), p.css({
                top: n + "px",
                left: e.left + "px"
              }), j()
            } else k()
          },
          k = function() {
            p.hasClass("selection-sharing--active") && p.removeClass("selection-sharing--active")
          },
          j = function() {
            p.hasClass("selection-sharing--active") || p.addClass("selection-sharing--active")
          },
          T = function(t) {
            o.ancestor(t.target, "social__item") || k()
          },
          C = function() {
            r.hasTouchScreen() || (m.append(p), u = o(".js-selection-twitter"), d = o(".js-selection-email"), t.on(document.body, "keypress keydown keyup", n.debounce(w, 50)), t.on(document.body, "mouseup", n.debounce(w, 200)), t.on(document.body, "mousedown", n.debounce(T, 50)), a.on("window:resize", n.throttle(w, 50)))
          },
          x = function(t) {
            return n.some(b, function(e) {
              return o.ancestor(t.startContainer, e) && o.ancestor(t.endContainer, e)
            })
          };
        return {
          init: C,
          updateSelection: w
        }
      }.call(this, t("npm:bean@1.0.15"), t("npm:bonzo@1.4.0"), t("common/utils/_"), t("common/utils/$"), t("common/utils/client-rects"), t("common/utils/config"), t("common/utils/detect"), t("common/utils/mediator"), t("common/utils/template"), t("common/views/ui/selection-sharing.html!github:systemjs/plugin-text@0.0.2"))
    })
  }(), function() {
    function t() {
    }
    t.amd = {}, System.register("github:guardian/enhancer@0.1.3", ["github:guardian/enhancer@0.1.3/enhancer"], !1, function(t, e, n) {
      return function(t) {
        return t
      }.call(this, t("github:guardian/enhancer@0.1.3/enhancer"))
    })
  }(), System.register("npm:fastclick@1.0.6", ["npm:fastclick@1.0.6/lib/fastclick"], !0, function(require, t, e) {
    var n = System.global,
      o = n.define;
    return n.define = void 0, e.exports = require("npm:fastclick@1.0.6/lib/fastclick"), n.define = o, e.exports
  }), function() {
    function t() {
    }
    t.amd = {}, System.register("common/modules/analytics/livestats", ["common/utils/cookies", "common/utils/storage", "common/modules/analytics/beacon", "common/modules/experiments/ab"], !1, function(t, e, n) {
      return function(t, e, n, o) {
        function i() {
          var t = "gu.session";return "undefined" != typeof r ? r : (e.session.get(t) ? r = !1 : (e.session.set(t, "true"), r = !0), r)
        }
        function s(t, e) {
          var n,
            o = [];
          for (n in t) o.push(n + "=" + encodeURIComponent(t[n]));
          return e + "?" + o.join("&")
        }
        var r;
        return {
          log: function() {
            var t = o.getAbLoggableObject();
            i() ? t.type = "session" : t.type = "view", n.fire(s(t, "/ab.gif"))
          }
        }
      }.call(this, t("common/utils/cookies"), t("common/utils/storage"), t("common/modules/analytics/beacon"), t("common/modules/experiments/ab"))
    })
  }(), function() {
    function t() {
    }
    t.amd = {}, System.register("common/modules/onward/history", ["github:wilsonpage/fastdom@0.8.6", "common/utils/$", "common/utils/_", "common/utils/config", "common/utils/template", "common/utils/storage", "common/utils/url", "common/modules/experiments/ab", "common/views/history/tag.html!github:systemjs/plugin-text@0.0.2", "common/views/history/mega-nav.html!github:systemjs/plugin-text@0.0.2"], !1, function(t, e, n) {
      return function(t, e, n, o, i, s, r, a, c, l) {
        function u(t) {
          return P = t, s.local.set(H, t)
        }
        function d(t) {
          return I = t, s.local.set($, t)
        }
        function m() {
          return P = P || s.local.get(H) || []
        }
        function p() {
          return I || (I = s.local.get($), n.isObject(I) && n.isObject(I.tags) && n.isNumber(I.periodEnd) || (I = {
              periodEnd: z,
              tags: {},
              showInMegaNav: !0
            })), I
        }
        function h(t) {
          var e = p();
          delete e.tags[t]
          , d(e)
        }
        function f(t) {
          return (n.find(m(), function(e) {
              return e[0] === t
            }) || [])[1] > 1
        }
        function g(t, e) {
          var o = e || z,
            i = o - t.periodEnd;return 0 !== i && (t.periodEnd = o, n.each(t.tags, function(e, o) {
              var s = n.chain(V).map(function(t) {
                var o = n.chain(e[t.indexInRecord]).map(function(t) {
                  var e = t[0] + i;
                  return B > e && e >= 0 ? [e, t[1]] : !1
                }).compact().value();
                return o.length > 1 || 1 === o.length && o[0][0] < q ? o : []
              }).value();
              n.some(s, function(t) {
                return t.length
              }) ? t.tags[o] = [e[0]].concat(s) :
                delete t.tags[o]
            })), t
        }
        function v(t) {
          var e = p().tags,
            o = n.keys(e),
            i = n.extend({
              number: 100,
              weights: {},
              thresholds: {}
            }, t);return o = i.whitelist ? o.filter(function(t) {
              return i.whitelist.indexOf(t) > -1
            }) : o, o = i.blacklist ? o.filter(function(t) {
              return -1 === i.blacklist.indexOf(t)
            }) : o, n.chain(o).map(function(t) {
              var o = e[t],
                s = n.reduce(V, function(t, e) {
                  return t + b(o[e.indexInRecord], i.weights[e.type], i.thresholds[e.type])
                }, 0);
              return {
                idAndName: [t, o[0]],
                rank: s
              }
            }).compact().sortBy("rank").last(i.number).reverse().pluck("idAndName").value()
        }
        function y(t) {
          var e = t && t.flush;return N = !e && N || v({
              blacklist: x(),
              number: 10,
              weights: {
                content: 1,
                front: 5
              },
              thresholds: {
                content: 5,
                front: 1
              }
            })
        }
        function b(t, e, o) {
          var i,
            s = 0;return e = e || 1, o = o || 1, i = n.reduce(t, function(t, n) {
              var o = n[0],
                i = n[1];
              return s += i, t + e * (9 + i) * (B - o)
            }, 0), o > s ? 0 : i
        }
        function w(t) {
          return (t || "").split(",")[0]
        }
        function k(t) {
          return t ? (t = t.replace(/^\/|\/$/g, ""), t.match(G) && (t = t.replace(W, "")), t = t.split("/"), t = 2 === t.length && t[0] === t[1] ? [t[0]] : t, t.join("/")) : ""
        }
        function j() {
          P = void 0, I = void 0, s.local.remove(H), s.local.remove($)
        }
        function T(t) {
          var e,
            o = t.pageId,
            i = 0;t.isFront || (e = m().filter(function(t) {
            var e = n.isArray(t),
              s = e && t[0] === o;
            return i = s ? t[1] : i, e && !s
          }), e.unshift([o, i + 1]), u(e.slice(0, U)))
        }
        function C(t, e) {
          var o = g(p(), e),
            i = k(t.pageId),
            s = !1;n.chain(F).reduceRight(function(e, n) {
            var o = k(w(t[n.tid])),
              r = o && w(t[n.tname]);
            return o && r && (e[o] = r), s = s || o === i, e
          }, {}).each(function(t, e) {
            var i, r,
              a = o.tags[e] || [];
            n.forEach(V, function(t) {
              a[t.indexInRecord] = a[t.indexInRecord] || []
            }), a[0] = t, i = a[s ? 2 : 1], r = n.find(i, function(t) {
              return 0 === t[0]
            }), r ? r[1] = r[1] + 1 : i.unshift([0, 1]), o.tags[e] = a
          }), d(o)
        }
        function x() {
          return L = L || e(".js-navigation-header .js-top-navigation a").map(function(t) {
              return k(r.getPath(e(t).attr("href")))
            })
        }
        function S() {
          return e(".js-global-navigation")
        }
        function _() {
          var e, n;p().showInMegaNav !== !1 && (Y && E(), e = y(), e.length && (n = i(l, {
            tags: e.map(M).join("")
          }), t.write(function() {
            S().prepend(n)
          }), Y = !0))
        }
        function E() {
          S().each(function(n) {
            t.write(function() {
              e(".js-global-navigation__section--history", n).remove()
            })
          }), Y = !1
        }
        function A() {
          return p().showInMegaNav !== !1
        }
        function D(t) {
          var e = p();e.showInMegaNav = !!t, e.showInMegaNav ? _() : E(), d(e)
        }
        function M(t, e) {
          return i(c, {
            id: t[0],
            name: t[1],
            index: e + 1
          })
        }
        var P, I, N, L,
          R = ["uk", "us", "au"],
          O = ["business", "commentisfree", "culture", "environment", "media", "money", "sport", "technology"],
          F = [{
            tid: "section",
            tname: "sectionName"
          }, {
            tid: "keywordIds",
            tname: "keywords"
          }, {
            tid: "seriesId",
            tname: "series"
          }, {
            tid: "authorIds",
            tname: "author"
          }],
          V = [{
            type: "content",
            indexInRecord: 1
          }, {
            type: "front",
            indexInRecord: 2
          }],
          B = 30,
          q = 10,
          U = 50,
          H = "gu.history",
          $ = "gu.history.summary",
          z = Math.floor(Date.now() / 864e5),
          Y = !1,
          G = new RegExp("^(" + R.join("|") + ")/(" + O.join("|") + ")$"),
          W = new RegExp("^(" + R.join("|") + ")/");
        return {
          logHistory: T,
          logSummary: C,
          showInMegaNav: _,
          showInMegaNavEnable: D,
          showInMegaNavEnabled: A,
          getPopular: v,
          getPopularFiltered: y,
          deleteFromSummary: h,
          isRevisit: f,
          reset: j,
          test: {
            getSummary: p,
            getHistory: m,
            pruneSummary: g
          }
        }
      }.call(this, t("github:wilsonpage/fastdom@0.8.6"), t("common/utils/$"), t("common/utils/_"), t("common/utils/config"), t("common/utils/template"), t("common/utils/storage"), t("common/utils/url"), t("common/modules/experiments/ab"), t("common/views/history/tag.html!github:systemjs/plugin-text@0.0.2"), t("common/views/history/mega-nav.html!github:systemjs/plugin-text@0.0.2"))
    })
  }(), function() {
    function t() {
    }
    t.amd = {}, System.register("common/modules/analytics/css-logging", ["github:guardian/native-promise-only@0.7.6-e", "common/utils/_", "common/utils/config", "common/utils/ajax", "common/utils/detect", "common/utils/url", "common/utils/scan", "common/utils/mediator", "common/modules/analytics/beacon"], !1, function(t, e, n) {
      return function(t, e, n, o, i, s, r, a, c) {
        function l(t) {
          var n = t ? t.cssRules || t.rules : null;return n ? e.values(n) : t
        }
        function u(t) {
          return t && t.selectorText && t.selectorText.replace(w, "").split(k)
        }
        function d(t) {
          var e = t.match(/\.[^\s\.]+\.[^\s]+/g) || [];return e.forEach(function(e) {
              t = t.replace(e, m(e))
            }), t.replace(/^\s+|\s+$/g, "").replace(/\s+/g, " ")
        }
        function m(t) {
          return e.sortBy(t.split(".")).join(".")
        }
        function p(t) {
          var n, o,
            i = e.chain(h()).map(l).flatten().map(l).flatten().map(u).flatten().compact().uniq().map(d).value();return t ? i : (o = i.length, n = e.random(0, o), i.slice(n, n + b).concat(o > n + b ? [] : i.slice(0, (n + b) % o)))
        }
        function h() {
          return e.chain(document.styleSheets).filter(function(t) {
            return t && e.values(t.rules || t.cssRules).length > 0 && t.ownerNode && "STYLE" === t.ownerNode.nodeName && t.ownerNode.className.indexOf(j) > -1
          }).value()
        }
        function f(t) {
          return o({
            url: t.href,
            crossOrigin: !0
          }).then(function(t) {
            var e = document.createElement("style");
            e.className = j, e.innerHTML = t, document.getElementsByTagName("head")[0].appendChild(e)
          })
        }
        function g() {
          return t.all(e.chain(document.styleSheets).filter(function(t) {
            return t && t.href && t.href.match(/\/\/(localhost|assets\.guim\.co\.uk)/) && (!t.media || "print" !== t.media.mediaText) && -1 === t.ownerNode.className.indexOf(T)
          }).forEach(function(t) {
            t.ownerNode.className += " " + T
          }).map(f).value())
        }
        function v(t) {
          g().then(function() {
            c.postJson("/css", JSON.stringify({
              selectors: e.chain(p(t)).reduce(function(t, n) {
                return e.isUndefined(t[n]) && (t[n] = !!document.querySelector(n)), t
              }, {}).value(),
              contentType: n.page.contentType || "unknown",
              breakpoint: i.getBreakpoint() || "unknown"
            }), t)
          })
        }
        function y(t) {
          return e.debounce(function(n) {
            (!n || n.samePage) && setTimeout(function() {
              v(t)
            }, t ? 0 : e.random(0, 3e3))
          }, 500)
        }
        var b = 500,
          w = new RegExp(/:+[^\s\,]+/g),
          k = new RegExp(/\s*,\s*/g),
          j = "js-loggable",
          T = "js-inlined",
          C = !1;
        return function(t) {
          var n;
          t = t || "#csslogging" === window.location.hash, (t || 1 === e.random(1, 2500)) && (n = y(t), n(), C || (a.on("module:clickstream:interaction", n), a.on("module:clickstream:click", n), C = !0))
        }
      }.call(this, t("github:guardian/native-promise-only@0.7.6-e"), t("common/utils/_"), t("common/utils/config"), t("common/utils/ajax"), t("common/utils/detect"), t("common/utils/url"), t("common/utils/scan"), t("common/utils/mediator"), t("common/modules/analytics/beacon"))
    })
  }(), function() {
    function t() {
    }
    t.amd = {}, System.register("common/modules/discussion/comment-count", ["npm:bonzo@1.4.0", "github:wilsonpage/fastdom@0.8.6", "npm:qwery@3.4.2", "common/utils/$", "common/utils/_", "common/utils/ajax", "common/utils/formatters", "common/utils/mediator", "common/utils/template", "common/views/svgs", "common/views/discussion/comment-count.html!github:systemjs/plugin-text@0.0.2", "common/views/discussion/comment-count--content.html!github:systemjs/plugin-text@0.0.2"], !1, function(t, e, n) {
      return function(t, e, n, o, i, s, r, a, c, l, u, d) {
        function m(e) {
          var o = n("[" + y + "]", e);return i.groupBy(o, function(e) {
            return t(e).attr(y)
          })
        }
        function p(t) {
          return i.chain(t).keys().uniq().sortBy().join(",").value()
        }
        function h(t) {
          var e = t.getElementsByTagName("a")[0];return (e ? e.pathname : "") + "#comments"
        }
        function f(o, s) {
          o.forEach(function(o) {
            i.forEach(s[o.id], function(i) {
              var s, a, u, d,
                m = t(i),
                p = m.attr("data-discussion-url") || h(i);
              ("true" !== m.attr("data-discussion-closed") || 0 !== o.count) && (s = m.data("commentcount-format"), d = c(w[s] || k, {
                url: p,
                icon: l("commentCount16icon", ["inline-tone-fill"]),
                count: r.integerCommas(o.count)
              }), u = n(".js-item__meta", i), a = u.length ? t(u) : m, e.write(function() {
                a.append(d), m.removeAttr(y), m.removeClass("u-h")
              }))
            })
          }), e.write(function() {
            a.emit("modules:commentcount:loaded", o)
          })
        }
        function g(t) {
          e.read(function() {
            var e = m(t || document.body),
              n = p(e);
            s({
              url: b + n,
              type: "json",
              method: "get",
              crossOrigin: !0,
              success: function(t) {
                t && t.counts && f(t.counts, e)
              }
            })
          })
        }
        function v() {
          document.body.querySelector("[data-discussion-id]") && g(document.body), a.on("modules:related:loaded", g)
        }
        var y = "data-discussion-id",
          b = "/discussion/comment-counts.json?shortUrls=",
          w = {
            content: d
          },
          k = u;
        return {
          init: v,
          getCommentCounts: g,
          getContentIds: p,
          getElementsIndexedById: m
        }
      }.call(this, t("npm:bonzo@1.4.0"), t("github:wilsonpage/fastdom@0.8.6"), t("npm:qwery@3.4.2"), t("common/utils/$"), t("common/utils/_"), t("common/utils/ajax"), t("common/utils/formatters"), t("common/utils/mediator"), t("common/utils/template"), t("common/views/svgs"), t("common/views/discussion/comment-count.html!github:systemjs/plugin-text@0.0.2"), t("common/views/discussion/comment-count--content.html!github:systemjs/plugin-text@0.0.2"))
    })
  }(), function() {
    function t() {
    }
    t.amd = {}, System.register("common/utils/scroller", ["common/utils/easing", "npm:bonzo@1.4.0", "github:wilsonpage/fastdom@0.8.6"], !1, function(t, e, n) {
      return function(t, e, n) {
        function o(o, i, s) {
          var r = e(document.body),
            a = o,
            c = r.scrollTop(),
            l = a - c,
            u = t.create(s || "easeOutQuad", i),
            d = function() {
              n.write(function() {
                r.scrollTop(c + u() * l)
              })
            },
            m = window.setInterval(d, 15);window.setTimeout(function() {
            window.clearInterval(m), n.write(function() {
              r.scrollTop(a)
            })
          }, i)
        }
        function i(t, n, i) {
          var s = e(t).offset().top;o(s, n, i)
        }
        return {
          scrollToElement: i,
          scrollTo: o
        }
      }.call(this, t("common/utils/easing"), t("npm:bonzo@1.4.0"), t("github:wilsonpage/fastdom@0.8.6"))
    })
  }(), function() {
    function t() {
    }
    t.amd = {}, System.register("common/modules/discussion/comment-box", ["common/utils/$", "npm:bean@1.0.15", "npm:bonzo@1.4.0", "common/utils/config", "common/utils/mediator", "common/modules/analytics/beacon", "common/modules/discussion/api", "common/modules/identity/api", "common/modules/component", "common/modules/discussion/user-avatars", "common/modules/identity/validation-email"], !1, function(t, e, n) {
      return function(t, e, n, o, i, s, r, a, c, l, u) {
        function d(t) {
          this.setOptions(t), i.on("module:identity:validation-email:success", this.verificationEmailSuccess.bind(this)), i.on("module:identity:validation-email:fail", this.verificationEmailFail.bind(this))
        }
        return c.define(d), d.prototype.useBem = !0, d.prototype.templateName = "comment-box", d.prototype.componentClass = "d-comment-box", d.prototype.classes = {}, d.prototype.errorMessages = {
            EMPTY_COMMENT_BODY: "Please write a comment.",
            COMMENT_TOO_LONG: "Your comment must be fewer than 5000 characters long.",
            HTTP_420: "You can only post one comment every minute. Please try again in a moment.",
            HTTP_0: "Could not post due to your internet settings, which might be controlled by your provider. Please contact your administrator or disable any proxy servers or VPNs and try again.",
            USER_BANNED: 'Commenting has been disabled for this account (<a href="/community-faqs#321a">why?</a>).',
            API_ERROR: "Sorry, there was a problem posting your comment.  Please try another browser or network connection.  Reference code ",
            EMAIL_VERIFIED: '<span class="d-comment-box__error-meta">Sent. Please check your email to verify  your email address. Once verified post your comment.</span>',
            EMAIL_VERIFIED_FAIL: 'We are having technical difficulties. Please try again later or <a href="/send/email" class="js-id-send-validation-email"><strong>resend the verification</strong></a>.',
            EMAIL_NOT_VERIFIED: 'Please confirm your email address to post your first comment.<br />If you can\'t find the email, we can <a href="_#" class="js-id-send-validation-email"><strong>resend the verification email</strong></a><span class="d-comment-box__error-meta"> to  your email address.</span>'
          }, d.prototype.defaultOptions = {
            discussionId: null,
            apiRoot: null,
            maxLength: 5e3,
            premod: !1,
            focus: !1,
            state: "top-level",
            replyTo: null,
            priorToVerificationDate: new Date(1392719401337)
          }, d.prototype.errors = [], d.prototype.getUserData = function() {
            return a.getUserFromCookie()
          }, d.prototype.prerender = function() {
            this.options.premod || this.getElem("premod").parentNode.removeChild(this.getElem("premod"));
            var t = this.getUserData();
            if (this.getElem("author").innerHTML = t.displayName, "response" === this.options.state)
              this.getElem("submit").innerHTML = "Post reply"; else {
              var e = this.getElem("avatar-wrapper");
              e.setAttribute("userid", t.id), l.avatarify(e)
            }
            if (this.options.replyTo) {
              var n = this.getElem("reply-to-author");
              n.innerHTML = this.options.replyTo.author, this.getElem("parent-comment-author").innerHTML = this.options.replyTo.author + " @ " + this.options.replyTo.timestamp + " said:", this.getElem("parent-comment-body").innerHTML = this.options.replyTo.body;
              var o = function() {
                var t = n.offsetLeft + n.getBoundingClientRect().width / 2;
                this.getElem("parent-comment-spout").style.marginLeft = t + "px"
              };
              window.setTimeout(o.bind(this), 0)
            }
          }, d.prototype.ready = function() {
            if (null === this.getDiscussionId())
              throw new Error('CommentBox: You need to set the "data-discussion-key" on your element');
            var t = this.getElem("body");
            this.setFormState(), e.on(document.body, "submit", [this.elem], this.postComment.bind(this)), e.on(document.body, "change keyup", [t], this.setFormState.bind(this)), e.on(t, "focus", this.setExpanded.bind(this)), this.on("change", ".d-comment-box__body", this.resetPreviewComment), this.on("click", this.getClass("preview"), this.previewComment), this.on("click", this.getClass("hide-preview"), this.resetPreviewComment), this.on("click", this.getClass("cancel"), this.cancelComment), this.on("click", this.getClass("show-parent"), this.setState.bind(this, "parent-visible", !1)), this.on("click", this.getClass("hide-parent"), this.removeState.bind(this, "parent-visible", !1)), this.on("click", this.getClass("formatting-bold"), this.formatComment.bind(this, "bold")), this.on("click", this.getClass("formatting-italic"), this.formatComment.bind(this, "italic")), this.on("click", this.getClass("formatting-quote"), this.formatComment.bind(this, "quote")), this.on("click", this.getClass("formatting-link"), this.formatComment.bind(this, "link")), this.setState(this.options.state), this.options.focus && window.setTimeout(function() {
              this.getElem("body").focus()
            }.bind(this), 0)
          }, d.prototype.urlify = function(t) {
            var e = "(?![^<]*>|[^<>]*</)",
              n = "\\b((https?://|www.)\\S+)\\b",
              o = new RegExp(n + e, "g");
            return t.replace(o, function(t, e, n) {
              var o = "www." === n ? "http://" + e : e;
              return '<a href="' + o + '">' + e + "</a>"
            })
          }, d.prototype.postComment = function(t) {
            var e = this,
              n = {
                body: this.elem.body.value
              };
            t.preventDefault(), e.clearErrors();
            var o = function() {
                "" === n.body && e.error("EMPTY_COMMENT_BODY"), n.body.length > e.options.maxLength && e.error("COMMENT_TOO_LONG", "<b>Comments must be shorter than " + e.options.maxLength + " characters.</b>Yours is currently " + (n.body.length - e.options.maxLength) + " character(s) too long."), e.options.replyTo && (n.replyTo = e.options.replyTo), 0 === e.errors.length && (n.body = e.urlify(n.body), e.setFormState(!0), r.postComment(e.getDiscussionId(), n).then(e.postCommentSuccess.bind(e, n), e.fail.bind(e)))
              },
              i = function() {
                e.error("EMAIL_NOT_VERIFIED"), u.init()
              };
            if (e.getUserData().emailVerified) o(); else {
              var s = new Date(e.getUserData().accountCreatedDate);
              s > e.options.priorToVerificationDate ? a.getUserFromApiWithRefreshedCookie().then(function(t) {
                t.user.statusFields.userEmailValidated === !0 ? o() : i()
              }) : o()
            }
          }, d.prototype.error = function(t, e) {
            "HTTP_0" === t ? s.counts("comment-http-proxy-error", "comment-error") : s.counts("comment-error"), e = e || this.errorMessages[t], this.setState("invalid");
            var o = n.create('<div class="d-discussion__error ' + this.getClass("error", !0) + '"><i class="i i-alert"></i><span class="d-discussion__error-text">' + e + "</span></div>")[0];
            this.getElem("messages").appendChild(o), this.errors.push(t)
          }, d.prototype.postCommentSuccess = function(t, e) {
            s.counts("comment-post-success"), t.id = parseInt(e.message, 10), this.getElem("body").value = "", this.resetPreviewComment(), this.setFormState(), this.emit("post:success", t), i.emit("discussion:commentbox:post:success", t)
          }, d.prototype.fail = function(t) {
            var e;
            try {
              e = JSON.parse(t.responseText)
            } catch (n) {
              e = {}
            } this.setFormState(), this.errorMessages["HTTP_" + t.status] ? this.error("HTTP_" + t.status) : this.errorMessages[e.errorCode] ? this.error(e.errorCode) : this.error("API_ERROR", this.errorMessages.API_ERROR + t.status)
          }, d.prototype.previewCommentSuccess = function(t, e) {
            this.getElem("preview-body").innerHTML = e.commentBody, this.setState("preview-visible")
          }, d.prototype.getDiscussionId = function() {
            return this.options.discussionId || this.elem.getAttribute("data-discussion-key").replace("discussion", "")
          }, d.prototype.setFormState = function(t) {
            t = "boolean" == typeof t ? t : !1;
            var e = this.getElem("body"),
              n = this.getElem("submit");
            t || 0 === e.value.length ? n.setAttribute("disabled", "disabled") : n.removeAttribute("disabled")
          }, d.prototype.clearErrors = function() {
            this.getElem("messages").innerHTML = "", this.errors = [], this.removeState("invalid")
          }, d.prototype.setExpanded = function() {
            this.setState("expanded")
          }, d.prototype.verificationEmailSuccess = function() {
            this.clearErrors(), this.error("EMAIL_VERIFIED")
          }, d.prototype.verificationEmailFail = function() {
            this.clearErrors(), this.error("EMAIL_VERIFIED_FAIL")
          }, d.prototype.previewComment = function(t) {
            var e = this,
              n = {
                body: this.getElem("body").value
              };
            t.preventDefault(), e.clearErrors(), "" === n.body && (this.resetPreviewComment(), e.error("EMPTY_COMMENT_BODY")), n.body.length > e.options.maxLength && e.error("COMMENT_TOO_LONG", "<b>Comments must be shorter than " + e.options.maxLength + " characters.</b>Yours is currently " + (n.body.length - e.options.maxLength) + " characters too long."), 0 === e.errors.length && r.previewComment(n).then(e.previewCommentSuccess.bind(e, n), e.fail.bind(e))
          }, d.prototype.cancelComment = function() {
            "response" === this.options.state ? this.destroy() : (this.resetPreviewComment(), this.getElem("body").value = "", this.setFormState(), this.removeState("expanded"))
          }, d.prototype.resetPreviewComment = function() {
            this.removeState("preview-visible"), this.getElem("preview-body").innerHTML = ""
          }, d.prototype.formatComment = function(t) {
            var e = this.getElem("body"),
              n = e.selectionStart,
              o = e.value.substring(e.selectionStart, e.selectionEnd),
              i = function(t, n) {
                var i = t + o + n;
                e.value = e.value.substring(0, e.selectionStart) + i + e.value.substring(e.selectionEnd), r(i)
              },
              s = function() {
                var t, n;
                /^https?:\/\//i.test(o) ? t = o : (n = window.prompt("Your URL:", "http://www."), t = n, o = o || n);
                var i = '<a href="' + t + '">' + o + "</a>";
                e.value = e.value.substring(0, e.selectionStart) + i + e.value.substring(e.selectionEnd)
              },
              r = function(t) {
                e.setSelectionRange(n, n + t.length)
              };
            switch (t) {
              case "bold":i("<b>", "</b>");
                break;case "italic":i("<i>", "</i>");
                break;case "quote":i("<blockquote>", "</blockquote>");
                break;case "link":s()
            }
          }, d
      }.call(this, t("common/utils/$"), t("npm:bean@1.0.15"), t("npm:bonzo@1.4.0"), t("common/utils/config"), t("common/utils/mediator"), t("common/modules/analytics/beacon"), t("common/modules/discussion/api"), t("common/modules/identity/api"), t("common/modules/component"), t("common/modules/discussion/user-avatars"), t("common/modules/identity/validation-email"))
    })
  }(), function() {
    function t() {
    }
    t.amd = {}, System.register("common/modules/discussion/comments", ["npm:bean@1.0.15", "npm:bonzo@1.4.0", "npm:qwery@3.4.2", "common/utils/$", "common/utils/ajax-promise", "common/utils/config", "common/utils/mediator", "common/utils/scroller", "common/modules/component", "common/modules/discussion/api", "common/modules/discussion/comment-box", "common/modules/discussion/whole-discussion", "common/modules/ui/relativedates"], !1, function(t, e, n) {
      return function(t, e, n, o, i, s, r, a, c, l, u, d, m) {
        "use strict";
        var p = function(t) {
          this.setOptions(t)
        };
        return c.define(p), p.prototype.componentClass = "d-comments", p.prototype.classes = {
            comments: "d-thread--top-level",
            topLevelComment: "d-comment--top-level",
            reply: "d-comment--response",
            showReplies: "d-show-more-replies",
            showRepliesButton: "d-show-more-replies__button",
            newComments: "js-new-comments",
            comment: "d-comment",
            commentReply: "d-comment__action--reply",
            commentPick: "d-comment__action--pick",
            commentStaff: "d-comment--staff",
            commentBody: "d-comment__body",
            commentTimestampJs: "js-timestamp",
            commentReport: "js-report-comment"
          }, p.prototype.defaultOptions = {
            discussionId: null,
            showRepliesCount: 3,
            commentId: null,
            order: "newest",
            threading: "collapsed"
          }, p.prototype.comments = null, p.prototype.topLevelComments = null, p.prototype.user = null, p.prototype.ready = function() {
            this.topLevelComments = n(this.getClass("topLevelComment"), this.elem), this.comments = n(this.getClass("comment"), this.elem), this.on("click", this.getClass("showRepliesButton"), this.getMoreReplies), this.on("click", this.getClass("commentReport"), this.reportComment), window.setInterval(function() {
              this.relativeDates()
            }.bind(this), 6e4), this.emit("ready"), this.relativeDates(), this.on("click", ".js-report-comment-close", function() {
              o(".js-report-comment-form").addClass("u-h")
            })
          }, p.prototype.handlePickClick = function(t) {
            t.preventDefault();
            var e = t.target.getAttribute("data-comment-id"),
              n = o(t.target),
              i = "true" === n[0].getAttribute("data-comment-highlighted") ? this.unPickComment.bind(this) : this.pickComment.bind(this);
            i(e, n).fail(function(e) {
              var n = e.response.length > 0 ? JSON.parse(e.response).message : e.statusText;
              o(t.target).text(n)
            })
          }, p.prototype.pickComment = function(t, e) {
            var i = this,
              s = n("#comment-" + t, this.elem);
            return l.pickComment(t).then(function() {
              o(i.getClass("commentPick"), s).removeClass("u-h"), e.text("Unpick"), s.setAttribute("data-comment-highlighted", !0)
            })
          }, p.prototype.unPickComment = function(t, e) {
            var i = this,
              s = n("#comment-" + t);
            return l.unPickComment(t).then(function() {
              o(i.getClass("commentPick"), s).addClass("u-h"), e.text("Pick"), s.setAttribute("data-comment-highlighted", !1)
            })
          }, p.prototype.fetchComments = function(t) {
            t = t || {};
            var e = "/discussion/" + (t.comment ? "comment-context/" + t.comment : this.options.discussionId) + ".json?" + (t.page ? "&page=" + t.page : ""),
              n = {
                orderBy: t.order || this.options.order,
                pageSize: t.pagesize || this.options.pagesize,
                displayThreaded: "unthreaded" !== this.options.threading
              };
            t.comment || "collapsed" !== this.options.threading || (n.maxResponses = 3);
            var o,
              s = {
                url: e,
                type: "json",
                method: "get",
                crossOrigin: !0,
                data: n
              };
            return this.isAllPageSizeActive() ? o = new d({
                discussionId: this.options.discussionId,
                orderBy: n.orderBy,
                displayThreaded: n.displayThreaded,
                maxResponses: n.maxResponses
              }).loadAllComments()["catch"](function() {
                return this.wholeDiscussionErrors = !0, n.pageSize = 100, i(s)
              }.bind(this)) : ("All" === n.pageSize && (n.pageSize = 100), o = i(s)), o.then(this.renderComments.bind(this)).then(this.goToPermalink.bind(this, t.comment))
          }, p.prototype.goToPermalink = function(t) {
            t && (this.showHiddenComments(), o(".d-discussion__show-all-comments").addClass("u-h"), window.location.replace("#comment-" + t))
          }, p.prototype.renderComments = function(t) {
            var o = e.create(t.commentsHtml),
              i = n(this.getClass("comment"), o);
            e(this.elem).empty().append(o), this.addMoreRepliesButtons(i), this.postedCommentEl = t.postedCommentHtml, this.relativeDates(), this.emit("rendered", t.paginationHtml),
            r.emit("modules:comments:renderComments:rendered")
          }, p.prototype.showHiddenComments = function(t) {
            t && t.preventDefault(), this.emit("first-load"), this.relativeDates()
          }, p.prototype.addMoreRepliesButtons = function(t) {
            t = t || this.topLevelComments, t.forEach(function(t) {
              var e = parseInt(t.getAttribute("data-comment-replies"), 10),
                i = n(this.getClass("reply"), t);
              if (i.length < e) {
                var s = e - i.length,
                  r = o.create('<button class="u-button-reset button button--show-more button--small button--tone-news d-show-more-replies__button"><i class="i i-plus-blue"></i>Show ' + s + " more " + (1 === s ? "reply" : "replies") + "</button>").attr({
                    "data-link-name": "Show more replies",
                    "data-is-ajax": "",
                    "data-comment-id": t.getAttribute("data-comment-id")
                  }).data("source-comment", t);
                o.create('<li class="' + this.getClass("showReplies", !0) + '"></li>').append(r).appendTo(o(".d-thread--responses", t))
              }
            }.bind(this))
          }, p.prototype.getMoreReplies = function(t) {
            t.preventDefault();
            var s = o.ancestor(t.currentTarget, this.getClass("showReplies").slice(1));
            s.innerHTML = "Loading\u2026";
            var r = e(t.target).data("source-comment");
            i({
              url: "/discussion/comment/" + t.currentTarget.getAttribute("data-comment-id") + ".json",
              type: "json",
              method: "get",
              data: {
                displayThreaded: !0
              },
              crossOrigin: !0
            }).then(function(t) {
              var o = e.create(t.html),
                i = n(this.getClass("reply"), o);
              i = i.slice(this.options.showRepliesCount), e(n(".d-thread--responses", r)).append(i), e(s).addClass("u-h"), this.emit("untruncate-thread"), this.relativeDates()
            }.bind(this))
          }, p.prototype.isReadOnly = function() {
            return "true" === this.elem.getAttribute("data-read-only")
          }, p.prototype.addComment = function(t, i, s) {
            var r, a, c, l, u,
              d = {
                username: "d-comment__author",
                timestamp: "js-timestamp",
                body: "d-comment__body",
                report: "d-comment__action--report",
                avatar: "d-comment__avatar"
              },
              m = {
                username: this.user.displayName,
                timestamp: "Just now",
                body: "<p>" + t.body.replace(/\n+/g, "</p><p>") + "</p>",
                report: {
                  href: "http://discussion.theguardian.com/components/report-abuse/" + t.id
                },
                avatar: {
                  src: this.user.avatar
                }
              },
              p = e.create(this.postedCommentEl)[0],
              h = e(p);
            h.addClass("d-comment--new");
            for (r in d)
              if (d.hasOwnProperty(r))
                if (c = d[r], a = m[r], l = n("." + c, p)[0], "string" == typeof a)
                  l.innerHTML = a;else
                  for (u in a) l.setAttribute(u, a[u]);
            p.id = "comment-" + t.id, this.user && !this.user.isStaff && h.addClass(this.getClass("commentStaff", !0)), s ? (h.removeClass(this.getClass("topLevelComment", !0)), h.addClass(this.getClass("reply", !0)), e(s).append(h)) : o(this.getClass("newComments"), this.elem).prepend(p), window.location.replace("#comment-" + t.id)
          }, p.prototype.replyToComment = function(t) {
            t.preventDefault();
            var i, s,
              r = t.currentTarget,
              a = r.getAttribute("data-comment-id"),
              c = this;
            if (document.getElementById("reply-to-" + a)) return void document.getElementById("reply-to-" + a).focus();
            o(".d-comment-box--response").remove();
            var l = n("#comment-" + a)[0],
              d = l.getAttribute("data-comment-author"),
              m = l.getAttribute("data-comment-author-id"),
              p = e(l),
              h = n(this.getClass("commentBody"), l)[0].innerHTML,
              f = n(this.getClass("commentTimestampJs"), l)[0].innerHTML,
              g = new u({
                discussionId: this.options.discussionId,
                premod: this.user.privateFields.isPremoderated,
                state: "response",
                replyTo: {
                  commentId: a,
                  author: d,
                  authorId: m,
                  body: h,
                  timestamp: f
                },
                focus: !0
              });
            i = p.hasClass(this.getClass("topLevelComment", !0)) ? p[0] : p.parent().parent()[0], s = n(this.getClass("showReplies"), i), s.length > 0 && !e(s).hasClass("u-h") && s[0].click(), g.render(i), g.on("post:success", function(t) {
              var o = n(".d-thread--responses", i)[0];
              o || (o = e.create('<ul class="d-thread d-thread--responses"></ul>')[0], e(i).append(o)), this.destroy(), c.addComment(t, !1, o)
            })
          }, p.prototype.reportComment = function(n) {
            n.preventDefault();
            var i = n.currentTarget.getAttribute("data-comment-id");
            o(".js-report-comment-form").first().each(function(n) {
              t.one(n, "submit", function(t) {
                t.preventDefault();
                var o = n.elements.category,
                  s = n.elements.comment.value;
                "0" !== o.value && l.reportComment(i, {
                  emailAddress: n.elements.email.value,
                  categoryId: o.value,
                  reason: s
                }), e(n).addClass("u-h")
              })
            }).appendTo(o("#comment-" + i + " .js-report-comment-container").first()).removeClass("u-h")
          }, p.prototype.addUser = function(t) {
            this.user = t, this.user && this.user.badge && (this.user.isStaff = this.user.badge.some(function(t) {
              return "Staff" === t.name
            })), this.isReadOnly() || this.user && this.user.privateFields.canPostComment && (o(this.getClass("commentReply")).attr("href", "#"), this.on("click", this.getClass("commentReply"), this.replyToComment), this.on("click", this.getClass("commentPick"), this.handlePickClick))
          }, p.prototype.relativeDates = function() {
            m.init()
          }, p.prototype.isAllPageSizeActive = function() {
            return s.switches.discussionAllPageSize && "All" === this.options.pagesize && !this.wholeDiscussionErrors
          }, p.prototype.shouldShowPageSizeMessage = function() {
            return s.switches.discussionAllPageSize && "All" === this.options.pagesize && this.wholeDiscussionErrors
          }, p
      }.call(this, t("npm:bean@1.0.15"), t("npm:bonzo@1.4.0"), t("npm:qwery@3.4.2"), t("common/utils/$"), t("common/utils/ajax-promise"), t("common/utils/config"), t("common/utils/mediator"), t("common/utils/scroller"), t("common/modules/component"), t("common/modules/discussion/api"), t("common/modules/discussion/comment-box"), t("common/modules/discussion/whole-discussion"), t("common/modules/ui/relativedates"))
    })
  }(), function() {
    function t() {
    }
    t.amd = {}, System.register("common/modules/identity/autosignin", ["npm:bonzo@1.4.0", "common/utils/ajax", "common/utils/config", "common/utils/time", "common/modules/analytics/omniture", "common/modules/identity/api", "common/modules/identity/facebook-authorizer", "common/modules/navigation/profile", "common/modules/ui/message", "common/modules/ui/toggles"], !1, function(t, e, n) {
      return function(t, e, n, o, i, r, a, c, l, u) {
        function d() {
          var t = this;t.header = document.body, this.init = function() {
            if (r.shouldAutoSigninInUser()) {
              var e = n.page.fbAppId,
                i = new a(e);
              i.getLoginStatus(), i.onConnected.then(function(e, n) {
                i.onUserDataLoaded.then(function(e) {
                  e.email && t.signin(n, e.name)
                })
              }), i.onNotLoggedIn.then(function() {
                var t = o.currentDate();
                r.setNextFbCheckTime(t.setDate(t.getDate() + 1))
              }), i.onNotAuthorized.then(function() {
                var t = o.currentDate();
                r.setNextFbCheckTime(t.setMonth(t.getMonth() + 1))
              })
            }
          }, this.signin = function(o, r) {
            e({
              url: n.page.idWebAppUrl + "/jsapi/facebook/autosignup",
              cache: !1,
              crossOrigin: !0,
              type: "jsonp",
              data: {
                signedRequest: o.signedRequest,
                accessToken: o.accessToken
              },
              success: function(e) {
                if (t.welcome(r), "ok" === e.status) {
                  var o = new c({
                    url: n.page.idUrl
                  });
                  o.init(), (new u).init(), i.populateEventProperties("Social signin auto"), s.eVar13 = "facebook auto", s.linkTrackVars += ",eVar13", s.tl(this, "o", "Social signin auto")
                }
              }
            })
          }, this.welcome = function(t) {
            var e = '<p class="site-message__message" data-test-id="facebook-auto-sign-in-banner">Welcome ' + t + ', you\u2019re signed in to the Guardian using Facebook. <a data-link-name="fb auto : sign out" href="' + n.page.idUrl + '/signout"/>Sign out</a>.</p>';
            new l("fbauto", {
              important: !0
            }).show(e)
          }
        }
        return d
      }.call(this, t("npm:bonzo@1.4.0"), t("common/utils/ajax"), t("common/utils/config"), t("common/utils/time"), t("common/modules/analytics/omniture"), t("common/modules/identity/api"), t("common/modules/identity/facebook-authorizer"), t("common/modules/navigation/profile"), t("common/modules/ui/message"), t("common/modules/ui/toggles"))
    })
  }(), function() {
    function t() {
    }
    t.amd = {}, System.register("common/modules/onward/related", ["npm:bonzo@1.4.0", "npm:qwery@3.4.2", "common/utils/_", "common/utils/$", "common/utils/config", "common/utils/mediator", "common/modules/analytics/register", "common/modules/lazyload", "common/modules/ui/expandable"], !1, function(t, e, n) {
      return function(t, e, n, o, i, s, r, a, c) {
        function l(t) {
          u = t || {}
        }
        var u;
        return l.prototype.popularInTagOverride = function() {
            if (!i.page.keywordIds) return !1;
            var t = ["sport/cricket", "sport/rugby-union", "sport/rugbyleague", "sport/formulaone", "sport/tennis", "sport/cycling", "sport/motorsports", "sport/golf", "sport/horse-racing", "sport/boxing", "sport/us-sport", "sport/australia-sport", "football/championsleague", "football/premierleague", "football/championship", "football/europeanfootball", "football/world-cup-2014", "football/manchester-united", "football/chelsea", "football/arsenal", "football/manchestercity", "football/tottenham-hotspur", "football/liverpool"],
              e = i.page.keywordIds.split(","),
              o = i.page.isAdvertisementFeature ? e : n.intersection(t, e);
            return o.length ? "/popular-in-tag/" + o[0] + ".json" : void 0
          }, l.prototype.renderRelatedComponent = function() {
            var e, l, d, m,
              p = i.switches.relatedContent && i.page.showRelatedContent;
            i.page && i.page.hasStoryPackage ? new c({
              dom: document.body.querySelector(".related-trails"),
              expanded: !1,
              showCount: !1
            }).init() : p ? (m = document.body.querySelector(".js-related"), m && (l = this.popularInTagOverride(), d = l ? "related-popular-in-tag" : "related-content", r.begin(d), m.setAttribute("data-component", d), e = l || "/related/" + i.page.pageId + ".json", u.excludeTags && u.excludeTags.length && (e += "?" + n.map(u.excludeTags, function(t) {
                return "exclude-tag=" + t
              }).join("&")), new a({
              url: e,
              container: m,
              success: function() {
                var t = m.querySelector(".related-content");
                new c({
                  dom: t,
                  expanded: !1,
                  showCount: !1
                }).init(), s.emit("modules:related:loaded", m), s.emit("page:new-content", m), r.end(d)
              },
              error: function() {
                t(m).remove(), r.error(d)
              }
            }).load())) : o(".js-related").addClass("u-h")
          }, l
      }.call(this, t("npm:bonzo@1.4.0"), t("npm:qwery@3.4.2"), t("common/utils/_"), t("common/utils/$"), t("common/utils/config"), t("common/utils/mediator"), t("common/modules/analytics/register"), t("common/modules/lazyload"), t("common/modules/ui/expandable"))
    })
  }(), function() {
    function t() {
    }
    t.amd = {}, System.register("common/modules/social/share-count", ["github:getsentry/raven-js@1.1.18", "common/utils/$", "common/utils/ajax", "common/utils/detect", "common/utils/config", "common/utils/formatters", "common/utils/template", "common/views/content/share-count.html!github:systemjs/plugin-text@0.0.2"], !1, function(t, e, n) {
      return function(t, e, n, o, i, s, r, a) {
        function c(t) {
          if (0 !== t) {
            h += t;
            var e = h.toFixed(0),
              n = s.integerCommas(e),
              o = e > 1e4 ? Math.round(e / 1e3) + "k" : e;
            m.text(n), p.text(o)
          }
        }
        function l() {
          f.attr("title", r(g, v))
        }
        function u(t) {
          if (f.removeClass("u-h").html(a).css("display", ""), p = e(".sharecount__value--short", f[0]), m = e(".sharecount__value--full", f[0]), o.isBreakpoint({
              min: "tablet"
            })) var n = 250,
              i = 25,
              s = n / i,
              r = t / s,
              l = 0,
              u = window.setInterval(function() {
                c(r), ++l === s && window.clearInterval(u)
              }, i);else c(t)
        }
        function d() {
          if (f.length) {
            var e = "http://www.theguardian.com/" + i.page.pageId;
            try {
              n({
                url: "https://graph.facebook.com/" + e,
                type: "json",
                method: "get",
                crossOrigin: !0
              }).then(function(t) {
                var e = t.shares || 0;
                v.facebook = e, u(e), l()
              }), n({
                url: "https://cdn.api.twitter.com/1/urls/count.json?url=" + e,
                type: "jsonp",
                method: "get",
                crossOrigin: !0
              }).then(function(t) {
                var e = t.count || 0;
                v.twitter = e, u(e), l()
              })
            } catch (o) {
              t.captureException(new Error("Error retrieving share counts (" + o.message + ")"), {
                tags: {
                  feature: "share-count"
                }
              })
            }
          }
        }
        var m, p,
          h = 0,
          f = e(".js-sharecount"),
          g = "Facebook: <%=facebook%> \nTwitter: <%=twitter%>",
          v = {
            facebook: "n/a",
            twitter: "n/a"
          };
        return {
          init: d
        }
      }.call(this, t("github:getsentry/raven-js@1.1.18"), t("common/utils/$"), t("common/utils/ajax"), t("common/utils/detect"), t("common/utils/config"), t("common/utils/formatters"), t("common/utils/template"), t("common/views/content/share-count.html!github:systemjs/plugin-text@0.0.2"))
    })
  }(), function() {
    function t() {
    }
    t.amd = {}, System.register("common/modules/onward/breaking-news", ["npm:bean@1.0.15", "npm:bonzo@1.4.0", "common/utils/$", "github:wilsonpage/fastdom@0.8.6", "npm:qwery@3.4.2", "common/utils/_", "common/utils/ajax", "common/utils/config", "common/utils/storage", "common/utils/template", "common/modules/ui/relativedates", "common/modules/analytics/omniture", "common/views/svgs", "common/views/breaking-news.html!github:systemjs/plugin-text@0.0.2"], !1, function(t, e, n) {
      return function(t, e, n, o, i, s, r, a, c, l, u, d, m, p) {
        function h(t, e) {
          var n = {};return s.forEach(t, function(t) {
              n[t] = e[t] || !1
            }), n
        }
        var f, g, v, y,
          b = 1200,
          w = {
            sport: "sport",
            football: "sport"
          },
          k = "/breaking-news/lite.json",
          j = "gu.breaking-news.hidden",
          T = 1;
        return function() {
          var C = a.page,
            x = c.local.get(j) || {};
          C && x[C.pageId] !== !0 && r({
            url: k,
            type: "json",
            crossOrigin: !0
          }).then(function(r) {
            var a,
              k = (r.collections || []).filter(function(t) {
                return s.isArray(t.content) && t.content.length
              }).map(function(t) {
                return t.href = (t.href || "").toLowerCase(), t
              }),
              S = "international" === C.internationalEdition,
              _ = S ? "intl" : (C.edition || "").toLowerCase(),
              E = w[C.section],
              A = s.chain([k.filter(function(t) {
                return "global" === t.href
              }).map(function(t) {
                return t.content
              }), k.filter(function(t) {
                return t.href === _
              }).map(function(t) {
                return t.content
              }), k.filter(function(t) {
                return E && t.href === E
              }).map(function(t) {
                return t.content
              })]).flatten().filter(function(t) {
                var e = t.frontPublicationDate;
                return e && u.isWithinSeconds(new Date(e), b)
              }).value(),
              D = A.map(function(t) {
                return t.id
              }),
              M = 3e3;
            D.indexOf(C.pageId) > -1 && (x[C.pageId] = !0), c.local.set(j, h(D, x)), a = s.chain(A).filter(function(t) {
              return x[t.id] !== !0
            }).first(T).value(), a.length && (f = f || e(i(".js-breaking-news-placeholder")), v = m("marque36icon"), y = m("closeCentralIcon"), s.forEach(a, function(i) {
              var s;
              i.marque36icon = v, i.closeIcon = y, s = e.create(l(p, i)), t.on(n(".js-breaking-news__item__close", s)[0], "click", function() {
                o.write(function() {
                  n("[data-breaking-article-id]").hide()
                }), x[i.id] = !0, c.local.set(j, h(D, x))
              }), o.write(function() {
                f.append(s)
              }), x[i.id] === !1 && (M = 0)
            }), setTimeout(function() {
              var t,
                n = "breaking news alert shown" + (M ? "" : " 2 or more times");
              g = g || e(document.body), t = e(e.create(f[0])).addClass("breaking-news--spectre").removeClass("breaking-news--hidden"), o.write(function() {
                g.append(t)
              }), M || o.write(function() {
                f.removeClass("breaking-news--fade-in")
              }), o.write(function() {
                f.removeClass("breaking-news--hidden")
              }), d.trackLink(this, n)
            }, M))
          })
        }
      }.call(this, t("npm:bean@1.0.15"), t("npm:bonzo@1.4.0"), t("common/utils/$"), t("github:wilsonpage/fastdom@0.8.6"), t("npm:qwery@3.4.2"), t("common/utils/_"), t("common/utils/ajax"), t("common/utils/config"), t("common/utils/storage"), t("common/utils/template"), t("common/modules/ui/relativedates"), t("common/modules/analytics/omniture"), t("common/views/svgs"), t("common/views/breaking-news.html!github:systemjs/plugin-text@0.0.2"))
    })
  }(), function() {
    function t() {
    }
    t.amd = {}, System.register("common/modules/identity/saved-for-later", ["common/utils/$", "npm:qwery@3.4.2", "npm:bonzo@1.4.0", "npm:bean@1.0.15", "common/utils/_", "github:wilsonpage/fastdom@0.8.6", "common/utils/config", "common/utils/mediator", "common/utils/template", "common/modules/identity/api", "common/views/svgs", "common/views/save-for-later/delete-all-button.html!github:systemjs/plugin-text@0.0.2"], !1, function(t, e, n) {
      return function(t, e, n, o, i, s, r, a, c, l, u, d) {
        function m() {
          this.init = function() {
            var e = this,
              n = t(".js-save-for-later__delete-all")[0];
            n && (this.renderDeleteButton("delete"), o.one(n, "click", ".js-save-for-later__button", function(t) {
              t.preventDefault(), e.renderDeleteButton("confirm")
            }))
          }, this.renderDeleteButton = function(t) {
            s.read(function() {
              var o = n(e(".js-save-for-later__delete-all")[0]);
              s.write(function() {
                o.html(c(d, {
                  icon: u("crossIcon"),
                  state: t
                }))
              })
            })
          }
        }
        return m
      }.call(this, t("common/utils/$"), t("npm:qwery@3.4.2"), t("npm:bonzo@1.4.0"), t("npm:bean@1.0.15"), t("common/utils/_"), t("github:wilsonpage/fastdom@0.8.6"), t("common/utils/config"), t("common/utils/mediator"), t("common/utils/template"), t("common/modules/identity/api"), t("common/views/svgs"), t("common/views/save-for-later/delete-all-button.html!github:systemjs/plugin-text@0.0.2"))
    })
  }(), function() {
    function t() {
    }
    t.amd = {}, System.register("common/modules/accessibility/helpers", ["github:wilsonpage/fastdom@0.8.6", "common/modules/accessibility/main", "common/utils/$"], !1, function(t, e, n) {
      return function(t, e, n) {
        function o(o) {
          e.isOn("flashing-elements") ? o && o() : t.write(function() {
            n(".js-flashing-image").remove(), o && o()
          })
        }
        return {
          shouldHideFlashingElements: o
        }
      }.call(this, t("github:wilsonpage/fastdom@0.8.6"), t("common/modules/accessibility/main"), t("common/utils/$"))
    })
  }(), function() {
    function t() {
    }
    t.amd = {}, System.register("common/modules/experiments/affix", ["npm:bean@1.0.15", "npm:bonzo@1.4.0", "common/utils/_", "common/utils/mediator", "common/utils/request-animation-frame"], !1, function(t, e, n) {
      return function(t, e, n, o, i) {
        var s = function(i) {
          t.on(window, "click", this.checkPositionWithEventLoop.bind(this)), o.addListener("window:scroll", n.debounce(this.checkPositionWithEventLoop.bind(this), 10)), o.addListener("window:resize", n.debounce(this.calculateContainerPositioning.bind(this), 200)), this.affixed = null, this.$markerTop = e(i.topMarker), this.$markerBottom = e(i.bottomMarker), this.$container = e(i.containerElement), this.$element = e(i.element), this.$window = e(document.body), this.calculateContainerPositioning()
        };
        return s.CLASS = "affix", s.CLASSY_BOTTOM = "affix-bottom", s.prototype.calculateContainerPositioning = function() {
            this.$container.css("top", "0");
            var t = this.$markerTop.offset().top - this.$container.offset().top;
            this.$container.css("top", t + "px")
          }, s.prototype.checkPositionWithEventLoop = function() {
            i(this.checkPosition.bind(this))
          }, s.prototype.getPixels = function(t) {
            return "auto" !== t ? parseInt(t, 10) : 0
          }, s.prototype.checkPosition = function() {
            var t, n,
              o = this.$window.scrollTop() >= this.$markerTop.offset().top,
              i = this.$window.scrollTop() + this.$element.dim().height < this.$markerBottom.offset().top,
              r = this.$element.dim().height < e.viewport().height,
              a = i && o && r;
            this.affixed !== a && (this.affixed = a, i ? (this.$container.removeClass(s.CLASSY_BOTTOM), this.calculateContainerPositioning()) : (t = this.getPixels(this.$container.css("top")), n = this.$markerBottom.offset().top - this.$markerTop.offset().top - this.$element.dim().height + t, this.$container.css("top", n + "px"), this.$container.addClass(s.CLASSY_BOTTOM)), a ? this.$element.addClass(s.CLASS) : this.$element.removeClass(s.CLASS))
          }, s
      }.call(this, t("npm:bean@1.0.15"), t("npm:bonzo@1.4.0"), t("common/utils/_"), t("common/utils/mediator"), t("common/utils/request-animation-frame"))
    })
  }(), function() {
    function t() {
    }
    t.amd = {}, System.register("common/modules/ui/autoupdate", ["npm:bean@1.0.15", "npm:bonzo@1.4.0", "common/utils/_", "common/utils/$", "common/utils/ajax", "common/utils/config", "common/utils/detect", "common/utils/mediator", "common/modules/article/twitter", "common/modules/live/notification-bar"], !1, function(t, e, n) {
      return function(t, e, n, o, i, s, r, a, c, l) {
        function u(u) {
          var d = n.assign({
            activeClass: "is-active",
            btnClass: ".js-auto-update",
            manipulationType: "html",
            backoff: 1,
            backoffMax: 12e5
          }, u);this.unreadBlocks = 0, this.notification = "<", this.updateDelay = d.delay, this.template = '  <button class="u-button-reset live-toggler live-toggler--autoupdate live-toggler--on js-auto-update js-auto-update--on"          data-action="off" data-link-name="autoupdate off" title="Turn auto update off">    <span class="live-toggler__label">Auto update:</span>    <span class="u-h">is</span>    <span class="rounded-icon live-toggle__value">On</span>    <span class="u-h">(turn off)</span>  </button>  <button class="u-button-reset live-toggler live-toggler--autoupdate live-toggler--off js-auto-update js-auto-update--off"          data-action="on" data-link-name="autoupdate on" title="Turn auto update on">    <span class="live-toggler__label">Auto update:</span>    <span class="u-h">is</span>    <span class="rounded-icon live-toggle__value">Off</span>    <span class="u-h">(turn on)</span>  </button>', this.view = {
            render: function(t) {
              var i = d.attachTo,
                s = this.getManipulationType(),
                l = (new Date).toString(),
                u = e(i),
                m = o.create("<div>" + t.html + "</div>")[0],
                p = m.innerHTML;
              this.unreadBlocks += m.children.length, "prepend" === s ? (e(m.children).addClass("autoupdate--hidden"), p = n.toArray(m.children)) : "append" === s && (e(m.children).addClass("autoupdate--hidden"), p = n.toArray(m.children).reverse()), u[s](p), p.length && a.emit("modules:autoupdate:updates", p), u.attr("data-last-updated", l), c.enhanceTweets(), this.isUpdating && r.pageVisible() ? (this.notificationBar.setState("hidden"), this.view.revealNewElements.call(this)) : this.unreadBlocks > 0 && (this.notificationBar.notify(this.unreadBlocks), a.emit("modules:autoupdate:unread", this.unreadBlocks))
            },
            toggle: function(t) {
              var e = t.getAttribute("data-action");
              o(d.btnClass).removeClass(d.activeClass), o(".js-auto-update--" + e, t.parentNode).addClass(d.activeClass), this[e]()
            },
            destroy: function() {
              o(".update").remove(), a.emit("modules:autoupdate:destroyed")
            },
            revealNewElements: function() {
              var t = o(".autoupdate--hidden", d.attachTo);
              t.addClass("autoupdate--highlight").removeClass("autoupdate--hidden"), r.pageVisible() && (this.unreadBlocks = 0), a.emit("modules:autoupdate:unread", this.unreadBlocks), setTimeout(function() {
                t.removeClass("autoupdate--highlight")
              }, 5e3)
            }
          }, this.load = function() {
            var t = this,
              e = "function" == typeof d.path ? d.path() : d.path + ".json";
            return i({
              url: e,
              type: "json",
              crossOrigin: !0
            }).then(function(e) {
              e.refreshStatus === !1 ? (t.off(), t.view.destroy()) : t.view.render.call(t, e)
            })
          }, this.on = function() {
            this.isUpdating = !0, this.timeout && window.clearTimeout(this.timeout);
            var t = function() {
              this.load();
              var e = r.pageVisible() ? d.delay : this.updateDelay * d.backoff;
              this.updateDelay = Math.min(e, d.backoffMax), this.timeout = window.setTimeout(t, this.updateDelay)
            }.bind(this);
            t()
          }, this.off = function() {
            this.isUpdating = !1
          }, this.init = function() {
            if (!s.switches || s.switches.autoRefresh === !0) {
              var e = this;
              this.notificationBar = new l({
                attachTo: o(".js-update-notification")[0]
              }), o(d.attachTo).addClass("autoupdate--has-animation"), r.initPageVisibility(), a.on("modules:detect:pagevisibility:visible", function() {
                this.isUpdating && (this.on(), e.view.revealNewElements())
              }.bind(this)), a.on("modules:notificationbar:show", this.view.revealNewElements.bind(this)), o(".update").html(this.template).removeClass("u-h"), this.btns = o(d.btnClass), this.btns.each(function(n) {
                t.add(n, "click", function(t) {
                  t.preventDefault(), e.view.toggle.call(e, this)
                })
              }), this.view.toggle.call(this, this.btns[1])
            }
          }, this.setManipulationType = function(t) {
            d.manipulationType = t
          }, this.getManipulationType = function() {
            return d.manipulationType
          }
        }
        return u
      }.call(this, t("npm:bean@1.0.15"), t("npm:bonzo@1.4.0"), t("common/utils/_"), t("common/utils/$"), t("common/utils/ajax"), t("common/utils/config"), t("common/utils/detect"), t("common/utils/mediator"), t("common/modules/article/twitter"), t("common/modules/live/notification-bar"))
    })
  }(), function() {
    function t() {
    }
    t.amd = {}, System.register("common/modules/video/events", ["npm:bean@1.0.15", "npm:qwery@3.4.2", "github:getsentry/raven-js@1.1.18", "common/utils/$", "common/utils/_", "common/utils/config", "common/utils/detect", "common/utils/template", "common/modules/analytics/omnitureMedia", "common/modules/onward/history", "common/views/ui/video-ads-skip-overlay.html!github:systemjs/plugin-text@0.0.2"], !1, function(t, e, n) {
      return function(t, e, n, o, i, s, r, a, c, l, u) {
        function d(t) {
          return x ? "video" : t.guMediaType
        }
        function m(t) {
          return C && !l.isRevisit(s.page.pageId) && t.guAutoplay
        }
        function p(t, e) {
          return d(e) + ":" + t
        }
        function h(t, e, n) {
          var o = x ? "ophan/embed" : "ophan/ng";t && require([o], function(o) {
            var i = {};
            i[d(n)] = {
              id: t,
              eventType: e.type
            }, o.record(i)
          })
        }
        function f(t, e) {
          _.concat(S.map(function(t) {
            return "play:" + t
          })).forEach(function(n) {
            t.one(p(n, t), function(n) {
              h(e, n, t)
            })
          })
        }
        function g(t) {
          new c(t).init()
        }
        function v(t) {
          var e = {
            end: function() {
              t.trigger(p("preroll:end", t)), t.removeClass("vjs-ad-playing--vpaid"), y(t, !0)
            },
            start: function() {
              var n = t.duration();
              n ? t.trigger(p("preroll:play", t)) : t.one("durationchange", e.start)
            },
            vpaidStarted: function() {
              t.addClass("vjs-ad-playing--vpaid")
            },
            ready: function() {
              t.trigger(p("preroll:ready", t)), t.one("adstart", e.start), t.one("adend", e.end), t.one("Vpaid::AdStarted", e.vpaidStarted), m(t) && t.play()
            }
          };t.one("adsready", e.ready), t.one("adtimeout", function() {
            t.trigger("adscanceled"), y(t)
          })
        }
        function y(t) {
          var e = {
            end: function() {
              t.trigger(p("content:end", t))
            },
            play: function() {
              var n = t.duration();
              n ? t.trigger(p("content:play", t)) : t.one("durationchange", e.play)
            },
            timeupdate: function() {
              var e = Math.round(parseInt(t.currentTime() / t.duration() * 100, 10));
              S.reverse().some(function(n) {
                return e >= n ? (t.trigger(p("play:" + n, t)), !0) : !1
              })
            },
            ready: function() {
              t.trigger(p("content:ready", t)), t.one("play", e.play), t.on("timeupdate", i.throttle(e.timeupdate, 1e3)), t.one("ended", e.end), m(t) && t.play()
            }
          };e.ready()
        }
        function b(e) {
          e.on("playing", function() {
            t.fire(document.body, "videoPlaying")
          }), e.on("pause", function() {
            t.fire(document.body, "videoPause")
          }), e.on("ended", function() {
            t.fire(document.body, "videoEnded")
          })
        }
        function w(n) {
          var i,
            s = {
              update: function() {
                var r = this.ima.getAdsManager(),
                  a = r.getCurrentAd().getDuration() - r.getRemainingTime(),
                  c = parseInt((n - a).toFixed(), 10);
                c > 0 ? o(".js-skip-remaining-time", this.el()).text(c) : (window.clearInterval(i), o(".js-ads-skip", this.el()).html('<button class="js-ads-skip-button vjs-ads-skip__button" data-link-name="Skip video advert"><i class="i i-play-icon-grey skip-icon"></i><i class="i i-play-icon-gold skip-icon"></i>Skip advert</button>'), t.on(e(".js-ads-skip-button")[0], "click", s.skip.bind(this)))
              },
              skip: function() {
                o(".js-ads-skip", this.el()).hide(), this.trigger(p("preroll:skip", this)), this.ima.onAdComplete_(), this.ima.onContentResumeRequested_(), this.ima.getAdsManager().stop()
              },
              init: function() {
                var t = a(u, {
                  skipTimeout: n
                });
                o(this.el()).append(t), i = setInterval(s.update.bind(this), 250), this.one(p("content:play", this), function() {
                  o(".js-ads-skip", this.el()).hide(), window.clearInterval(i)
                })
              }
            };this.one(p("preroll:play", this), s.init.bind(this))
        }
        function k(t) {
          t && "message" in t && "code" in t && n.captureException(new Error(t.message), {
            tags: {
              feature: "player",
              vjsCode: t.code
            }
          })
        }
        function j(t) {
          var e = t.error();return null !== e ? (k(e), 4 === e.code) : !1
        }
        function T(t) {
          t.on("error", function() {
            k(t.error()), o(".vjs-big-play-button").hide()
          })
        }
        var C = r.isBreakpoint({
            min: "desktop"
          }),
          x = !!guardian.isEmbed,
          S = [25, 50, 75],
          _ = ["preroll:request", "preroll:ready", "preroll:play", "preroll:end", "content:ready", "content:play", "content:end"];
        return {
          constructEventName: p,
          bindContentEvents: y,
          bindPrerollEvents: v,
          bindGlobalEvents: b,
          initOphanTracking: f,
          initOmnitureTracking: g,
          adSkipCountdown: w,
          handleInitialMediaError: j,
          bindErrorHandler: T
        }
      }.call(this, t("npm:bean@1.0.15"), t("npm:qwery@3.4.2"), t("github:getsentry/raven-js@1.1.18"), t("common/utils/$"), t("common/utils/_"), t("common/utils/config"), t("common/utils/detect"), t("common/utils/template"), t("common/modules/analytics/omnitureMedia"), t("common/modules/onward/history"), t("common/views/ui/video-ads-skip-overlay.html!github:systemjs/plugin-text@0.0.2"))
    })
  }(), function() {
    function t() {
    }
    t.amd = {}, System.register("common/modules/identity/public-profile", ["npm:bean@1.0.15", "npm:bonzo@1.4.0", "common/utils/_", "common/utils/$", "common/utils/config", "common/utils/url", "common/modules/component", "common/modules/discussion/activity-stream"], !1, function(t, e, n) {
      return function(t, e, n, o, i, s, r, a) {
        function c(t) {
          var i,
            s = {
              userId: "data-user-id",
              streamType: "data-stream-type"
            };return o(".js-activity-stream").each(function(t) {
              (i = new a(n.mapValues(s, function(e) {
                return t.getAttribute(e)
              }))).fetch(t).then(function() {
                e(t).removeClass("activity-stream--loading")
              })
            }).addClass("activity-stream--loading"), t(i), i
        }
        function l(t) {
          o(".tabs__tab--selected").removeClass("tabs__tab--selected"), e(t).parent().addClass("tabs__tab--selected")
        }
        function u(e) {
          t.on(document.body, "click", ".js-activity-stream-change", function(t) {
            var n = t.currentTarget,
              o = n.getAttribute("data-stream-type");
            t.preventDefault(), l(n), e.change({
              page: 1,
              streamType: o
            }).then(function() {
              s.pushUrl({}, null, "/user/id/" + e.options.userId + ("discussions" !== o ? "/" + o : ""), !0)
            })
          })
        }
        function d(e) {
          t.on(document.body, "submit", ".js-activity-stream-search", function(t) {
            var n = t.currentTarget.elements.q.value;
            t.preventDefault(), l(o('a[data-stream-type="discussions"]')), e.change({
              streamType: "" !== n ? "search/" + encodeURIComponent(n) : "comments"
            })
          })
        }
        function m() {
          c(function(t) {
            u(t), d(t)
          })
        }
        return {
          init: m
        }
      }.call(this, t("npm:bean@1.0.15"), t("npm:bonzo@1.4.0"), t("common/utils/_"), t("common/utils/$"), t("common/utils/config"), t("common/utils/url"), t("common/modules/component"), t("common/modules/discussion/activity-stream"))
    })
  }(), function() {
    function t() {
    }
    t.amd = {}, System.register("common/modules/analytics/omniture", ["vendor/omniture", "common/utils/$", "common/utils/_", "common/utils/config", "common/utils/cookies", "common/utils/date-formats", "common/utils/detect", "common/utils/mediator", "common/utils/pad", "common/utils/storage", "common/modules/analytics/beacon", "common/modules/analytics/mvt-cookie", "common/modules/experiments/ab", "common/modules/onward/history", "common/modules/identity/api"], !1, function(t, e, n) {
      return function(t, e, n, o, i, s, r, a, c, l, u, d, m, p, h) {
        function f() {
          this.isEmbed = !!guardian.isEmbed, this.s = window.s, this.pageviewSent = !1, this.addHandlers()
        }
        var g = "s_ni",
          v = "gu.analytics.referrerVars";
        return f.prototype.addHandlers = function() {
            a.on("module:clickstream:interaction", this.trackLinkImmediate.bind(this)), a.on("module:clickstream:click", this.logTag.bind(this)), a.on("module:analytics:omniture:pageview:sent", function() {
              this.isEmbed || u.fire("/count/pva.gif")
            }.bind(this))
          }, f.prototype.logView = function() {
            this.s.t(), this.confirmPageView()
          }, f.prototype.generateTrackingImageString = function() {
            return "s_i_" + window.s_account.split(",").join("_")
          }, f.prototype.getChannel = function() {
            return "Network Front" === o.page.contentType ? "Network Front" : this.isEmbed ? "Embedded" : o.page.section || ""
          }, f.prototype.logTag = function(t) {
            var e, n;
            if (t.validTarget)
              if (t.sameHost && !t.samePage) {
                e = {
                  pageName: this.s.pageName,
                  tag: t.tag || "untracked",
                  time: (new Date).getTime()
                };try {
                  sessionStorage.setItem(g, e.tag)
                } catch (o) {} l.session.set(v, e)
              } else n = t.samePage ? !0 : t.target, this.trackLink(n, t.tag, {
                  customEventProperties: t.customEventProperties
                })
          }, f.prototype.populateEventProperties = function(e) {
            this.s.linkTrackVars = "channel,prop2,prop3,prop4,prop8,prop9,prop10,prop13,prop25,prop31,prop37,prop47,prop51,prop61,prop64,prop65,prop74,eVar7,eVar37,eVar38,eVar39,eVar50,events", this.s.linkTrackEvents = "event37", this.s.events = "event37", this.s.eVar37 = o.page.contentType ? o.page.contentType + ":" + e : e, this.s.eVar7 = "D=pageName", this.s.prop37 = "D=v37", /social/.test(e) && (t.linkTrackVars += ",eVar12", t.linkTrackEvents += ",event16", t.events += ",event16", t.eVar12 = e)
          }, f.prototype.trackLinkImmediate = function(t) {
            this.trackLink(!0, t)
          }, f.prototype.trackLink = function(t, e, o) {
            o = o || {}, this.populateEventProperties(e), n.assign(this.s, o.customEventProperties), this.s.tl(t, "o", e), n.forEach(o.customEventProperties, function(t, e) {
              delete this.s[e]
            })
          }, f.prototype.populatePageProperties = function() {
            var t,
              i = new Date,
              a = this.s.getTimeParting("n", "+0"),
              u = l.session.get(v),
              f = "frontend",
              y = m.makeOmnitureTag(document),
              b = d.getMvtFullId(),
              w = o.page.webPublicationDate;
            this.s.cookieDomainPeriods = "2", this.s.linkInternalFilters += ",localhost,gucode.co.uk,gucode.com,guardiannews.com,int.gnl,proxylocal.com,theguardian.com", this.s.trackingServer = "hits.theguardian.com", this.s.trackingServerSecure = "hits-secure.theguardian.com", this.s.ce = "UTF-8", this.s.pageName = o.page.analyticsName, this.s.prop1 = o.page.headline || "", this.s.eVar1 = i.getFullYear() + "/" + c(i.getMonth() + 1, 2) + "/" + c(i.getDate(), 2), h.getUserFromCookie() && (this.s.prop2 = "GUID:" + h.getUserFromCookie().id, this.s.eVar2 = "GUID:" + h.getUserFromCookie().id), this.s.prop3 = o.page.publication || "", this.s.channel = this.getChannel(), this.s.prop4 = o.page.keywords || "", this.s.prop6 = o.page.author || "", this.s.prop7 = w ? s.utcDateString(w) : "", this.s.prop8 = o.page.pageCode || "", this.s.prop9 = o.page.contentType || "", this.s.prop10 = o.page.tones || "", this.s.prop13 = o.page.series || "", this.s.eVar18 = r.getBreakpoint(), this.s.eVar21 = (window.innerWidth || document.documentElement.clientWidth) + "x" + (window.innerHeight || document.documentElement.clientHeight), this.s.eVar32 = r.getOrientation(), this.s.prop20 = a[2] + ":" + a[1], this.s.eVar20 = "D=c20", this.s.prop25 = o.page.blogs || "", this.s.prop60 = r.isFireFoxOSApp() ? "firefoxosapp" : null, this.s.prop19 = f, this.s.prop31 = h.getUserFromCookie() ? "registered user" : "guest user", this.s.eVar31 = h.getUserFromCookie() ? "registered user" : "guest user", this.s.prop40 = r.adblockInUse, this.s.prop47 = o.page.edition || "", this.s.prop51 = o.page.allowUserGeneratedContent ? "witness-contribution-cta-shown" : null, this.s.eVar51 = y, this.s.list1 = y, this.s.list2 = n.uniq(e("[data-component]").map(function(t) {
              return e(t).attr("data-component")
            })).toString(), this.s.list3 = n.map(p.getPopularFiltered(), function(t) {
              return t[1]
            }).join(","), this.s.eVar51 && (this.s.events = this.s.apl(this.s.events, "event58", ",")), b && (this.s.eVar60 = b), o.page.commentable && (this.s.events = this.s.apl(this.s.events, "event46", ",")), "identity" === o.page.section && (this.s.prop11 = "Users",
            this.s.prop9 = "userid", this.s.eVar27 = o.page.omnitureErrorMessage || "", this.s.eVar42 = o.page.returnUrl || "", this.s.hier2 = "GU/Users/Registration", this.s.events = this.s.apl(this.s.events, o.page.omnitureEvent, ",")), this.s.prop56 = "Javascript", o.page.productionOffice && (this.s.prop64 = o.page.productionOffice), this.s.prop62 = "Guardian JS-1.4.1 20140914", this.s.prop63 = r.getPageSpeed(), this.s.prop65 = o.page.headline || "", this.s.prop67 = "nextgen-served", w ? this.s.prop30 = "content" : this.s.prop30 = "non-content", "" !== this.s.getParamValue("INTCMP") && (this.s.eVar50 = this.s.getParamValue("INTCMP")), this.s.eVar50 = this.s.getValOnce(this.s.eVar50, "s_intcampaign", 0), this.s.eVar58 = navigator.platform || "unknown", o.page.inBodyInternalLinkCount && (this.s.prop58 = o.page.inBodyInternalLinkCount), o.page.inBodyExternalLinkCount && (this.s.prop69 = o.page.inBodyExternalLinkCount), u && (t = (new Date).getTime(), t - u.time < 6e4 && (this.s.eVar24 = u.pageName, this.s.eVar37 = u.tag, this.s.events = "event37", this.s.eVar7 = u.pageName, this.s.prop37 = u.tag), l.session.remove(g), l.session.remove(v)), this.s.prop73 = r.isFacebookApp() ? "facebook app" : r.isTwitterApp() ? "twitter app" : null, this.s.prop75 = o.page.wordCount || 0, this.s.eVar75 = o.page.wordCount || 0, this.isEmbed && (this.s.eVar11 = this.s.prop11 = "Embedded", window.parent && window.parent !== window && (this.s.referrer = document.referrer))
          }, f.prototype.go = function() {
            this.populatePageProperties(), this.logView(), a.emit("analytics:ready")
          }, f.prototype.confirmPageView = function() {
            var t = setInterval(function() {
              var e = window[this.generateTrackingImageString()];
              "undefined" != typeof e && (e.complete === !0 || e.width + e.height > 0) && (clearInterval(t), this.pageviewSent = !0, a.emit("module:analytics:omniture:pageview:sent"))
            }.bind(this), 250);
            setTimeout(function() {
              clearInterval(t)
            }, 1e4)
          }, new f
      }.call(this, t("vendor/omniture"), t("common/utils/$"), t("common/utils/_"), t("common/utils/config"), t("common/utils/cookies"), t("common/utils/date-formats"), t("common/utils/detect"), t("common/utils/mediator"), t("common/utils/pad"), t("common/utils/storage"), t("common/modules/analytics/beacon"), t("common/modules/analytics/mvt-cookie"), t("common/modules/experiments/ab"), t("common/modules/onward/history"), t("common/modules/identity/api"))
    })
  }(), function() {
    function t() {
    }
    t.amd = {}, System.register("common/modules/discussion/loader", ["npm:bean@1.0.15", "npm:bonzo@1.4.0", "npm:qwery@3.4.2", "github:getsentry/raven-js@1.1.18", "common/utils/$", "common/utils/_", "common/utils/ajax-promise", "common/utils/config", "common/utils/detect", "common/utils/mediator", "common/utils/scroller", "common/modules/analytics/discussion", "common/modules/analytics/register", "common/modules/component", "common/modules/discussion/api", "common/modules/discussion/comment-box", "common/modules/discussion/comments", "common/modules/identity/api", "common/modules/user-prefs"], !1, function(t, e, n) {
      return function(t, e, n, o, i, s, r, a, c, l, u, d, m, p, h, f, g, v, y) {
        var b = function() {
          m.begin("discussion")
        };
        return p.define(b), b.prototype.classes = {}, b.prototype.componentClass = "discussion", b.prototype.comments = null, b.prototype.user = null, b.prototype.initTopComments = function() {
            return this.on("click", ".js-jump-to-comment", function(t) {
                t.preventDefault(), u.scrollToElement(n(".js-discussion-toolbar"), 100);
                var o = e(t.currentTarget).data("comment-id");
                this.loadComments({
                  comment: o
                })
              }), r({
                url: "/discussion/top-comments/" + this.getDiscussionId() + ".json",
                type: "json",
                method: "get",
                crossOrigin: !0
              }).then(function(t) {
                this.$topCommentsContainer.html(t.html), this.topCommentCount = n(".d-top-comment", this.$topCommentsContainer[0]).length, 0 !== this.topCommentCount && this.setState("has-top-comments")
              }.bind(this))
          }, b.prototype.initMainComments = function() {
            var t = this.getCommentIdFromHash();
            t && l.emit("discussion:seen:comment-permalink");
            var r = y.get("discussion.order") || (this.getDiscussionClosed() ? "oldest" : "newest"),
              u = y.get("discussion.threading") || "collapsed",
              d = c.isBreakpoint({
                min: "tablet"
              }) ? 25 : 10;
            this.comments = new g({
              discussionId: this.getDiscussionId(),
              order: r,
              pagesize: d,
              threading: u
            }), this.comments.attachTo(n(".js-discussion-main-comments")[0]), this.comments.on("untruncate-thread", this.removeTruncation.bind(this)), this.on("click", ".js-discussion-show-button, .d-show-more-replies__button, .js-discussion-author-link, .js-discussion-change-page", this.removeTruncation.bind(this)), this.comments.on("rendered", function(t) {
              var o = e.create(t),
                s = n(".js-discussion-toolbar", this.elem)[0],
                r = i(".js-discussion-pagination", s).empty();
              this.comments.isAllPageSizeActive() || r.html(o)
            }.bind(this)), this.setState("loading"), this.on("user:loaded", function() {
              if (this.initState(), this.renderCommentBar(), this.user) {
                this.comments.addUser(this.user);
                var e = y.get("discussion.pagesize"),
                  n = d;
                s.isNumber(e) ? n = e : "All" === e && (n = a.switches.discussionAllPageSize ? "All" : 100), this.initPageSizeDropdown(n), a.switches.discussionPageSize && c.isBreakpoint({
                  min: "tablet"
                }) && (this.comments.options.pagesize = n), this.user.isStaff && (this.removeState("not-staff"), this.setState("is-staff"))
              }
              var i = !t && "#comments" !== window.location.hash;
              this.loadComments({
                comment: t,
                shouldTruncate: i
              })["catch"](function(t) {
                var e = "Comments failed to load: ",
                  n = t.request;
                e += "Request is aborted: timeout" === t.message ? "XHR timeout" : t.message ? t.message : "status" in n ? n.status : "", o.captureMessage(e, {
                  tags: {
                    contentType: "comments",
                    discussionId: this.getDiscussionId(),
                    status: "status" in n ? n.status : "",
                    readyState: "readyState" in n ? n.readyState : "",
                    response: "response" in n ? n.response : "",
                    statusText: "status" in n ? n.statusText : ""
                  }
                })
              }.bind(this))
            }), this.getUser()
          }, b.prototype.initPageSizeDropdown = function(o) {
            var s = i(".js-comment-pagesize");
            s.text(o), this.on("click", ".js-comment-pagesize-dropdown .popup__action", function(o) {
              t.fire(n(".js-comment-pagesize-dropdown [data-toggle]")[0], "click");
              var i = e(o.currentTarget).data("pagesize");
              this.comments.options.pagesize = i, s.text(i), y.set("discussion.pagesize", i), this.loadComments({
                page: 1
              })
            })
          }, b.prototype.initToolbar = function() {
            var o = i(".js-comment-order");
            o.text(this.comments.options.order), this.on("click", ".js-comment-order-dropdown .popup__action", function(i) {
              t.fire(n(".js-comment-order-dropdown [data-toggle]")[0], "click"), this.comments.options.order = e(i.currentTarget).data("order"), o.text(this.comments.options.order), y.set("discussion.order", this.comments.options.order), this.loadComments({
                page: 1
              })
            });
            var s = i(".js-comment-threading");
            s.text(this.comments.options.threading), this.on("click", ".js-comment-threading-dropdown .popup__action", function(o) {
              t.fire(n(".js-comment-threading-dropdown [data-toggle]")[0], "click"), this.comments.options.threading = e(o.currentTarget).data("threading"), s.text(this.comments.options.threading), y.set("discussion.threading", this.comments.options.threading), this.loadComments()
            })
          }, b.prototype.isOpenForRecommendations = function() {
            return 0 !== n(".d-discussion--recommendations-open", this.elem).length
          }, b.prototype.initRecommend = function() {
            this.on("click", ".js-recommend-comment", function(t) {
              if (this.user && this.isOpenForRecommendations()) {
                var n = t.currentTarget,
                  o = e(n);
                o.removeClass("js-recommend-comment");
                var i = n.getAttribute("data-comment-id"),
                  s = h.recommendComment(i);
                return o.addClass("d-comment__recommend--clicked"), s.then(o.addClass.bind(o, "d-comment__recommend--recommended"))
              }
            })
          }, b.prototype.ready = function() {
            this.$topCommentsContainer = i(".js-discussion-top-comments"), this.initTopComments(), this.initMainComments(), this.initToolbar(), this.renderCommentCount(), this.initPagination(), this.initRecommend(), d.init(), t.on(window, "hashchange", function() {
              var t = this.getCommentIdFromHash();
              t && this.gotoComment(t)
            }.bind(this)), "#comments" === window.location.hash && l.emit("discussion:seen:comments-anchor"), l.on("discussion:commentbox:post:success", this.removeState.bind(this, "empty")), l.on("module:clickstream:click", function(t) {
              "hash" in t.target && "#comments" === t.target.hash && this.removeTruncation()
            }.bind(this)), m.end("discussion")
          }, b.prototype.getUser = function() {
            v.getUserFromCookie() ? h.getUser().then(function(t) {
              this.user = t.userProfile, this.emit("user:loaded")
            }.bind(this)) : this.emit("user:loaded")
          }, b.prototype.isCommentable = function() {
            var t = this.user && this.user.privateFields && this.user.privateFields.canPostComment;
            return t && !this.comments.isReadOnly() && !this.getDiscussionClosed()
          }, b.prototype.initState = function() {
            this.getDiscussionClosed() ? this.setState("closed") : this.comments.isReadOnly() ? this.setState("readonly") : v.getUserFromCookie() && this.user && this.user.privateFields && !this.user.privateFields.canPostComment ? this.setState("banned") : this.setState("open")
          }, b.prototype.renderCommentBar = function() {
            this.isCommentable() && (this.renderCommentBox(n(".js-discussion-comment-box--top")[0]), this.renderCommentBox(n(".js-discussion-comment-box--bottom")[0]))
          }, b.prototype.commentPosted = function() {
            this.removeState("truncated"), this.comments.addComment.apply(this.comments, arguments)
          }, b.prototype.renderCommentBox = function(t) {
            return new f({
              discussionId: this.getDiscussionId(),
              premod: this.user.privateFields.isPremoderated
            }).render(t).on("post:success", this.commentPosted.bind(this))
          }, b.prototype.getDiscussionId = function() {
            return this.elem.getAttribute("data-discussion-key")
          }, b.prototype.getDiscussionClosed = function() {
            return "true" === this.elem.getAttribute("data-discussion-closed")
          }, b.prototype.renderCommentCount = function() {
            r({
              url: "/discussion/comment-counts.json?shortUrls=" + this.getDiscussionId(),
              type: "json",
              method: "get",
              crossOrigin: !0,
              success: function(t) {
                if (t && t.counts && t.counts.length) {
                  var o = t.counts[0].count;
                  if (o > 0) {
                    e(n(".js-show-discussion, .js-show-discussion a")).attr("href", "#comments");
                    var s = 1 === o ? "comment" : "comments",
                      r = '<a href="#comments" class="js-show-discussion commentcount tone-colour" data-link-name="Comment count">  <i class="i"></i>' + o + '  <span class="commentcount__label">' + s + "</span></a>";
                    i(".js-comment-count").html(r), i(".js-discussion-comment-count").text("(" + o + ")")
                  } else this.setState("empty")
                }
              }.bind(this)
            })
          }, b.prototype.getCommentIdFromHash = function() {
            var t = /#comment-(\d+)/;
            return t.exec(window.location.hash) ? parseInt(t.exec(window.location.hash)[1], 10) : null
          }, b.prototype.initPagination = function() {
            this.on("click", ".js-discussion-change-page", function(t) {
              t.preventDefault();
              var e = parseInt(t.currentTarget.getAttribute("data-page"), 10);
              this.setState("loading"), this.gotoPage(e)
            })
          }, b.prototype.gotoComment = function(t) {
            var e = i("#comment-" + t, this.elem);
            return e.length > 0 ? void window.location.replace("#comment-" + t) : void this.loadComments({
              comment: t
            }).then(function() {
              window.location.replace("#comment-" + t)
            })
          }, b.prototype.gotoPage = function(t) {
            u.scrollToElement(n(".js-discussion-toolbar"), 100), this.comments.relativeDates(), this.loadComments({
              page: t
            })
          }, b.prototype.loadComments = function(t) {
            return this.setState("loading"), t && t.shouldTruncate && this.comments.isAllPageSizeActive() && (t.pageSize = 10), this.comments.fetchComments(t).then(function() {
                this.removeState("loading"), t && t.shouldTruncate ? this.setState("truncated") : this.removeState("truncated"), this.comments.shouldShowPageSizeMessage() ? this.setState("pagesize-msg-show") : this.removeState("pagesize-msg-show")
              }.bind(this))
          }, b.prototype.removeTruncation = function() {
            this.comments.isAllPageSizeActive() ? this.loadComments() : this.removeState("truncated")
          }, b
      }.call(this, t("npm:bean@1.0.15"), t("npm:bonzo@1.4.0"), t("npm:qwery@3.4.2"), t("github:getsentry/raven-js@1.1.18"), t("common/utils/$"), t("common/utils/_"), t("common/utils/ajax-promise"), t("common/utils/config"), t("common/utils/detect"), t("common/utils/mediator"), t("common/utils/scroller"), t("common/modules/analytics/discussion"), t("common/modules/analytics/register"), t("common/modules/component"), t("common/modules/discussion/api"), t("common/modules/discussion/comment-box"), t("common/modules/discussion/comments"), t("common/modules/identity/api"), t("common/modules/user-prefs"))
    })
  }(), function() {
    function t() {
    }
    t.amd = {}, System.register("bootstraps/identity", ["common/utils/$", "npm:qwery@3.4.2", "common/modules/identity/forms", "common/modules/identity/formstack", "common/modules/identity/formstack-iframe", "common/modules/identity/formstack-iframe-embed", "common/modules/identity/password-strength", "common/modules/identity/validation-email", "common/modules/identity/api", "common/modules/identity/account-profile", "common/modules/identity/saved-for-later", "common/modules/commercial/user-ad-targeting", "common/modules/discussion/user-avatars", "common/utils/mediator", "common/modules/ui/tabs"], !1, function(t, e, n) {
      return function(t, e, n, o, i, s, r, a, c, l, u, d, m, p, h) {
        var f = {
            idInit: function(t) {
              c.init(t), c.isUserLoggedIn() && (document.documentElement.className = document.documentElement.className.replace(/\bid--signed-out\b/, "id--signed-in"))
            },
            initFormstack: function() {
              p.on("page:identity:ready", function(e) {
                var n = "data-formstack-id";
                t("[" + n + "]").each(function(t) {
                  var i = t.getAttribute(n),
                    r = t.className.match(/\bformstack-embed\b/);
                  r ? new s(t, i, e).init() : new o(t, i, e).init()
                }), t(".js-formstack-iframe").each(function(t) {
                  new i(t, e).init()
                })
              })
            },
            forgottenEmail: function() {
              p.on("page:identity:ready", function(t) {
                n.forgottenEmail(t)
              })
            },
            forgottenPassword: function() {
              p.on("page:identity:ready", function(t) {
                n.forgottenPassword(t)
              })
            },
            passwordStrength: function() {
              p.on("page:identity:ready", function(e) {
                t(".js-password-strength").each(function(t) {
                  new r(t, e).init()
                })
              })
            },
            passwordToggle: function() {
              p.on("page:identity:ready", function(t) {
                n.passwordToggle(t)
              })
            },
            userAdTargeting: function() {
              p.on("page:identity:ready", function() {
                d.requestUserSegmentsFromId()
              })
            },
            userAvatars: function() {
              p.on("page:identity:ready", function() {
                m.init()
              })
            },
            validationEmail: function() {
              p.on("page:identity:ready", function() {
                a.init()
              })
            },
            tabs: function() {
              var t = new h;
              p.on("page:identity:ready", function() {
                t.init()
              })
            },
            accountProfile: function() {
              var t = new l;
              p.on("page:identity:ready", function() {
                t.init()
              })
            },
            savedForLater: function() {
              var t = new u;
              p.on("page:identity:ready", function() {
                t.init()
              })
            }
          },
          g = function(t) {
            f.idInit(t), f.initFormstack(), f.forgottenEmail(), f.forgottenPassword(), f.passwordStrength(), f.passwordToggle(), f.userAdTargeting(), f.userAvatars(), f.validationEmail(), f.tabs(), f.accountProfile(), f.savedForLater(), p.emit("page:identity:ready", t)
          };
        return {
          init: g
        }
      }.call(this, t("common/utils/$"), t("npm:qwery@3.4.2"), t("common/modules/identity/forms"), t("common/modules/identity/formstack"), t("common/modules/identity/formstack-iframe"), t("common/modules/identity/formstack-iframe-embed"), t("common/modules/identity/password-strength"), t("common/modules/identity/validation-email"), t("common/modules/identity/api"), t("common/modules/identity/account-profile"), t("common/modules/identity/saved-for-later"), t("common/modules/commercial/user-ad-targeting"), t("common/modules/discussion/user-avatars"), t("common/utils/mediator"), t("common/modules/ui/tabs"))
    })
  }(), function() {
    function t() {
    }
    t.amd = {}, System.register("bootstraps/liveblog", ["npm:bean@1.0.15", "npm:bonzo@1.4.0", "npm:qwery@3.4.2", "common/utils/_", "common/utils/$", "common/utils/config", "common/utils/detect", "common/utils/mediator", "common/utils/scroller", "common/utils/template", "common/utils/url", "common/modules/accessibility/helpers", "common/modules/article/rich-links", "common/modules/commercial/liveblog-adverts", "common/modules/experiments/affix", "common/modules/live/filter", "common/modules/ui/autoupdate", "common/modules/ui/dropdowns", "common/modules/ui/notification-counter", "common/modules/ui/relativedates", "bootstraps/article", "common/utils/robust"], !1, function(t, e, n) {
      return function(t, e, n, o, i, s, r, a, c, l, u, d, m, p, h, f, g, v, y, b, w, k) {
        "use strict";
        function j() {
          var t = n(".is-key-event").slice(0, 7),
            o = n(".is-summary")[0];return i(".js-timeline-event").removeClass("js-timeline-event"), o && (e(o).addClass("js-timeline-event"), 7 === t.length && t.pop()), e(t).addClass("js-timeline-event"), n(".js-timeline-event")
        }
        function T() {
          function o() {
            i("." + d).removeClass(d)
          }
          function s() {
            t.off(r), r = a.once("window:scroll", function() {
              o()
            })
          }
          var r,
            l = n(".timeline")[0],
            d = "live-blog__key-event--selected";t.on(document.body, "click", "a", function(t) {
            var e = t.currentTarget.href.match(/.*(#.*)/);
            e && i(e[1]).hasClass("truncated-block") && a.emit("module:liveblog:showkeyevents", !0)
          }), l && t.on(l, "click", ".timeline__link", function(l) {
            a.emit("module:liveblog:showkeyevents", !0), i(".dropdown--live-feed").addClass("dropdown--active");
            var m = e(l.currentTarget),
              p = m.attr("data-event-id"),
              h = i(".timeline__title", m).text(),
              f = n("#" + p),
              g = e(f).offset();
            c.scrollTo(g.top - 12, 500, "easeOutQuint"), window.setTimeout(s, 550), t.off(r), o(), m.addClass(d), u.pushUrl({
              blockId: p
            }, h, window.location.pathname + "#" + p, !0), l.stop()
          })
        }
        function C(t) {
          var e = '<li class="timeline__item" data-event-id="<%=id%>"><a class="timeline__link" href="#<%=id%>" data-event-id="<%=id%>"><span class="timeline__date"><%=time%></span><span class="timeline__title u-underline"><%=title%></span></a></li>',
            n = {
              id: t.getAttribute("id"),
              title: i(".block-title", t).text(),
              time: i(".block-time__link", t).html()
            };return l(e, n)
        }
        function x(t) {
          function e(t, o) {
            return t.length ? (o += C(t[0]), n = t.slice(1), e(n, o)) : o
          }
          var n;return e(t, "")
        }
        function S() {
          var t,
            e = n(".js-liveblog-body .block"),
            o = null;return o = "append" === D.getManipulationType() ? e.pop() : e.shift(), t = o ? o.id : "block-0", window.location.pathname + ".json?lastUpdate=" + t
        }
        function _() {
          k("lb-a11y", E.accessibility), k("lb-adverts", E.initAdverts), k("lb-filter", E.createFilter), k("lb-timeline", E.createTimeline), k("lb-autoupdate", E.createAutoUpdate), k("lb-timestamp", E.keepTimestampsCurrent), k("lb-updates", E.handleUpdates), k("lb-richlinks", m.upgradeRichLinks), k("lb-article", w.modules.initOpenCta), k("lb-fence", w.modules.initFence), k("lb-twitter", w.modules.initTruncateAndTwitter), k("lb-sharing", w.modules.initSelectionSharing), k("lb-ready", function() {
            a.emit("page:liveblog:ready")
          })
        }
        var E,
          A = null,
          D = null;
        return E = {
            initAdverts: function() {
              p.init()
            },
            createFilter: function() {
              new f(i(".js-blog-blocks")[0]).ready(), (new y).init()
            },
            createTimeline: function() {
              var t, e, o,
                a = j();
              a.length > 0 && (t = x(a), i(".js-live-blog__timeline").empty().append(t), e = i(".js-live-blog__timeline-container .dropdown"), e.addClass("dropdown--active"), v.updateAria(e), r.isBreakpoint({
                min: "desktop"
              }) && s.page.keywordIds.indexOf("football/football") < 0 && (o = n(".js-top-marker")[0], A = new h({
                element: n(".js-live-blog__timeline-container")[0],
                topMarker: o,
                bottomMarker: n(".js-bottom-marker")[0],
                containerElement: n(".js-live-blog__key-events")[0]
              })), T())
            },
            handleUpdates: function() {
              a.on("modules:autoupdate:updates", function() {
                E.createTimeline()
              })
            },
            createAutoUpdate: function() {
              if (s.page.isLive) {
                var t = r.isBreakpoint({
                  min: "desktop"
                }) ? 5e3 : 6e4;
                D = new g({
                  path: S,
                  delay: t,
                  backoff: 2,
                  backoffMax: 12e5,
                  attachTo: i(".js-liveblog-body")[0],
                  switches: s.switches,
                  manipulationType: "prepend"
                }), D.init()
              }
              a.on("module:filter:toggle", function(t) {
                D && (t ? D.setManipulationType("append") : D.setManipulationType("prepend"))
              })
            },
            keepTimestampsCurrent: function() {
              var t = b;
              window.setInterval(function() {
                t.init()
              }, 6e4)
            },
            accessibility: function() {
              d.shouldHideFlashingElements()
            }
          }, {
            init: _
        }
      }.call(this, t("npm:bean@1.0.15"), t("npm:bonzo@1.4.0"), t("npm:qwery@3.4.2"), t("common/utils/_"), t("common/utils/$"), t("common/utils/config"), t("common/utils/detect"), t("common/utils/mediator"), t("common/utils/scroller"), t("common/utils/template"), t("common/utils/url"), t("common/modules/accessibility/helpers"), t("common/modules/article/rich-links"), t("common/modules/commercial/liveblog-adverts"), t("common/modules/experiments/affix"), t("common/modules/live/filter"), t("common/modules/ui/autoupdate"), t("common/modules/ui/dropdowns"), t("common/modules/ui/notification-counter"), t("common/modules/ui/relativedates"), t("bootstraps/article"), t("common/utils/robust"))
    })
  }(), function() {
    function t() {
    }
    t.amd = {}, System.register("bootstraps/media", ["npm:bean@1.0.15", "npm:bonzo@1.4.0", "github:wilsonpage/fastdom@0.8.6", "github:getsentry/raven-js@1.1.18", "common/utils/$", "common/utils/_", "common/utils/config", "common/utils/defer-to-analytics", "common/utils/detect", "common/utils/mediator", "common/utils/url", "common/modules/analytics/beacon", "common/modules/commercial/build-page-targeting", "common/modules/component", "common/modules/video/events", "common/modules/video/fullscreener", "common/modules/video/supportedBrowsers", "common/modules/video/tech-order", "common/views/ui/loading.html!github:systemjs/plugin-text@0.0.2"], !1, function(t, e, n) {
      return function(t, e, n, o, i, s, r, a, c, l, u, d, m, p, h, f, g, v, y) {
        function b() {
          var t = {
            ad_rule: 1,
            correlator: (new Date).getTime(),
            cust_params: encodeURIComponent(u.constructQuery(m())),
            env: "vp",
            gdfp_req: 1,
            impl: "s",
            iu: r.page.adUnit,
            output: "xml_vast2",
            scp: encodeURIComponent("slot=video"),
            sz: "400x300",
            unviewed_position_start: 1
          };return "http://" + r.page.dfpHost + "/gampad/ads?" + u.constructQuery(t)
        }
        function w(t) {
          t.loadingSpinner.contentEl().innerHTML = y
        }
        function k(t) {
          i(".vjs-tech", t.el()).attr("aria-hidden", !0), i(".vjs-big-play-button", t.el()).attr("aria-hidden", !0), i(".vjs-current-time", t.el()).attr("aria-hidden", !0), i(".vjs-time-divider", t.el()).attr("aria-hidden", !0), i(".vjs-duration", t.el()).attr("aria-hidden", !0), i(".vjs-embed-button", t.el()).attr("aria-hidden", !0), i(".vjs-play-control", t.el()).attr("aria-label", "video play"), i(".vjs-mute-control", t.el()).attr("aria-label", "video mute"), i(".vjs-fullscreen-control", t.el()).attr("aria-label", "video fullscreen")
        }
        function j(t, n) {
          var o = videojs(t, n),
            s = i(t),
            r = parseInt(s.attr("data-duration"), 10);return isNaN(r) || (o.duration(r), o.trigger("timeupdate")), o.guAutoplay = "true" === i(t).attr("data-auto-play"), o.height(e(o.el()).parent().dim().height), o.width(e(o.el()).parent().dim().width), h.handleInitialMediaError(o) && (o.dispose(), n.techOrder = v(t).reverse(), o = videojs(t, n)), o
        }
        function T(t) {
          return t.target.firstChild && t.target.firstChild.id && t.target.firstChild.id.indexOf("flash_api") > 0
        }
        function C(o) {
          n.read(function() {
            i(".js-video-play-button", o).each(function(o) {
              var s = e(o);
              t.on(o, "click", function() {
                var t, r, a;
                a = e(o).parent().parent(), t = i(".js-video-placeholder", a), r = i(".js-video-player", a), n.write(function() {
                  t.removeClass("media__placeholder--active").addClass("media__placeholder--hidden"), r.removeClass("media__container--hidden").addClass("media__container--active"), s.removeClass("media__placeholder--active").addClass("media__placeholder--hidden")
                }), S(i("video", r).get(0), !0)
              }), n.write(function() {
                s.removeClass("media__placeholder--hidden").addClass("media__placeholder--active")
              })
            })
          })
        }
        function x() {
          r.page.videoJsFlashSwf && (videojs.options.flash.swf = r.page.videoJsFlashSwf), videojs.plugin("adSkipCountdown", h.adSkipCountdown), videojs.plugin("fullscreener", f), n.read(function() {
            i(".js-gu-media--enhance").each(function(t) {
              S(t, !1)
            })
          }), C(document.body), l.on("modules:related:loaded", C), l.on("page:media:moreinloaded", C)
        }
        function S(t, n) {
          var i, l,
            u = t.tagName.toLowerCase(),
            m = e(t).addClass("vjs vjs-tech-" + videojs.options.techOrder[0]),
            p = m.attr("data-media-id"),
            f = "true" === m.attr("data-block-video-ads"),
            y = "true" === m.attr("data-show-end-slate"),
            C = m.attr("data-end-slate"),
            x = m.attr("data-embed-path"),
            S = v(t);r.page.videoJsVpaidSwf && r.switches.vpaidAdverts && (S = ["vpaid"].concat(S), videojs.options.vpaid = {
            swf: r.page.videoJsVpaidSwf
          }), i = j(t, {
            techOrder: S,
            controls: !0,
            autoplay: n,
            preload: "auto",
            plugins: {
              embed: {
                embeddable: !r.page.isFront && r.switches.externalVideoEmbeds && ("Video" === r.page.contentType || "true" === m.attr("data-embeddable")),
                location: r.page.externalEmbedHost + "/embed/video/" + (x ? x : r.page.pageId)
              }
            }
          }), h.bindErrorHandler(i), i.guMediaType = u, i.ready(function() {
            var t;
            w(i), h.bindGlobalEvents(i), k(i), g(i), i.one("playing", function(t) {
              T(t) ? d.counts("video-tech-flash") : d.counts("video-tech-html5")
            }), t = i.volume(), t && (i.volume(0), i.volume(t)), i.persistvolume({
              namespace: "gu.vjs"
            }), a(function() {
              h.initOmnitureTracking(i), h.initOphanTracking(i, p), "video" === u ? (i.fullscreener(), !r.switches.videoAdverts || f || r.page.isPreview ? h.bindContentEvents(i) : o.wrap({
                tags: {
                  feature: "media"
                }
              }, function() {
                h.bindPrerollEvents(i), i.adSkipCountdown(15), require(["js!http://imasdk.googleapis.com/js/sdkloader/ima3.js"], function() {
                  i.ima({
                    id: p,
                    adTagUrl: b()
                  }), i.trigger(h.constructEventName("preroll:request", i)), i.ima.requestAds()
                })
              })(), y && c.isBreakpoint({
                min: "desktop"
              }) && _(i, C)) : (i.playlist({
                mediaType: "audio",
                continuous: !1
              }), h.bindContentEvents(i))
            })
          }), l = s.debounce(function() {
            i.removeClass("vjs-mousemoved")
          }, 500), i.on("mousemove", function() {
            i.addClass("vjs-mousemoved"), l()
          })
        }
        function _(t, n) {
          var o = new p,
            i = "vjs-has-ended";o.endpoint = n, o.fetch(t.el(), "html"), t.one(h.constructEventName("content:play", t), function() {
            t.on("ended", function() {
              e(t.el()).addClass(i)
            })
          }), t.on("playing", function() {
            e(t.el()).removeClass(i)
          })
        }
        function E() {
          if (r.isMedia && r.page.showRelatedContent) {
            var t = r.page.contentType.toLowerCase(),
              e = new p,
              n = i(".js-onward")[0],
              o = "/" + t + "/section/" + r.page.section;
            "seriesId" in r.page && (o += "/" + r.page.seriesId), o += ".json?shortUrl=" + r.page.shortUrl, "video" === t && (o += "&exclude-tag=guardian-professional/guardian-professional"), e.endpoint = o, e.fetch(n).then(function() {
              l.emit("page:media:moreinloaded", n), l.emit("page:new-content", n)
            })
          }
        }
        function A() {
          if (r.isMedia) {
            var t = r.page.contentType.toLowerCase(),
              e = new p,
              n = i("video" === t ? ".js-video-components-container" : ".js-media-popular")[0],
              o = "/" + (r.page.isPodcast ? "podcast" : t) + "/most-viewed.json";
            e.manipulationType = "video" === t ? "append" : "html", e.endpoint = o, e.fetch(n, "html").then(function() {
              l.emit("page:new-content")
            })
          }
        }
        function D() {
          r.switches.enhancedMediaPlayer && require(["bootstraps/video-player"], o.wrap({
            tags: {
              feature: "media"
            }
          }, x)), E(), A()
        }
        return {
          init: D
        }
      }.call(this, t("npm:bean@1.0.15"), t("npm:bonzo@1.4.0"), t("github:wilsonpage/fastdom@0.8.6"), t("github:getsentry/raven-js@1.1.18"), t("common/utils/$"), t("common/utils/_"), t("common/utils/config"), t("common/utils/defer-to-analytics"), t("common/utils/detect"), t("common/utils/mediator"), t("common/utils/url"), t("common/modules/analytics/beacon"), t("common/modules/commercial/build-page-targeting"), t("common/modules/component"), t("common/modules/video/events"), t("common/modules/video/fullscreener"), t("common/modules/video/supportedBrowsers"), t("common/modules/video/tech-order"), t("common/views/ui/loading.html!github:systemjs/plugin-text@0.0.2"))
    })
  }(), function() {
    function t() {
    }
    t.amd = {}, System.register("bootstraps/profile", ["common/modules/identity/public-profile"], !1, function(t, e, n) {
      return function(t) {
        function e() {
          t.init()
        }
        return {
          init: e
        }
      }.call(this, t("common/modules/identity/public-profile"))
    })
  }(), function() {
    function t() {
    }
    t.amd = {}, System.register("common/utils/ajax-promise", ["common/utils/ajax", "github:guardian/native-promise-only@0.7.6-e"], !1, function(t, e, n) {
      return function(t, e) {
        return function(n) {
          var o = new e(function(e, o) {
            t(n).then(function(t) {
              e(t)
            }).fail(function(t, e, n) {
              var i = n ? n : new Error(e);
              i.request = t, o(i)
            })
          });
          return o
        }
      }.call(this, t("common/utils/ajax"), t("github:guardian/native-promise-only@0.7.6-e"))
    })
  }(), function() {
    function t() {
    }
    t.amd = {}, System.register("common/modules/onward/onward-content", ["common/utils/_", "common/utils/config", "common/utils/mediator", "common/modules/analytics/register", "common/modules/commercial/badges", "common/modules/component"], !1, function(t, e, n) {
      return function(t, e, n, o, i, s) {
        function r(t) {
          o.begin("series-content"), this.context = t, this.endpoint = "/series/" + a() + ".json?shortUrl=" + encodeURIComponent(e.page.shortUrl), this.fetch(this.context, "html")
        }
        var a = function() {
          var n = e.page.blogIds.split(",").concat([e.page.seriesId]);
          return t.union(e.page.nonKeywordTagIds.split(","), n).shift()
        };
        return s.define(r), r.prototype.ready = function(t) {
            i.add(t), o.end("series-content"), n.emit("modules:onward:loaded"), n.emit("page:new-content"), n.emit("ui:images:upgradePictures")
          }, r.prototype.error = function() {
            o.error("series-content")
          }, r
      }.call(this, t("common/utils/_"), t("common/utils/config"), t("common/utils/mediator"), t("common/modules/analytics/register"), t("common/modules/commercial/badges"), t("common/modules/component"))
    })
  }(), function() {
    function t() {
    }
    t.amd = {}, System.register("common/modules/article/rich-links", ["github:wilsonpage/fastdom@0.8.6", "npm:qwery@3.4.2", "github:guardian/native-promise-only@0.7.6-e", "common/utils/_", "common/utils/$", "common/utils/ajax-promise", "common/utils/config", "common/utils/detect", "common/utils/mediator", "common/utils/template", "common/modules/article/spacefinder", "common/modules/ui/images", "common/views/content/richLinkTag.html!github:systemjs/plugin-text@0.0.2"], !1, function(t, e, n) {
      return function(t, e, n, o, i, s, r, a, c, l, u, d, m) {
        function p(e) {
          var o = i("a", e).attr("href"),
            r = o.match(/(?:^https?:\/\/(?:www\.|m\.code\.dev-)theguardian\.com)?(\/.*)/);return r && r[1] ? s({
            url: "/embed/card" + r[1] + ".json",
            crossOrigin: !0
          }).then(function(n) {
            n.html && t.write(function() {
              i(e).html(n.html).removeClass("element-rich-link--not-upgraded").addClass("element-rich-link--upgraded"), d.upgradePictures(e), i(".submeta-container--break").removeClass("submeta-container--break"), c.emit("rich-link:loaded", e)
            })
          }) : n.resolve(null)
        }
        function h() {
          return {
            minAbove: 200,
            minBelow: 250,
            clearContentMeta: 50,
            selectors: {
              " > h2": {
                minAbove: "mobile" === a.getBreakpoint() ? 20 : 0,
                minBelow: 200
              },
              " > *:not(p):not(h2):not(blockquote)": {
                minAbove: 35,
                minBelow: 300
              },
              " .ad-slot": {
                minAbove: 150,
                minBelow: 200
              },
              " .element-rich-link": {
                minAbove: 500,
                minBelow: 500
              }
            }
          }
        }
        function f() {
          var e = i(".element-rich-link a").map(function(t) {
              return i(t).attr("href")
            }),
            s = function(t) {
              return o.contains(r.page.richLink, t)
            },
            a = e.some(s),
            c = r.page.shouldHideAdverts || !r.page.showRelatedContent;return !r.page.richLink || -1 !== r.page.richLink.indexOf(r.page.pageId) || c || a ? n.resolve(null) : u.getParaWithSpace(h()).then(function(e) {
            return new n(function(n) {
              e ? t.write(function() {
                var t = i.create(l(m, {
                  href: r.page.richLink
                }));
                t.insertBefore(e), n(p(t[0]))
              }) : n(null)
            })
          })
        }
        function g() {
          i(".element-rich-link--not-upgraded").each(p)
        }
        return {
          upgradeRichLink: p,
          upgradeRichLinks: g,
          insertTagRichLink: f,
          getSpacefinderRules: h
        }
      }.call(this, t("github:wilsonpage/fastdom@0.8.6"), t("npm:qwery@3.4.2"), t("github:guardian/native-promise-only@0.7.6-e"), t("common/utils/_"), t("common/utils/$"), t("common/utils/ajax-promise"), t("common/utils/config"), t("common/utils/detect"), t("common/utils/mediator"), t("common/utils/template"), t("common/modules/article/spacefinder"), t("common/modules/ui/images"), t("common/views/content/richLinkTag.html!github:systemjs/plugin-text@0.0.2"))
    })
  }(), function() {
    function t() {
    }
    t.amd = {}, System.register("bootstraps/common", ["npm:bean@1.0.15", "npm:bonzo@1.4.0", "github:guardian/enhancer@0.1.3", "npm:fastclick@1.0.6", "npm:qwery@3.4.2", "common/utils/$", "common/utils/config", "common/utils/cookies", "common/utils/detect", "common/utils/proximity-loader", "common/utils/mediator", "common/utils/template", "common/utils/url", "common/utils/robust", "common/utils/storage", "common/modules/analytics/foresee-survey", "common/modules/analytics/livestats", "common/modules/analytics/media-listener", "common/modules/analytics/omniture", "common/modules/analytics/register", "common/modules/analytics/scrollDepth", "common/modules/analytics/css-logging", "common/modules/analytics/simple-metrics", "common/modules/commercial/user-ad-targeting", "common/modules/discussion/comment-count", "common/modules/discussion/loader", "common/modules/experiments/ab", "common/modules/identity/api", "common/modules/identity/autosignin", "common/modules/navigation/navigation", "common/modules/navigation/profile", "common/modules/navigation/search", "common/modules/onward/history", "common/modules/onward/more-tags", "common/modules/onward/onward-content", "common/modules/onward/popular", "common/modules/onward/related", "common/modules/onward/tech-feedback", "common/modules/onward/tonal", "common/modules/social/share-count", "common/modules/ui/accessibility-prefs", "common/modules/ui/clickstream", "common/modules/ui/dropdowns", "common/modules/ui/faux-block-link", "common/modules/ui/fonts", "common/modules/ui/last-modified", "common/modules/ui/message", "common/modules/ui/relativedates", "common/modules/ui/smartAppBanner", "common/modules/ui/tabs", "common/modules/ui/toggles", "common/modules/user-prefs", "common/modules/onward/breaking-news", "common/views/international-message.html!github:systemjs/plugin-text@0.0.2", "common/views/international-control-message.html!github:systemjs/plugin-text@0.0.2", "common/views/donot-use-adblock.html!github:systemjs/plugin-text@0.0.2", "bootstraps/identity"], !1, function(t, e, n) {
      return function(t, e, n, o, i, s, r, a, c, l, u, d, m, p, h, f, g, v, y, b, w, k, j, T, C, x, S, _, E, A, D, M, P, I, N, L, R, O, F, V, B, q, U, H, $, z, Y, G, W, X, J, K, Q, Z, tt, et, nt) {
        var ot = {
            loadFonts: function() {
              $.load()
            },
            initId: function() {
              nt.init(r)
            },
            initUserAdTargeting: function() {
              T.requestUserSegmentsFromId()
            },
            initFastClick: function() {
              (r.tests.jspmTest ? o : o.attach)(document.body)
            },
            initialiseFauxBlockLink: function() {
              H().init()
            },
            initialiseTopNavItems: function() {
              var t,
                e = new M,
                n = document.getElementById("header");
              n && r.switches.idProfileNavigation && (t = new D({
                url: r.page.idUrl
              }), t.init()), e.init(n)
            },
            initialiseNavigation: function() {
              A.init()
            },
            transcludeRelated: function() {
              var t = {
                excludeTags: []
              };
              "advertisement-features" !== r.page.sponsorshipType && t.excludeTags.push("tone/advertisement-features"), "contentType" in r.page && ["video", "interactive"].indexOf(r.page.contentType.toLowerCase()) >= 0 && t.excludeTags.push("guardian-professional/guardian-professional"), new R(t).renderRelatedComponent()
            },
            initRelated: function() {
              if (window.location.hash) ot.transcludeRelated(); else {
                var t = i(".js-related")[0];
                t && l.add(t, 1500, ot.transcludeRelated)
              }
            },
            transcludePopular: function() {
              (new L).init()
            },
            initPopular: function() {
              if (!r.page.isFront)
                if (window.location.hash) ot.transcludePopular(); else {
                  var t = i(".js-popular-trails")[0];
                  t && l.add(t, 1500, ot.transcludePopular)
              }
            },
            transcludeOnwardContent: function() {
              (r.page.seriesId || r.page.blogIds) && r.page.showRelatedContent ? new N(i(".js-onward")) : "" !== r.page.tones && s(".js-onward").each(function(t) {
                (new F).fetch(t, "html")
              })
            },
            initOnwardContent: function() {
              if (window.location.hash) ot.transcludeOnwardContent(); else {
                var t = i(".js-onward")[0];
                t && l.add(t, 1500, ot.transcludeOnwardContent)
              }
            },
            showTabs: function() {
              var t = new X;
              ["modules:popular:loaded", "modules:geomostpopular:ready"].forEach(function(e) {
                u.on(e, function(e) {
                  t.init(e)
                })
              })
            },
            showToggles: function() {
              var t = new J;
              t.init(document), t.reset(), U.init()
            },
            showRelativeDates: function() {
              var t = G;
              t.init(), u.on("fragment:ready:dates", function(e) {
                t.init(e)
              })
            },
            initClickstream: function() {
              new q({
                filter: ["a", "button"]
              })
            },
            showAdblockMessage: function() {
              var t = h.local.get("alreadyVisited") || 0,
                e = "https://membership.theguardian.com/about/supporter?INTCMP=adb-mv";
              "mobile" !== c.getBreakpoint() && c.adblockInUse && r.switches.adblock && t && new Y("adblock", {
                pinOnHide: !1,
                siteMessageLinkName: "adblock message variant",
                siteMessageCloseBtn: "hide"
              }).show(d(et, {
                adblockLink: e,
                messageText: "We notice you've got an ad-blocker switched on. Perhaps you'd like to support the Guardian another way?",
                linkText: "Become a supporter today"
              })), h.local.set("alreadyVisited", t + 1)
            },
            logLiveStats: function() {
              g.log()
            },
            loadAnalytics: function() {
              y.go(), r.switches.ophan && require(["ophan/ng"], function(t) {
                r.switches.scrollDepth && (u.on("scrolldepth:data", t.record), new w({
                  isContent: /Article|LiveBlog/.test(r.page.contentType)
                }))
              })
            },
            cleanupCookies: function() {
              a.cleanUp(["mmcore.pd", "mmcore.srv", "mmid", "GU_ABFACIA", "GU_FACIA", "GU_ALPHA", "GU_ME", "at"])
            },
            updateHistory: function() {
              "Network Front" !== r.page.contentType && P.logSummary(r.page), "Video" === r.page.contentType && P.logHistory(r.page)
            },
            showHistoryInMegaNav: function() {
              r.switches.historyTags && u.once("modules:nav:open", function() {
                P.showInMegaNav()
              })
            },
            initAutoSignin: function() {
              r.switches.facebookAutosignin && "mobile" !== c.getBreakpoint() && (new E).init()
            },
            windowEventListeners: function() {
              var e,
                n = {
                  resize: "window:resize",
                  scroll: "window:scroll",
                  orientationchange: "window:orientationchange"
                };
              for (e in n) t.on(window, e, u.emit.bind(u, n[e]))
            },
            mediaEventListeners: function() {
              v.init()
            },
            checkIframe: function() {
              window.self !== window.top && s("html").addClass("iframed")
            },
            runForseeSurvey: function() {
              r.switches.foresee && f.load()
            },
            augmentInteractive: function() {
              /Article|Interactive|LiveBlog/.test(r.page.contentType) && s("figure.interactive").each(function(t) {
                n.render(t, document, r, u)
              })
            },
            startRegister: function() {
              r.page.isSSL || b.initialise()
            },
            repositionComments: function() {
              _.isUserLoggedIn() || s(".js-comments").appendTo(i(".js-repositioned-comments"))
            },
            showMoreTagsLink: function() {
              (new I).init()
            },
            showSmartBanner: function() {
              W.init()
            },
            initDiscussion: function() {
              if (r.switches.discussion && (C.init(), r.page.commentable)) {
                var t = i(".discussion")[0];
                t && (new x).attachTo(t)
              }
            },
            testCookie: function() {
              var t = m.getUrlVars();
              t.test && a.addSessionCookie("GU_TEST", encodeURIComponent(t.test))
            },
            adTestCookie: function() {
              var t = m.getUrlVars();
              "clear" === t.adtest ? a.remove("adtest") : t.adtest && a.add("adtest", encodeURIComponent(t.adtest), 10)
            },
            initOpenOverlayOnClick: function() {
              var n;
              t.on(document.body, "click", "[data-open-overlay-on-click]", function(t) {
                var o = e(t.currentTarget).data("open-overlay-on-click");
                n = document.body.scrollTop, e(document.body).addClass("has-overlay"), s("#" + o).addClass("overlay--open").appendTo(document.body)
              }), t.on(document.body, "click", ".js-overlay-close", function(t) {
                var o = s.ancestor(t.target, "overlay");
                o && e(o).removeClass("overlay--open"), e(document.body).removeClass("has-overlay"), n && window.setTimeout(function() {
                  document.body.scrollTop = n, n = null
                }, 1)
              })
            },
            initShareCounts: function() {
              V.init()
            },
            initLastModified: function() {
              z.init()
            },
            loadBreakingNews: function() {
              r.switches.breakingNews && Q()
            },
            runCssLogging: function() {
              r.switches.cssLogging && k()
            },
            initSimpleMetrics: function() {
              j.init()
            },
            initTechFeedback: function() {
              O.init()
            },
            initAccessibilityPrefs: function() {
              B.init()
            },
            initPublicApi: function() {
              window.guardian.api = {
                logCss: k
              }
            },
            runCustomAbTests: function() {
              S.shouldRunTest("MtRec1", "A") && S.getTest("MtRec1").fireRecTest(), S.shouldRunTest("MtRec2", "A") && S.getTest("MtRec2").fireRecTest()
            },
            internationalSignposting: function() {
              "internationalEdition" in r.page && ("international" === r.page.internationalEdition && "international" === r.page.pageId ? new Y("international-with-survey-new", {
                pinOnHide: !0
              }).show(d(Z, {})) : "control" === r.page.internationalEdition && "uk" === r.page.pageId && new Y("international", {
                pinOnHide: !0
              }).show(d(tt, {})))
            }
          },
          it = function() {
            p("c-fonts", ot.loadFonts), p("c-identity", ot.initId), p("c-adverts", ot.initUserAdTargeting), p("c-discussion", ot.initDiscussion), p("c-fast-click", ot.initFastClick), p("c-test-cookie", ot.testCookie), p("c-ad-cookie", ot.adTestCookie), p("c-event-listeners", ot.windowEventListeners), p("c-breaking-news", ot.loadBreakingNews), p("c-shares", ot.initShareCounts), p("c-last-modified", ot.initLastModified), p("c-block-link", ot.initialiseFauxBlockLink), p("c-iframe", ot.checkIframe), p("c-tabs", ot.showTabs), p("c-top-nav", ot.initialiseTopNavItems), p("c-init-nav", ot.initialiseNavigation), p("c-toggles", ot.showToggles), p("c-dates", ot.showRelativeDates), p("c-clickstream", ot.initClickstream), p("c-history", ot.updateHistory), p("c-sign-in", ot.initAutoSignin), p("c-interactive", ot.augmentInteractive), p("c-history-nav", ot.showHistoryInMegaNav), p("c-forsee", ot.runForseeSurvey), p("c-start-register", ot.startRegister), p("c-comments", ot.repositionComments), p("c-tag-links", ot.showMoreTagsLink), p("c-smart-banner", ot.showSmartBanner), p("c-adblock", ot.showAdblockMessage), p("c-log-stats", ot.logLiveStats), p("c-analytics", ot.loadAnalytics), p("c-cookies", ot.cleanupCookies), p("c-popular", ot.initPopular), p("c-related", ot.initRelated), p("c-onward", ot.initOnwardContent), p("c-overlay", ot.initOpenOverlayOnClick), p("c-css-logging", ot.runCssLogging), p("c-public-api", ot.initPublicApi), p("c-simple-metrics", ot.initSimpleMetrics), p("c-tech-feedback", ot.initTechFeedback), p("c-media-listeners", ot.mediaEventListeners), p("c-run-custom-ab", ot.runCustomAbTests), p("c-accessibility-prefs", ot.initAccessibilityPrefs), p("c-international-signposting", ot.internationalSignposting), window.console && window.console.log && !r.page.isDev && window.console.log("##::::: ##: ########::::::: ###:::: ########:: ########:::: ##:::: ##: ####: ########:: ####: ##::: ##:: ######::\n##: ##: ##: ##.....::::::: ## ##::: ##.... ##: ##.....::::: ##:::: ##:. ##:: ##.... ##:. ##:: ###:: ##: ##... ##:\n##: ##: ##: ##::::::::::: ##:. ##:: ##:::: ##: ##:::::::::: ##:::: ##:: ##:: ##:::: ##:: ##:: ####: ##: ##:::..::\n##: ##: ##: ######:::::: ##:::. ##: ########:: ######:::::: #########:: ##:: ########::: ##:: ## ## ##: ##:: ####\n##: ##: ##: ##...::::::: #########: ##.. ##::: ##...::::::: ##.... ##:: ##:: ##.. ##:::: ##:: ##. ####: ##::: ##:\n##: ##: ##: ##:::::::::: ##.... ##: ##::. ##:: ##:::::::::: ##:::: ##:: ##:: ##::. ##::: ##:: ##:. ###: ##::: ##:\n ###. ###:: ########:::: ##:::: ##: ##:::. ##: ########:::: ##:::: ##: ####: ##:::. ##: ####: ##::. ##:. ######::\n\nEver thought about joining us?\nhttp://developers.theguardian.com/join-the-team.html")
          };
        return {
          init: it
        }
      }.call(this, t("npm:bean@1.0.15"), t("npm:bonzo@1.4.0"), t("github:guardian/enhancer@0.1.3"), t("npm:fastclick@1.0.6"), t("npm:qwery@3.4.2"), t("common/utils/$"), t("common/utils/config"), t("common/utils/cookies"), t("common/utils/detect"), t("common/utils/proximity-loader"), t("common/utils/mediator"), t("common/utils/template"), t("common/utils/url"), t("common/utils/robust"), t("common/utils/storage"), t("common/modules/analytics/foresee-survey"), t("common/modules/analytics/livestats"), t("common/modules/analytics/media-listener"), t("common/modules/analytics/omniture"), t("common/modules/analytics/register"), t("common/modules/analytics/scrollDepth"), t("common/modules/analytics/css-logging"), t("common/modules/analytics/simple-metrics"), t("common/modules/commercial/user-ad-targeting"), t("common/modules/discussion/comment-count"), t("common/modules/discussion/loader"), t("common/modules/experiments/ab"), t("common/modules/identity/api"), t("common/modules/identity/autosignin"), t("common/modules/navigation/navigation"), t("common/modules/navigation/profile"), t("common/modules/navigation/search"), t("common/modules/onward/history"), t("common/modules/onward/more-tags"), t("common/modules/onward/onward-content"), t("common/modules/onward/popular"), t("common/modules/onward/related"), t("common/modules/onward/tech-feedback"), t("common/modules/onward/tonal"), t("common/modules/social/share-count"), t("common/modules/ui/accessibility-prefs"), t("common/modules/ui/clickstream"), t("common/modules/ui/dropdowns"), t("common/modules/ui/faux-block-link"), t("common/modules/ui/fonts"), t("common/modules/ui/last-modified"), t("common/modules/ui/message"), t("common/modules/ui/relativedates"), t("common/modules/ui/smartAppBanner"), t("common/modules/ui/tabs"), t("common/modules/ui/toggles"), t("common/modules/user-prefs"), t("common/modules/onward/breaking-news"), t("common/views/international-message.html!github:systemjs/plugin-text@0.0.2"), t("common/views/international-control-message.html!github:systemjs/plugin-text@0.0.2"), t("common/views/donot-use-adblock.html!github:systemjs/plugin-text@0.0.2"), t("bootstraps/identity"))
    })
  }(), function() {
    function t() {
    }
    t.amd = {}, System.register("bootstraps/article", ["github:guardian/fence@0.2.11", "npm:qwery@3.4.2", "common/utils/$", "common/utils/config", "common/utils/detect", "common/utils/mediator", "common/utils/url", "common/modules/article/rich-links", "common/modules/article/membership-events", "common/modules/article/open-module", "common/modules/article/truncate", "common/modules/article/twitter", "common/modules/experiments/ab", "common/modules/onward/geo-most-popular", "common/modules/open/cta", "common/modules/onward/social-most-popular", "common/modules/ui/rhc", "common/modules/ui/selection-sharing"], !1, function(t, e, n) {
      return function(t, e, n, o, i, s, r, a, c, l, u, d, m, p, h, f, g, v) {
        var y = {
            initOpenCta: function() {
              if (o.switches.openCta && o.page.commentable) {
                var t = new h(s, {
                  discussionKey: o.page.shortUrl.replace("http://gu.com/", "")
                });
                n.create('<div class="open-cta"></div>').each(function(e) {
                  t.fetch(e), o.page.isLiveBlog || g.addComponent(e)
                })
              }
            },
            initFence: function() {
              n(".fenced").each(function(e) {
                t.render(e)
              })
            },
            initCmpParam: function() {
              var t = r.getUrlVars();
              t.CMP && n(".element-pass-cmp").each(function(e) {
                e.src = e.src + "?CMP=" + t.CMP
              })
            },
            initTruncateAndTwitter: function() {
              u(), d.init(), d.enhanceTweets()
            },
            initRightHandComponent: function() {
              var t = e(".js-content-main-column");
              t[0] && t[0].offsetHeight > 1150 && i.isBreakpoint({
                min: "desktop"
              }) && p.render()
            },
            initSelectionSharing: function() {
              v.init()
            },
            initSocialMostPopular: function() {
              var t = e(".js-social-most-popular");
              ["Twitter", "Facebook"].forEach(function(e) {
                m.shouldRunTest(e + "MostViewed", "variant") && t && new f(t, e.toLowerCase())
              })
            },
            initQuizListeners: function() {
              require(["ophan/ng"], function(t) {
                s.on("quiz/ophan-event", t.record)
              })
            }
          },
          b = function() {
            y.initOpenCta(), y.initFence(), y.initTruncateAndTwitter(), y.initRightHandComponent(), y.initSelectionSharing(), y.initCmpParam(), y.initSocialMostPopular(), y.initQuizListeners(), a.upgradeRichLinks(), a.insertTagRichLink(), c.upgradeEvents(), l.init(), s.emit("page:article:ready")
          };
        return {
          init: b,
          modules: y
        }
      }.call(this, t("github:guardian/fence@0.2.11"), t("npm:qwery@3.4.2"), t("common/utils/$"), t("common/utils/config"), t("common/utils/detect"), t("common/utils/mediator"), t("common/utils/url"), t("common/modules/article/rich-links"), t("common/modules/article/membership-events"), t("common/modules/article/open-module"), t("common/modules/article/truncate"), t("common/modules/article/twitter"), t("common/modules/experiments/ab"), t("common/modules/onward/geo-most-popular"), t("common/modules/open/cta"), t("common/modules/onward/social-most-popular"), t("common/modules/ui/rhc"), t("common/modules/ui/selection-sharing"))
    })
  }(), function() {
    function t() {
    }
    t.amd = {}, System.register("bootstraps/app", ["npm:qwery@3.4.2", "github:getsentry/raven-js@1.1.18", "common/utils/config", "common/utils/detect", "common/utils/mediator", "common/utils/user-timing", "bootstraps/article", "bootstraps/common", "bootstraps/gallery", "bootstraps/liveblog", "bootstraps/media", "bootstraps/profile", "bootstraps/sport", "common/modules/experiments/tests/save-for-later"], !1, function(t, e, n) {
      return function(t, e, n, o, i, s, r, a, c, l, u, d, m, p) {
        var h = function(t, n) {
            e.context({
              tags: {
                feature: t
              }
            }, n.init, [])
          },
          f = function() {
            s.mark("App Begin"), n.switches.abSaveForLater && "identity" === n.page.section && "/saved-for-later" === n.page.pageId && (new p).variants[0].test(), h("common", a), n.page.isFront && require(["bootstraps/facia"], function(t) {
              h("facia", t)
            }), "lifeandstyle" === n.page.section && "Sudoku" === n.page.series && require(["bootstraps/sudoku"], function(t) {
              h("sudoku", t)
            }), "Article" === n.page.contentType && require(["bootstraps/image-content"], function(t) {
              h("article", r), h("article : image-content", t)
            }), "LiveBlog" === n.page.contentType && require(["bootstraps/image-content"], function(t) {
              h("liveBlog", l), h("liveBlog : image-content", t)
            }), (n.isMedia || t("video, audio").length) && h("media", u), "Gallery" === n.page.contentType && require(["bootstraps/image-content"], function(t) {
              h("gallery", c), h("gallery : image-content", t)
            }), "ImageContent" === n.page.contentType && require(["bootstraps/image-content"], function(t) {
              h("image-content", t)
            }), "football" === n.page.section && require(["bootstraps/football"], function(t) {
              h("footbal", t)
            }), "sport" === n.page.section && h("sport", m), "identity" === n.page.section && h("profile", d), n.page.isPreferencesPage && require(["bootstraps/preferences"], function(t) {
              h("preferences", t)
            }), "help/accessibility-help" === n.page.pageId && require(["bootstraps/accessibility"], function(t) {
              h("accessibility", t)
            }), s.mark("App End")
          };
        return {
          go: f
        }
      }.call(this, t("npm:qwery@3.4.2"), t("github:getsentry/raven-js@1.1.18"), t("common/utils/config"), t("common/utils/detect"), t("common/utils/mediator"), t("common/utils/user-timing"), t("bootstraps/article"), t("bootstraps/common"), t("bootstraps/gallery"), t("bootstraps/liveblog"), t("bootstraps/media"), t("bootstraps/profile"), t("bootstraps/sport"), t("common/modules/experiments/tests/save-for-later"))
    })
  }();