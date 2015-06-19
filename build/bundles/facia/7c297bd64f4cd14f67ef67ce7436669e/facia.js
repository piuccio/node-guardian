"format register";!function(){function t(){}t.amd={},System.register("common/utils/to-array",[],!1,function(){function t(t){return Array.prototype.slice.call(t)}return t})}(),System.register("common/views/business/stock-value.html!github:systemjs/plugin-text@0.0.2",[],!0,function(require,t,e){var n=System.global,o=n.define;return n.define=void 0,e.exports='<div class="stocks__stock-value <%=deltaClass%>">\n    <div class="stocks__divider"></div>\n    <div class="stocks__name"><%=name%><%=closedInline%></div>\n    <div class="stocks__value">\n        <div class="stocks__price"><%=price%></div>\n        <%=marketDownIcon%>\n        <%=marketUpIcon%>\n        <%=marketSameIcon%>\n        <div class="stocks__change"><%=change%></div>\n    </div>\n    <%=closed%>\n</div>\n',n.define=o,e.exports}),System.register("common/views/business/stocks.html!github:systemjs/plugin-text@0.0.2",[],!0,function(require,t,e){var n=System.global,o=n.define;return n.define=void 0,e.exports='<div class="stocks__stocks-container">\n    <%=stocks%>\n</div>\n',n.define=o,e.exports}),System.register("facia/views/button-toggle.html!github:systemjs/plugin-text@0.0.2",[],!0,function(require,t,e){var n=System.global,o=n.define;return n.define=void 0,e.exports='<button class="fc-container__toggle" data-link-name="<%=dataLink%>">\n    <%=icon%>\n    <span class="fc-container__toggle__text"><%=text%></span>\n</button>\n',n.define=o,e.exports}),function(){function t(){}t.amd={},System.register("facia/modules/ui/lazy-load-containers",["npm:bonzo@1.4.0","github:wilsonpage/fastdom@0.8.6","npm:qwery@3.4.2","common/utils/_","common/utils/detect","common/utils/mediator"],!1,function(t,e,n){return function(t,e,n,o,i,s){var r=i.getViewport().height;return function(){var o=t(n(".js-front-bottom")),i=n(".js-container--lazy-load"),a=function(){0===i.length?s.off("window:scroll",a):e.read(function(){var n,s=t(document.body).scrollTop(),a=s+t.viewport().height,c=o.offset().top;a>c-r&&(n=t(i.shift()),e.write(function(){n.removeClass("fc-container--lazy-load")}))})};s.on("window:scroll",a),a()}}.call(this,t("npm:bonzo@1.4.0"),t("github:wilsonpage/fastdom@0.8.6"),t("npm:qwery@3.4.2"),t("common/utils/_"),t("common/utils/detect"),t("common/utils/mediator"))})}(),System.register("facia/views/liveblog-block.html!github:systemjs/plugin-text@0.0.2",[],!0,function(require,t,e){var n=System.global,o=n.define;return n.define=void 0,e.exports='<a href="<%=href%>" class="fc-item__liveblog-block <%=classes%>" data-link-name="block | <%=index%>">\n    <div class="fc-item__liveblog-block__text">\n        <div class="fc-item__liveblog-block__time"><%=relativeTime%></div>\n        <%=text%>\n    </div>\n</a>\n',n.define=o,e.exports}),function(){function t(){}t.amd={},System.register("facia/modules/ui/football-snaps",["npm:bonzo@1.4.0"],!1,function(t,e,n){return function(t){var e={resizeIfPresent:function(e){if(e){var n=t(e);n.css("height",n.parent().css("height"))}}};return e}.call(this,t("npm:bonzo@1.4.0"))})}(),function(){function t(){}t.amd={},System.register("facia/modules/onwards/search-tool",["npm:bean@1.0.15","github:getsentry/raven-js@1.1.18","common/utils/$","common/utils/_","common/utils/ajax","common/utils/mediator","common/modules/analytics/omniture"],!1,function(t,e,n){return function(t,e,n,o,i,s,r){function a(e){var a=null,c=null,l="",u="",d="",m={13:"enter",38:"up",40:"down"},p=e||{},h=p.container,f=p.apiUrl;return{init:function(){this.bindElements(h),this.bindEvents()},bindElements:function(t){a=n(".js-search-tool-list",t),c=n(".js-search-tool-input",t)},bindEvents:function(){t.on(document.body,"keyup",this.handleKeyEvents.bind(this)),t.on(document.body,"click",this.handleClick.bind(this)),s.on("autocomplete:toggle",this.toggleControls.bind(this))},hasInputValueChanged:function(){return l.length!==u.length},handleClick:function(t){var e=n(t.target).hasClass("js-search-tool-input"),o=this.isLink(t.target);e?(t.preventDefault(),s.emit("autocomplete:toggle",!0)):o?(t.preventDefault(),n(".active",a).removeClass("active"),n(o).addClass("active"),this.pushData()):s.emit("autocomplete:toggle",!1)},isLink:function(t){return n(t).hasClass("js-search-tool-link")?t:n.ancestor(t,"js-search-tool-link")},toggleControls:function(t){var e=n(".js-search-tool-input")[0],o=n(".js-search-tool"),i=n(".js-close-location"),s=n(".js-edit-location");t?(d=e.value,o.addClass("is-editing"),e.setSelectionRange(0,e.value.length),i.removeClass("u-h"),s.addClass("u-h")):(o.removeClass("is-editing"),this.clear(),this.setInputValue(d),i.addClass("u-h"),s.removeClass("u-h"))},pushData:function(){var t=n(".active",a),e={},o="set";if(0===t.length){if(""!==c.val())return!1;o="remove"}return e={id:t.attr("data-weather-id"),city:t.attr("data-weather-city"),store:o},s.emit("autocomplete:fetch",e),this.setInputValue(),r.trackLinkImmediate("weather location set by user"),d=e.city,c.blur(),setTimeout(this.destroy.bind(this),50),e},getListOfResults:function(t){return u=t.target.value,t.target.value.match(/\S/)?void(this.hasInputValueChanged()&&this.fetchData()):(this.clear(),void(l=""))},fetchData:function(){return i({url:f+u,type:"json",crossOrigin:!0}).then(function(t){this.renderList(t,5),l=u}.bind(this))},handleKeyEvents:function(t){var e=m[t.which||t.keyCode];n(t.target).hasClass("js-search-tool-input")&&("down"===e?(t.preventDefault(),this.move(1)):"up"===e?(t.preventDefault(),this.move(-1)):"enter"===e?this.pushData():this.getListOfResults(t))},move:function(t){var e=n(".active",a),o=parseInt(e.attr("id"),10);isNaN(o)&&(o=-1),e.removeClass("active"),this.getNewId(o+t)<0?this.setInputValue(l):(n("#"+this.getNewId(o+t)+"sti",a).addClass("active"),this.setInputValue())},getNewId:function(t){var e=n("li",a).length,o=t%e;return-1>o?o=e-1:t===e&&(o=-1),o},setInputValue:function(t){var e=t||n(".active",a).attr("data-weather-city");c.val(e)},renderList:function(t,e){var n=document.createDocumentFragment(),i=t.length-e;o(t).initial(i).each(function(t,e){var o=document.createElement("li");o.className="search-tool__item",o.innerHTML='<a role="button" href="#'+t.id+'" id="'+e+'sti" class="js-search-tool-link search-tool__link'+(0===e?' active"':'"')+' data-link-name="weather-search-tool" data-weather-id="'+t.id+'" data-weather-city="'+t.city+'">'+t.city+' <span class="search-tool__meta">'+t.country+"</span></a>",n.appendChild(o)}),this.clear().append(n)},clear:function(){return a.html("")},destroy:function(){this.clear()}}}return a}.call(this,t("npm:bean@1.0.15"),t("github:getsentry/raven-js@1.1.18"),t("common/utils/$"),t("common/utils/_"),t("common/utils/ajax"),t("common/utils/mediator"),t("common/modules/analytics/omniture"))})}(),function(){function t(){}t.amd={},System.register("common/modules/business/stocks",["common/utils/$","common/utils/_","common/utils/ajax","common/utils/config","common/utils/template","common/views/svgs","common/views/business/stock-value.html!github:systemjs/plugin-text@0.0.2","common/views/business/stocks.html!github:systemjs/plugin-text@0.0.2"],!1,function(t,e,n){return function(t,e,n,o,i,s,r,a){function c(){return e.contains(["uk/business","us/business","au/business"],o.page.pageId)}function l(){return n({url:"/business-data/stocks.json",type:"json",method:"get",crossOrigin:!0})}function u(t){return t>0?"+"+t:""+t}function d(t){var n=e.map(t.stocks,function(t){return i(r,{name:t.name,deltaClass:"stocks__stock-value--"+t.trend,price:t.price,change:u(t.change),closed:t.closed?'<div class="stocks__closed">closed</div>':"",closedInline:t.closed?'<div class="stocks__closed--inline">closed</div>':"",marketDownIcon:s("marketDownIcon",["stocks__icon","stocks__icon--down"]),marketUpIcon:s("marketUpIcon",["stocks__icon","stocks__icon--up"]),marketSameIcon:s("marketSameIcon",["stocks__icon","stocks__icon--same"])})}).join("");return i(a,{stocks:n})}return function(){var e=t(".js-container--first .js-container__header");c()&&e&&l().then(function(t){t.stocks.length>0&&e.append(d(t))})}}.call(this,t("common/utils/$"),t("common/utils/_"),t("common/utils/ajax"),t("common/utils/config"),t("common/utils/template"),t("common/views/svgs"),t("common/views/business/stock-value.html!github:systemjs/plugin-text@0.0.2"),t("common/views/business/stocks.html!github:systemjs/plugin-text@0.0.2"))})}(),function(){function t(){}t.amd={},System.register("facia/modules/onwards/geo-most-popular-front",["npm:qwery@3.4.2","common/utils/$","common/utils/config","common/utils/mediator","common/modules/analytics/register","common/modules/component"],!1,function(t,e,n){return function(t,e,n,o,i,s){function r(){i.begin("most-popular")}function a(t){e(".js-tabs-content",t).addClass("tabs__content--no-border"),e(".js-tabs",t).addClass("u-h")}return s.define(r),r.prototype.endpoint="/most-read-geo.json",r.prototype.isNetworkFront="Network Front"===n.page.contentType,r.prototype.isInternational="international"===n.page.pageId,r.prototype.manipulationType="html",r.prototype.prerender=function(){this.elem=t(".headline-list",this.elem)[0]},r.prototype.go=function(){var e=this.isNetworkFront?".js-tab-1":".js-tab-2";this.parent=t(".js-popular-trails")[0],this.parent&&(this.isInternational&&this.isNetworkFront?a(this.parent):(this.tab=t(e,this.parent)[0],this.fetch(this.tab,"html")))},r.prototype.ready=function(){this.isNetworkFront&&a(this.parent),i.end("most-popular"),o.emit("modules:geomostpopular:ready")},r}.call(this,t("npm:qwery@3.4.2"),t("common/utils/$"),t("common/utils/config"),t("common/utils/mediator"),t("common/modules/analytics/register"),t("common/modules/component"))})}(),function(){function t(){}t.amd={},System.register("facia/modules/ui/container-toggle",["npm:bean@1.0.15","npm:bonzo@1.4.0","github:wilsonpage/fastdom@0.8.6","common/utils/$","common/utils/mediator","common/modules/user-prefs","common/utils/template","common/views/svgs","facia/views/button-toggle.html!github:systemjs/plugin-text@0.0.2"],!1,function(t,e,n){return function(t,e,n,o,i,s,r,a,c){return function(t){function l(e){var i=o(".ad-slot--paid-for-badge",t);f=e,n.write(function(){u["displayed"===f?"removeClass":"addClass"]("fc-container--rolled-up"),d.attr("data-link-name",h["displayed"===f?"hidden":"displayed"]),m.text(h[f]),i.css("display","hidden"===f?"none":"block")})}var u=e(t),d=e(e.create(r(c,{text:"Hide",dataLink:"Show",icon:a("arrowicon")}))),m=o(".fc-container__toggle__text",d[0]),p="container-states",h={hidden:"Show",displayed:"Hide"},f="displayed",g=function(t,e){var n=s.get(p),o=t;"displayed"===e?delete n[o]:(n||(n={}),n[o]="closed"),s.set(p,n)},v=function(t){var e=s.get(p);e&&e[t]&&l("hidden")};s.remove("front-trailblocks"),this.addToggle=function(){var t=u.attr("data-id"),e=o(".js-container__header",u[0]);n.write(function(){e.append(d),u.removeClass("js-container--toggle").addClass("fc-container--has-toggle"),v(t)}),i.on("module:clickstream:click",function(e){e.target===d[0]&&(l("displayed"===f?"hidden":"displayed"),g(t,f))})}}}.call(this,t("npm:bean@1.0.15"),t("npm:bonzo@1.4.0"),t("github:wilsonpage/fastdom@0.8.6"),t("common/utils/$"),t("common/utils/mediator"),t("common/modules/user-prefs"),t("common/utils/template"),t("common/views/svgs"),t("facia/views/button-toggle.html!github:systemjs/plugin-text@0.0.2"))})}(),function(){function t(){}t.amd={},System.register("facia/modules/ui/live-blog-updates",["npm:bonzo@1.4.0","github:wilsonpage/fastdom@0.8.6","common/utils/_","common/utils/$","common/utils/ajax","common/utils/storage","common/modules/ui/relativedates","common/utils/template","common/utils/mediator","common/utils/detect","facia/views/liveblog-block.html!github:systemjs/plugin-text@0.0.2"],!1,function(t,e,n){return function(t,e,n,o,i,s,r,a,c,l,u){function d(t){var e=(t||{}).publishedDateTime,n=e?r.makeRelativeDate(new Date(e)):!1;return n||""}function m(t,e,o){var i=d(e);return i=i.match(/yesterday/i)?i.toLowerCase():i?"Latest update "+i+" ago":"Updated just now",a(u,{classes:e.isNew?A:D,href:"/"+t+"#"+e.id,relativeTime:i,text:n.compact([e.title,e.body.slice(0,500)]).join(". "),index:o+1})}function p(t){return"translate3d(0, -"+t+"px, 0)"}function h(){return"translate3d(0)"}function f(t,e){return P.map(function(n){return n+":"+t(e)}).join(";")}function g(o,i,s,r){var a=n.isUndefined(r);e.write(function(){n.forEach(i,function(e){var i=0,c=n.chain(s).map(function(t,e){return k>i&&(t.publishedDateTime>r||a&&0===e)&&(t.isNew=!0,i+=1),t}).slice(0,k+i).map(function(t,e){return m(o,t,e)}).value().join(""),l=t.create('<div class="fc-item__liveblog-blocks__inner u-faux-block-link__promote" style="'+f(p,i*j)+'">'+c+"</div>");t(e).addClass(E).append(l),i&&v(l[0])})})}function v(t){y(t)||c.on("window:scroll",n.debounce(function(){return y(t,!0)},T))}function y(e,n){var o=e.getBoundingClientRect().top;return o>-1*j&&N-j>o?(setTimeout(function(){t(e).attr("style",f(h))},n?0:T),!0):void 0}function b(t){return n.filter(t,function(t){return t.id&&t.publishedDateTime&&t.body&&t.body.length>=10})}function w(){var t;o(S).each(function(t){if(t.hasAttribute(M)){var e=t.getAttribute(M);L[e]=L[e]||[],L[e].push(t)}}),n.isEmpty(L)||(t=s.session.get(I)||{},n.forEach(L,function(e,n){i({url:"/"+n+".json?rendered=false",type:"json",crossOrigin:!0}).then(function(o){var i=o&&b(o.blocks);i&&i.length&&(g(n,e,i,t[n]),t[n]=i[0].publishedDateTime,s.session.set(I,t))})}),_&&(_-=1,setTimeout(function(){w()},1e3*C),C*=x))}var k=4,j=74,T=2e3,C=30,x=1,_=5,S=".js-snappable .js-liveblog-blocks",E="fc-item__liveblog-blocks",A="fc-item__liveblog-block--new",D="fc-item__liveblog-block--old",M="data-article-id",I="gu.liveblog.block-dates",P=["-webkit-transform","-ms-transform","transform"],N=l.getViewport().height,L={};return{show:w}}.call(this,t("npm:bonzo@1.4.0"),t("github:wilsonpage/fastdom@0.8.6"),t("common/utils/_"),t("common/utils/$"),t("common/utils/ajax"),t("common/utils/storage"),t("common/modules/ui/relativedates"),t("common/utils/template"),t("common/utils/mediator"),t("common/utils/detect"),t("facia/views/liveblog-block.html!github:systemjs/plugin-text@0.0.2"))})}(),function(){function t(){}t.amd={},System.register("facia/modules/ui/slideshow/dom",["github:guardian/native-promise-only@0.7.6-e","npm:bonzo@1.4.0","npm:qwery@3.4.2","github:wilsonpage/fastdom@0.8.6","common/modules/ui/lazy-load-images","common/utils/_"],!1,function(t,e,n){return function(t,e,n,o,i,s){function r(t){t.attr({ariaHidden:!0}).css({opacity:0})}function a(o){return new t(function(t){t(s.map(n("img",o),function(t,n){var o=e(t);return{node:o,loaded:0===n?!o.hasClass("js-lazy-loaded-image")||o.hasClass("js-lazy-loaded-image-loaded"):!1}}))})}function c(e){return new t(function(t){o.write(function(){var n=e.node;r(n),e.loaded?t(e):(i.reveal(n),setTimeout(function(){e.loaded=!0,t(e)},m.loadTime))})})}function l(e,n){var i=m.duration;return new t(function(t){o.write(function(){e.node.css({transition:"opacity "+i+"ms linear",opacity:0}),n.node.css({transition:"opacity "+i+"ms linear",opacity:1}).attr({ariaHidden:!1}),setTimeout(function(){t()},i)})})}function u(e){return new t(function(t){o.write(function(){e.node.attr({ariaHidden:!0}),t(e)})})}function d(t,e){return t===e.node[0]}var m={init:a,insert:c,transition:l,remove:u,equal:d,duration:1e3,loadTime:200};return m}.call(this,t("github:guardian/native-promise-only@0.7.6-e"),t("npm:bonzo@1.4.0"),t("npm:qwery@3.4.2"),t("github:wilsonpage/fastdom@0.8.6"),t("common/modules/ui/lazy-load-images"),t("common/utils/_"))})}(),function(){function t(){}t.amd={},System.register("facia/modules/ui/snaps",["npm:bean@1.0.15","npm:bonzo@1.4.0","github:wilsonpage/fastdom@0.8.6","common/utils/_","common/utils/$","common/utils/ajax","common/utils/detect","common/utils/mediator","common/utils/template","common/utils/to-array","common/modules/ui/relativedates","facia/modules/ui/football-snaps"],!1,function(t,e,n){return function(t,e,n,o,i,s,r,a,c,l,u,d){function m(){var t=l(i(".js-snappable.js-snap")).filter(function(t){var e=t.getAttribute("data-snap-type");return e&&y.indexOf(e)>-1}).filter(function(t){return t.getAttribute("data-snap-uri")});t.forEach(v),t.length&&!r.isIOS&&a.on("window:resize",o.debounce(function(){t.forEach(function(t){p(t,!0)})},200))}function p(t,e){h(t,e),i(t).hasClass("facia-snap--football")&&d.resizeIfPresent(t)}function h(t,o){var i,s,r=e(t),a="facia-snap-point--";s=[{width:0,name:"tiny"},{width:180,name:"mini"},{width:220,name:"small"},{width:300,name:"medium"},{width:700,name:"large"},{width:940,name:"huge"}],n.read(function(){i=t.offsetWidth}),n.write(function(){s.map(function(t,e,n){var s=i>=t.width&&(n[e+1]?i<n[e+1].width:!0);return t.action=s?"addClass":o?"removeClass":!1,t}).filter(function(t){return t.action}).forEach(function(t){r[t.action](a+t.name)})})}function f(t){var o=e(t).offset(),i=Math.ceil((o.width||0)/2),s=400,r=t.getAttribute("data-snap-uri"),a=Math.min(Math.max(o.height||0,i),s),c=e.create('<div style="width: 100%; height: '+a+'px; overflow: hidden; -webkit-overflow-scrolling:touch"></div>')[0],l=e.create('<iframe src="'+r+'" style="width: 100%; height: 100%; border: none;"></iframe>')[0];e(c).append(l),b.push(l),w(),n.write(function(){e(t).empty().append(c)})}function g(t,o){s({url:t.getAttribute("data-snap-uri"),type:o?"json":"html",crossOrigin:!0}).then(function(s){i.create(o?s.html:s).each(function(o){n.write(function(){e(t).html(o)})}),u.init(t)})}function v(t){switch(n.write(function(){e(t).addClass("facia-snap-embed")}),p(t),t.getAttribute("data-snap-type")){case"document":f(t);break;case"fragment":g(t);break;case"json.html":g(t,!0)}}var y=["document","fragment","json.html"],b=[],w=o.once(function(){t.on(window,"message",function(t){var n,i=o.find(b,function(e){return e.contentWindow===t.source});i&&(n=JSON.parse(t.data),"set-height"===n.type&&e(i).parent().css("height",n.value))})});return{init:m}}.call(this,t("npm:bean@1.0.15"),t("npm:bonzo@1.4.0"),t("github:wilsonpage/fastdom@0.8.6"),t("common/utils/_"),t("common/utils/$"),t("common/utils/ajax"),t("common/utils/detect"),t("common/utils/mediator"),t("common/utils/template"),t("common/utils/to-array"),t("common/modules/ui/relativedates"),t("facia/modules/ui/football-snaps"))})}(),function(){function t(){}t.amd={},System.register("facia/modules/ui/slideshow/state",["github:guardian/native-promise-only@0.7.6-e","common/utils/_","facia/modules/ui/slideshow/dom"],!1,function(t,e,n){return function(t,e,n){function o(e,o){function i(){r=setTimeout(function(){this.next().then(i.bind(this))}.bind(this),s.interval-l.loadTime)}var r,a=0,c=e,l=o||n;this.active=function(){return c[a]},this.goTo=function(e){if(e>=c.length&&(e=0),e===a)return t.resolve();var n=c[a],o=c[e];return new t(function(t){l.insert(o).then(function(t){return l.transition(n,t)}).then(function(){return l.remove(n)}).then(function(){a=e,t()})["catch"](function(){c.splice(e,1),this.goTo(e).then(t)}.bind(this))}.bind(this))},this.next=function(){return this.goTo(a+1)},this.start=function(){this.stop(),i.call(this)},this.stop=function(){clearTimeout(r),r=null}}function i(t,e){return new o(t,e)}var s={init:i,interval:4e3};return s}.call(this,t("github:guardian/native-promise-only@0.7.6-e"),t("common/utils/_"),t("facia/modules/ui/slideshow/dom"))})}(),function(){function t(){}t.amd={},System.register("facia/modules/ui/container-show-more",["npm:bonzo@1.4.0","github:wilsonpage/fastdom@0.8.6","npm:qwery@3.4.2","github:getsentry/raven-js@1.1.18","common/utils/_","common/utils/$","common/utils/ajax-promise","common/utils/config","common/utils/mediator","common/modules/user-prefs"],!1,function(t,e,n){return function(t,e,n,o,i,s,r,a,c,l){function u(t,e){var n=t.text[e];t.$textEl.html(n),t.$el.attr("data-link-name",e===A?"less":"more").toggleClass("button--primary",e!==A).toggleClass("button--tertiary",e===A).toggleClass(_,e===M),t.$container.toggleClass(j,e!==A).toggleClass(T,e===A),t.state=e}function d(t,e){var n=l.get(x,{type:"session"})||{};e!==A?delete n[t]:n[t]="more",l.set(x,n,{type:"session"})}function m(t){var e=l.get(x,{type:"session"});return e&&e[t]?A:D}function p(t){e.write(function(){u(t,t.state===D?A:D),d(t.id,t.state)})}function h(t){e.write(function(){t.$container.addClass(j).removeClass("js-container--fc-show-more").toggleClass(j,t.state===D),u(t,t.state)})}function f(t,e){return r({url:"/"+t+"/show-more/"+e+".json",crossOrigin:!0,timeout:I})}function g(e,n){var o=w(e),i=t.create(n);return s(E,i).each(function(e){var n=t(e);n.attr(S)in o&&n.remove()}),i}function v(t){e.write(function(){u(t,M)}),f(a.page.pageId,t.id).then(function(n){var o,i=n.html.trim();i&&(o=g(t.$container,i)),e.write(function(){o&&t.$placeholder.replaceWith(o),u(t,A),d(t.id,t.state)}),t.isLoaded=!0})["catch"](function(n){e.write(function(){u(t,D)}),b(t),o.captureException(new Error("Error retrieving show more ("+n+")"))})}function y(t){e.write(function(){t.addClass("show-more__error-message--invisible")})}function b(n){n.$errorMessage&&n.$errorMessage.remove(),n.$errorMessage=t(t.create('<div class="show-more__error-message">Sorry, failed to load more stories. Please try again.</div>')),e.write(function(){n.$errorMessage.insertAfter(n.$el),setTimeout(function(){y(n.$errorMessage)},5e3)})}function w(e){return i.groupBy(n(E,e),function(e){return t(e).attr(S)})}function k(t){var e,n,o,i=s(".js-show-more-button",t);return i?(e=t.attr("data-id"),n=m(e),o={$el:i,$container:t,$iconEl:s(".i",i),$placeholder:s(".js-show-more-placeholder",t),$textEl:s("."+C,i),id:e,text:{hidden:s(".js-button-text",i).text(),displayed:"Less",loading:"Loading&hellip;"},state:n,isLoaded:!1,$errorMessage:null},n===A&&v(o),o):void 0}var j="fc-show-more--hidden",T="fc-show-more--visible",C="js-button-text",x="section-states",_="collection__show-more--loading",S="data-id",E=".js-fc-item",A="displayed",D="hidden",M="loading",I=5e3;return{itemsByArticleId:w,dedupShowMore:g,init:function(){e.read(function(){var e=n(".js-container--fc-show-more").map(t),o=i.filter(i.map(e,k));i.forEach(o,h),c.on("module:clickstream:click",function(t){var e=i.find(o,function(e){return e.$el[0]===t.target});e&&e.state!==M&&(e.isLoaded?p(e):(e.$errorMessage&&e.$errorMessage.hide(),v(e)))})})}}}.call(this,t("npm:bonzo@1.4.0"),t("github:wilsonpage/fastdom@0.8.6"),t("npm:qwery@3.4.2"),t("github:getsentry/raven-js@1.1.18"),t("common/utils/_"),t("common/utils/$"),t("common/utils/ajax-promise"),t("common/utils/config"),t("common/utils/mediator"),t("common/modules/user-prefs"))})}(),function(){function t(){}t.amd={},System.register("facia/modules/ui/slideshow/controller",["github:guardian/native-promise-only@0.7.6-e","common/modules/accessibility/main","common/utils/$","common/utils/mediator","npm:bonzo@1.4.0","facia/modules/ui/slideshow/state","facia/modules/ui/slideshow/dom"],!1,function(t,e,n){return function(t,e,n,o,i,s,r){function a(e){return new t(function(t){e[0].loaded?t(e):o.on("ui:images:lazyLoaded",function(n){return r.equal(n,e[0])?(t(e),!0):void 0})})}function c(t){if(t.length>1){var e=s.init(t);m.push(e),e.goTo(1).then(function(){e.start()})}}function l(){e.isOn("flashing-elements")&&n(".js-slideshow").each(function(t){return r.init(t).then(a).then(c)})}function u(){setTimeout(l,s.interval)}function d(){for(var t=0,e=m.length;e>t;t+=1)m[t].stop()}var m=[];return{init:u,destroy:d}}.call(this,t("github:guardian/native-promise-only@0.7.6-e"),t("common/modules/accessibility/main"),t("common/utils/$"),t("common/utils/mediator"),t("npm:bonzo@1.4.0"),t("facia/modules/ui/slideshow/state"),t("facia/modules/ui/slideshow/dom"))})}(),function(){function t(){}t.amd={},System.register("facia/modules/onwards/weather",["npm:bean@1.0.15","npm:qwery@3.4.2","github:getsentry/raven-js@1.1.18","common/utils/_","common/utils/$","common/utils/ajax","common/utils/config","common/utils/detect","common/utils/mediator","common/utils/template","common/modules/analytics/omniture","common/modules/user-prefs","facia/modules/onwards/search-tool"],!1,function(t,e,n){return function(t,e,n,o,i,s,r,a,c,l,u,d,m){var p=null,h=null,f="weather-location";return{init:function(){return r.switches&&r.switches.weather&&this.isNetworkFront()?void this.getDefaultLocation():!1},isNetworkFront:function(){return o.contains(["uk","us","au","international"],r.page.pageId)},getUserLocation:function(){var t=d.get(f);return t&&t.id?t:void 0},getWeatherData:function(t){return s({url:t,type:"json",method:"get",crossOrigin:!0})},saveUserLocation:function(t){d.set(f,{id:t.id,city:t.city})},getDefaultLocation:function(){var t=this.getUserLocation();return t?void this.fetchWeatherData(t):this.getWeatherData(r.page.weatherapiurl+".json").then(function(t){this.fetchWeatherData(t),u.trackLinkImmediate(!0,"o","weather location set by fastly")}.bind(this)).fail(function(t,e){n.captureException(new Error("Error retrieving city data ("+e+")"),{tags:{feature:"weather"}})})},fetchWeatherData:function(t){return this.getWeatherData(r.page.weatherapiurl+"/"+t.id+".json?_edition="+r.page.edition.toLowerCase()).then(function(e){this.render(e,t.city),this.fetchForecastData(t)}.bind(this)).fail(function(t,e){n.captureException(new Error("Error retrieving weather data ("+e+")"),{tags:{feature:"weather"}})})},clearLocation:function(){d.remove(f),h.setInputValue()},fetchForecastData:function(t){return this.getWeatherData(r.page.forecastsapiurl+"/"+t.id+".json?_edition="+r.page.edition.toLowerCase()).then(function(t){this.renderForecast(t)}.bind(this)).fail(function(t,e){n.captureException(new Error("Error retrieving forecast data ("+e+")"),{tags:{feature:"weather"}})})},saveDeleteLocalStorage:function(t){"set"===t.store?(this.saveUserLocation(t),this.fetchWeatherData(t)):"remove"===t.store&&(this.clearLocation(),this.getDefaultLocation())},bindEvents:function(){t.on(document.body,"click",".js-toggle-forecast",function(t){t.preventDefault(),this.toggleForecast()}.bind(this)),c.on("autocomplete:fetch",this.saveDeleteLocalStorage.bind(this))},toggleForecast:function(){i(".weather").toggleClass("is-expanded")},addSearch:function(){h=new m({container:i(".js-search-tool"),apiUrl:r.page.locationapiurl}),h.init()},render:function(t,e){this.attachToDOM(t.html,e),this.bindEvents(),this.addSearch(),this.render=function(t,e){this.attachToDOM(t.html,e),h.bindElements(i(".js-search-tool")),a.isBreakpoint({max:"phablet"})&&window.scrollTo(0,0)}},attachToDOM:function(t,e){p=i("#headlines .js-container__header"),r.switches.attachWeatherToTopContainer&&(p=i(i(".js-container__header")[0])),i(".js-weather",p).remove(),p.append(t.replace(new RegExp("<%=city%>","g"),e))},renderForecast:function(t){var e=i(".js-weather-forecast"),n=t.html;e.empty().html(n)}}}.call(this,t("npm:bean@1.0.15"),t("npm:qwery@3.4.2"),t("github:getsentry/raven-js@1.1.18"),t("common/utils/_"),t("common/utils/$"),t("common/utils/ajax"),t("common/utils/config"),t("common/utils/detect"),t("common/utils/mediator"),t("common/utils/template"),t("common/modules/analytics/omniture"),t("common/modules/user-prefs"),t("facia/modules/onwards/search-tool"))})}(),function(){function t(){}t.amd={},System.register("bootstraps/facia",["npm:bonzo@1.4.0","npm:qwery@3.4.2","common/utils/_","common/utils/$","common/utils/config","common/utils/detect","common/utils/mediator","common/utils/storage","common/utils/to-array","common/modules/accessibility/helpers","common/modules/experiments/ab","common/modules/business/stocks","facia/modules/onwards/geo-most-popular-front","facia/modules/ui/container-toggle","facia/modules/ui/container-show-more","facia/modules/ui/lazy-load-containers","facia/modules/ui/live-blog-updates","facia/modules/ui/slideshow/controller","facia/modules/ui/snaps","facia/modules/onwards/weather"],!1,function(t,e,n){return function(t,e,n,o,i,s,r,a,c,l,u,d,m,p,h,f,g,v,y,b){var w={showSnaps:function(){y.init(),r.on("modules:container:rendered",y.init)},showContainerShowMore:function(){r.addListeners({"modules:container:rendered":h.init,"page:front:ready":h.init})},showContainerToggle:function(){var t=function(t){o(".js-container--toggle",o(t||document)[0]).each(function(t){new p(t).addToggle()})};r.addListeners({"page:front:ready":t,"modules:geomostpopular:ready":n.partial(t,".js-popular-trails")})},upgradeMostPopularToGeo:function(){i.switches.geoMostPopular&&(new m).go()},showWeather:function(){i.switches.weather&&r.on("page:front:ready",function(){b.init()})},showLiveblogUpdates:function(){var t=i.page.pageId,e=n.contains(["uk","us","au"],t),o=n.contains(["sport","football"],i.page.section);s.isBreakpoint({max:"tablet"})||(i.switches.liveblogFrontUpdatesOther&&!o&&!e||i.switches.liveblogFrontUpdatesUk&&"uk"===t||i.switches.liveblogFrontUpdatesUs&&"us"===t||i.switches.liveblogFrontUpdatesAu&&"au"===t)&&r.on("page:front:ready",function(){g.show()})},startSlideshow:function(){s.isBreakpoint({min:"tablet"})&&r.on("page:front:ready",function(){v.init()})}},k=function(){this.initialised||(this.initialised=!0,l.shouldHideFlashingElements(),w.showSnaps(),w.showContainerShowMore(),w.showContainerToggle(),w.upgradeMostPopularToGeo(),f(),d(),w.showWeather(),w.showLiveblogUpdates(),w.startSlideshow()),r.emit("page:front:ready")};return{init:k}}.call(this,t("npm:bonzo@1.4.0"),t("npm:qwery@3.4.2"),t("common/utils/_"),t("common/utils/$"),t("common/utils/config"),t("common/utils/detect"),t("common/utils/mediator"),t("common/utils/storage"),t("common/utils/to-array"),t("common/modules/accessibility/helpers"),t("common/modules/experiments/ab"),t("common/modules/business/stocks"),t("facia/modules/onwards/geo-most-popular-front"),t("facia/modules/ui/container-toggle"),t("facia/modules/ui/container-show-more"),t("facia/modules/ui/lazy-load-containers"),t("facia/modules/ui/live-blog-updates"),t("facia/modules/ui/slideshow/controller"),t("facia/modules/ui/snaps"),t("facia/modules/onwards/weather"))})}();