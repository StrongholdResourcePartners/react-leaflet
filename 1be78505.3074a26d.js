(window.webpackJsonp=window.webpackJsonp||[]).push([[9,34],{113:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(108);n.default=function(){return a.a.createElement(c.a,{title:"Page Not Found"},a.a.createElement("div",{className:"container margin-vert--xl"},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col col--6 col--offset-3"},a.a.createElement("h1",{className:"hero__title"},"Page Not Found"),a.a.createElement("p",null,"We could not find what you were looking for."),a.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}},130:function(e,n,t){"use strict";var r={};t.r(r),t.d(r,"updateCircle",(function(){return c})),t.d(r,"createContainerComponent",(function(){return p})),t.d(r,"createDivOverlayComponent",(function(){return m})),t.d(r,"createLeafComponent",(function(){return b})),t.d(r,"CONTEXT_VERSION",(function(){return l})),t.d(r,"LeafletContext",(function(){return s})),t.d(r,"LeafletProvider",(function(){return f})),t.d(r,"useLeafletContext",(function(){return d})),t.d(r,"createControlHook",(function(){return v})),t.d(r,"createDivOverlayHook",(function(){return y})),t.d(r,"addClassName",(function(){return g})),t.d(r,"removeClassName",(function(){return C})),t.d(r,"updateClassName",(function(){return E})),t.d(r,"createElementHook",(function(){return w})),t.d(r,"useEventHandlers",(function(){return O})),t.d(r,"createControlComponent",(function(){return I})),t.d(r,"createLayerComponent",(function(){return M})),t.d(r,"createOverlayComponent",(function(){return _})),t.d(r,"createPathComponent",(function(){return R})),t.d(r,"createTileLayerComponent",(function(){return S})),t.d(r,"updateGridLayer",(function(){return T})),t.d(r,"createLayerHook",(function(){return P})),t.d(r,"useAttribution",(function(){return k})),t.d(r,"useLayerLifecycle",(function(){return x})),t.d(r,"updateMediaOverlay",(function(){return H})),t.d(r,"createPathHook",(function(){return N})),t.d(r,"usePathOptions",(function(){return L}));var a={};function c(e,n,t){n.center!==t.center&&e.setLatLng(n.center),null!=n.radius&&n.radius!==t.radius&&e.setRadius(n.radius)}t.r(a),t.d(a,"useMap",(function(){return A})),t.d(a,"useMapEvent",(function(){return D})),t.d(a,"useMapEvents",(function(){return z})),t.d(a,"AttributionControl",(function(){return B})),t.d(a,"Circle",(function(){return U})),t.d(a,"CircleMarker",(function(){return V})),t.d(a,"FeatureGroup",(function(){return W})),t.d(a,"GeoJSON",(function(){return F})),t.d(a,"ImageOverlay",(function(){return Z})),t.d(a,"LayerGroup",(function(){return J})),t.d(a,"LayersControl",(function(){return X})),t.d(a,"MapConsumer",(function(){return q})),t.d(a,"MapContainer",(function(){return K})),t.d(a,"Marker",(function(){return Q})),t.d(a,"Pane",(function(){return re})),t.d(a,"Polygon",(function(){return ae})),t.d(a,"Polyline",(function(){return ce})),t.d(a,"Popup",(function(){return oe})),t.d(a,"Rectangle",(function(){return ue})),t.d(a,"ScaleControl",(function(){return ie})),t.d(a,"SVGOverlay",(function(){return fe})),t.d(a,"TileLayer",(function(){return de})),t.d(a,"Tooltip",(function(){return pe})),t.d(a,"VideoOverlay",(function(){return me})),t.d(a,"WMSTileLayer",(function(){return be})),t.d(a,"ZoomControl",(function(){return ve}));var o=t(0),u=t.n(o),i=t(20),l=1,s=Object(o.createContext)(null),f=s.Provider;function d(){var e=Object(o.useContext)(s);if(null==e)throw new Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");return e}function p(e){function n(n,t){var r=e(n).current,a=r.instance,c=r.context;return Object(o.useImperativeHandle)(t,(function(){return a})),null==n.children?null:u.a.createElement(f,{value:c},n.children)}return Object(o.forwardRef)(n)}function m(e){function n(n,t){var r=Object(o.useState)(!1),a=r[0],c=r[1],u=e(n,c).current.instance;Object(o.useImperativeHandle)(t,(function(){return u})),Object(o.useEffect)((function(){a&&u.update()}),[u,a,n.children]);var l=u._contentNode;return l?Object(i.createPortal)(n.children,l):null}return Object(o.forwardRef)(n)}function b(e){function n(n,t){var r=e(n).current.instance;return Object(o.useImperativeHandle)(t,(function(){return r})),null}return Object(o.forwardRef)(n)}function v(e){return function(n){var t=d(),r=e(n,t),a=r.current.instance,c=Object(o.useRef)(n.position),u=n.position;return Object(o.useEffect)((function(){return a.addTo(t.map),function(){a.remove()}}),[t.map,a]),Object(o.useEffect)((function(){null!=u&&u!==c.current&&(a.setPosition(u),c.current=u)}),[a,u]),r}}function O(e,n){var t=Object(o.useRef)();Object(o.useEffect)((function(){return null!=n&&e.instance.on(n),t.current=n,function(){null!=t.current&&e.instance.off(t.current),t.current=null}}),[e,n])}function y(e,n){return function(t,r){var a=d(),c=e(t,a);return O(c.current,t.eventHandlers),n(c.current,a,t,r),c}}var h=t(92);function j(e){return e.split(" ").filter(Boolean)}function g(e,n){j(n).forEach((function(n){h.DomUtil.addClass(e,n)}))}function C(e,n){j(n).forEach((function(n){h.DomUtil.removeClass(e,n)}))}function E(e,n,t){null!=e&&t!==n&&(null!=n&&n.length>0&&C(e,n),null!=t&&t.length>0&&g(e,t))}function w(e,n){return null==n?function(n,t){return Object(o.useRef)(e(n,t))}:function(t,r){var a=Object(o.useRef)(e(t,r)),c=Object(o.useRef)(t),u=a.current.instance;return Object(o.useEffect)((function(){c.current!==t&&(n(u,t,c.current),c.current=t)}),[u,t,r]),a}}function k(e,n){var t=Object(o.useRef)(n);Object(o.useEffect)((function(){n!==t.current&&null!=e.attributionControl&&(null!=t.current&&e.attributionControl.removeAttribution(t.current),null!=n&&e.attributionControl.addAttribution(n)),t.current=n}),[e,n])}function x(e,n){Object(o.useEffect)((function(){var t,r=null!=(t=n.layerContainer)?t:n.map;return r.addLayer(e.instance),function(){r.removeLayer(e.instance)}}),[n,e])}function P(e){return function(n){var t=d(),r=e(n,t);return k(t.map,n.attribution),O(r.current,n.eventHandlers),x(r.current,t),r}}function L(e,n){var t=Object(o.useRef)();Object(o.useEffect)((function(){if(n.pathOptions!==t.current){var r,a=null!=(r=n.pathOptions)?r:{};e.instance.setStyle(a),t.current=a}}),[e,n])}function N(e){return function(n){var t=d(),r=e(n,t);return O(r.current,n.eventHandlers),x(r.current,t),L(r.current,n),r}}function I(e){return b(v(w((function(n,t){return{instance:e(n),context:t}}))))}function M(e,n){return p(P(w(e,n)))}function _(e,n){return m(y(w(e),n))}function R(e,n){return p(N(w(e,n)))}function S(e,n){return b(P(w(e,n)))}function T(e,n,t){var r=n.opacity,a=n.zIndex;null!=r&&r!==t.opacity&&e.setOpacity(r),null!=a&&a!==t.zIndex&&e.setZIndex(a)}function H(e,n,t){n.bounds instanceof h.LatLngBounds&&n.bounds!==t.bounds&&e.setBounds(n.bounds),null!=n.opacity&&n.opacity!==t.opacity&&e.setOpacity(n.opacity),null!=n.zIndex&&n.zIndex!==t.zIndex&&e.setZIndex(n.zIndex)}function A(){return d().map}function D(e,n){var t=A();return Object(o.useEffect)((function(){return t.on(e,n),function(){t.off(e,n)}}),[t,e,n]),t}function z(e){var n=A();return Object(o.useEffect)((function(){return n.on(e),function(){n.off(e)}}),[n,e]),n}var B=I((function(e){return new h.Control.Attribution(e)})),G=t(6),U=R((function(e,n){var t=e.center,r=(e.children,Object(G.a)(e,["center","children"])),a=new h.Circle(t,r);return{instance:a,context:Object.assign({},n,{overlayContainer:a})}}),c),V=R((function(e,n){var t=e.center,r=(e.children,Object(G.a)(e,["center","children"])),a=new h.CircleMarker(t,r);return{instance:a,context:Object.assign({},n,{overlayContainer:a})}}),c),W=R((function(e,n){e.children;var t=Object(G.a)(e,["children"]),r=new h.FeatureGroup([],t);return{instance:r,context:Object.assign({},n,{layerContainer:r,overlayContainer:r})}})),F=R((function(e,n){var t=e.data,r=Object(G.a)(e,["data"]),a=new h.GeoJSON(t,r);return{instance:a,context:Object.assign({},n,{overlayContainer:a})}})),Z=M((function(e,n){var t=e.bounds,r=e.url,a=Object(G.a)(e,["bounds","url"]),c=new h.ImageOverlay(r,t,a);return{instance:c,context:Object.assign({},n,{overlayContainer:c})}}),(function(e,n,t){H(e,n,t),n.url!==t.url&&e.setUrl(n.url)})),J=M((function(e,n){e.children;var t=Object(G.a)(e,["children"]),r=new h.LayerGroup([],t);return{instance:r,context:Object.assign({},n,{layerContainer:r})}})),X=p(v(w((function(e,n){e.children;var t=Object(G.a)(e,["children"]),r=new h.Control.Layers(void 0,void 0,t);return{instance:r,context:Object.assign({},n,{layersControl:r})}}),(function(e,n,t){n.collapsed!==t.collapsed&&(!0===n.collapsed?e.collapse():e.expand())}))));function Y(e){return function(n){var t=d(),r=Object(o.useRef)(n),a=Object(o.useState)(null),c=a[0],i=a[1],l=t.layersControl,s=t.map,p=Object(o.useCallback)((function(n){null!=l&&(r.current.checked&&s.addLayer(n),e(l,n,r.current.name),i(n))}),[l,s]),m=Object(o.useCallback)((function(e){null==l||l.removeLayer(e),i(null)}),[l]),b=Object(o.useMemo)((function(){return Object.assign({},t,{layerContainer:{addLayer:p,removeLayer:m}})}),[t,p,m]);return Object(o.useEffect)((function(){null!==c&&r.current!==n&&(!0!==n.checked||null!=r.current.checked&&!1!==r.current.checked?!0!==r.current.checked||null!=n.checked&&!1!==n.checked||s.removeLayer(c):s.addLayer(c),r.current=n)})),n.children?u.a.createElement(f,{value:b},n.children):null}}function q(e){return(0,e.children)(A())}function K(e){var n=e.children,t=e.className,r=e.id,a=e.placeholder,c=e.style,i=e.whenCreated,s=Object(G.a)(e,["children","className","id","placeholder","style","whenCreated"]),d=Object(o.useRef)(null),p=function(e,n){var t=Object(o.useState)(null),r=t[0],a=t[1];return Object(o.useEffect)((function(){if(null!==e.current&&null===r){var t=new h.Map(e.current,n);null!=n.center&&null!=n.zoom?t.setView(n.center,n.zoom):null!=n.bounds&&t.fitBounds(n.bounds,n.boundsOptions),null!=n.whenReady&&t.whenReady(n.whenReady),a(t)}}),[e,r,n]),r}(d,s),m=Object(o.useRef)(!1);Object(o.useEffect)((function(){null!=p&&!1===m.current&&null!=i&&(m.current=!0,i(p))}),[p,i]);var b=Object(o.useMemo)((function(){return p?{__version:l,map:p}:null}),[p]),v=b?u.a.createElement(f,{value:b},n):null!=a?a:null;return u.a.createElement("div",{ref:d,className:t,id:r,style:c},v)}X.BaseLayer=Y((function(e,n,t){e.addBaseLayer(n,t)})),X.Overlay=Y((function(e,n,t){e.addOverlay(n,t)}));var Q=M((function(e,n){var t=e.position,r=Object(G.a)(e,["position"]),a=new h.Marker(t,r);return{instance:a,context:Object.assign({},n,{overlayContainer:a})}}),(function(e,n,t){n.position!==t.position&&e.setLatLng(n.position),null!=n.icon&&n.icon!==t.icon&&e.setIcon(n.icon),null!=n.zIndexOffset&&n.zIndexOffset!==t.zIndexOffset&&e.setZIndexOffset(n.zIndexOffset),null!=n.opacity&&n.opacity!==t.opacity&&e.setOpacity(n.opacity),null!=e.dragging&&n.draggable!==t.draggable&&(!0===n.draggable?e.dragging.enable():e.dragging.disable())})),$=t(133),ee=["mapPane","markerPane","overlayPane","popupPane","shadowPane","tilePane","tooltipPane"],ne={position:"absolute",top:0,right:0,bottom:0,left:0};function te(e,n){e[n];return Object(G.a)(e,[n].map($.a))}function re(e){var n=d(),t=Object(o.useRef)(null),r=Object(o.useRef)(e);function a(n){null!=e.className&&g(n,e.className),null!=e.style&&Object.keys(e.style).forEach((function(t){n.style[t]=e.style[t]}))}function c(){var r=e.name;if(-1!==ee.indexOf(r))throw new Error("You must use a unique name for a pane that is not a default Leaflet pane: "+r);if(null!=n.map.getPane(r))throw new Error("A pane with this name already exists: "+r);var c=n.pane?n.map.getPane(n.pane):void 0;t.current=n.map.createPane(r,c),a(t.current)}function i(e){var t=n.map.getPane(e);null==t||null==t.remove||t.remove(),null!=n.map._panes&&(n.map._panes=te(n.map._panes,e),n.map._paneRenderers=te(n.map._paneRenderers,e))}Object(o.useEffect)((function(){return null===t.current?c():e!==r.current&&(e.name===r.current.name?(r.current.className&&e.className!==r.current.className&&C(t.current,r.current.className),a(t.current)):(i(r.current.name),c())),function(){i(e.name)}}));var l=Object(o.useMemo)((function(){return Object.assign({},n,{pane:e.name})}),[n,e.name]);return e.children?u.a.createElement(f,{value:l},u.a.createElement("div",{style:ne},e.children)):null}var ae=R((function(e,n){var t=e.positions,r=Object(G.a)(e,["positions"]),a=new h.Polygon(t,r);return{instance:a,context:Object.assign({},n,{overlayContainer:a})}}),(function(e,n,t){n.positions!==t.positions&&e.setLatLngs(n.positions)})),ce=R((function(e,n){var t=e.positions,r=Object(G.a)(e,["positions"]),a=new h.Polyline(t,r);return{instance:a,context:Object.assign({},n,{overlayContainer:a})}}),(function(e,n,t){n.positions!==t.positions&&e.setLatLngs(n.positions)})),oe=_((function(e,n){return{instance:new h.Popup(e,n.overlayContainer),context:n}}),(function(e,n,t,r){var a=t.onClose,c=t.onOpen,u=t.position;Object(o.useEffect)((function(){var t=e.instance;function o(e){e.popup===t&&(t.update(),r(!0),null==c||c())}function i(e){e.popup===t&&(r(!1),null==a||a())}return n.map.on({popupopen:o,popupclose:i}),null==n.overlayContainer?(null!=u&&t.setLatLng(u),t.openOn(n.map)):n.overlayContainer.bindPopup(t),function(){n.map.off({popupopen:o,popupclose:i}),null==n.overlayContainer?n.map.removeLayer(t):n.overlayContainer.unbindPopup()}}),[e,n,r,a,c,u])})),ue=R((function(e,n){var t=e.bounds,r=Object(G.a)(e,["bounds"]),a=new h.Rectangle(t,r);return{instance:a,context:Object.assign({},n,{overlayContainer:a})}}),(function(e,n,t){n.bounds!==t.bounds&&e.setBounds(n.bounds)})),ie=I((function(e){return new h.Control.Scale(e)})),le=P(w((function(e,n){var t=e.attributes,r=e.bounds,a=Object(G.a)(e,["attributes","bounds"]),c=document.createElementNS("http://www.w3.org/2000/svg","svg");return c.setAttribute("xmlns","http://www.w3.org/2000/svg"),null!=t&&Object.keys(t).forEach((function(e){c.setAttribute(e,t[e])})),{instance:new h.SVGOverlay(c,r,a),container:c,context:n}}),H));function se(e,n){var t=e.children,r=Object(G.a)(e,["children"]),a=le(r).current,c=a.instance,u=a.container;return Object(o.useImperativeHandle)(n,(function(){return c})),null==u||null==t?null:Object(i.createPortal)(t,u)}var fe=Object(o.forwardRef)(se),de=S((function(e,n){var t=e.url,r=Object(G.a)(e,["url"]);return{instance:new h.TileLayer(t,r),context:n}}),T),pe=_((function(e,n){return{instance:new h.Tooltip(e,n.overlayContainer),context:n}}),(function(e,n,t,r){var a=t.onClose,c=t.onOpen;Object(o.useEffect)((function(){var t=n.overlayContainer;if(null!=t){var o=e.instance,u=function(e){e.tooltip===o&&(o.update(),r(!0),null==c||c())},i=function(e){e.tooltip===o&&(r(!1),null==a||a())};return t.on({tooltipopen:u,tooltipclose:i}),t.bindTooltip(o),function(){t.off({tooltipopen:u,tooltipclose:i}),t.unbindTooltip()}}}),[e,n,r,a,c])})),me=M((function(e,n){var t,r=e.bounds,a=e.url,c=Object(G.a)(e,["bounds","url"]),o=new h.VideoOverlay(a,r,c);!0===c.play&&(null==(t=o.getElement())||t.play());return{instance:o,context:Object.assign({},n,{overlayContainer:o})}}),(function(e,n,t){H(e,n,t),"string"==typeof n.url&&n.url!==t.url&&e.setUrl(n.url);var r=e.getElement();null!=r&&(!0!==n.play||t.play?n.play||!0!==t.play||r.pause():r.play())})),be=S((function(e,n){var t=e.params,r=void 0===t?{}:t,a=e.url,c=Object(G.a)(e,["params","url"]);return{instance:new h.TileLayer.WMS(a,Object.assign({},r,c)),context:n}}),(function(e,n,t){T(e,n,t),null!=n.params&&n.params!==t.params&&e.setParams(n.params)})),ve=I((function(e){return new h.Control.Zoom(e)})),Oe=Object.assign({L:h,React:u.a},r,u.a,a);n.a=Oe},89:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(91),o=t(95),u=t(23),i=t(108),l=t(2),s=t(93),f=t(94),d=t(120),p=t(100),m=t(117),b=t(118),v=t(119),O=t(116),y=t(97),h=t(102),j=t(58),g=t.n(j);const C=(e,n)=>"link"===e.type?Object(d.a)(e.href,n):"category"===e.type&&e.items.some((e=>C(e,n)));function E({item:e,onItemClick:n,collapsible:t,activePath:c,...o}){const{items:u,label:i}=e,f=C(e,c),d=function(e){const n=Object(r.useRef)(e);return Object(r.useEffect)((()=>{n.current=e}),[e]),n.current}(f),[p,m]=Object(r.useState)((()=>!!t&&(!f&&e.collapsed)));Object(r.useEffect)((()=>{f&&!d&&p&&m(!1)}),[f,d,p]);const b=Object(r.useCallback)((e=>{e.preventDefault(),m((e=>!e))}),[m]);return 0===u.length?null:a.a.createElement("li",{className:Object(s.a)("menu__list-item",{"menu__list-item--collapsed":p}),key:i},a.a.createElement("a",Object(l.a)({className:Object(s.a)("menu__link",{"menu__link--sublist":t,"menu__link--active":t&&f,[g.a.menuLinkText]:!t}),onClick:t?b:void 0,href:t?"#!":void 0},o),i),a.a.createElement("ul",{className:"menu__list"},u.map((e=>a.a.createElement(k,{tabIndex:p?"-1":"0",key:e.label,item:e,onItemClick:n,collapsible:t,activePath:c})))))}function w({item:e,onItemClick:n,activePath:t,collapsible:r,...c}){const{href:o,label:u}=e,i=C(e,t);return a.a.createElement("li",{className:"menu__list-item",key:u},a.a.createElement(y.a,Object(l.a)({className:Object(s.a)("menu__link",{"menu__link--active":i}),to:o},Object(h.a)(o)?{isNavLink:!0,exact:!0,onClick:n}:{target:"_blank",rel:"noreferrer noopener"},c),u))}function k(e){switch(e.item.type){case"category":return a.a.createElement(E,e);case"link":default:return a.a.createElement(w,e)}}var x=function({path:e,sidebar:n,sidebarCollapsible:t=!0}){const[c,u]=Object(r.useState)(!1),{navbar:{title:i,hideOnScroll:d}}=Object(f.a)(),{isClient:h}=Object(o.a)(),{logoLink:j,logoLinkProps:C,logoImageUrl:E,logoAlt:w}=Object(v.a)(),{isAnnouncementBarClosed:x}=Object(p.a)(),{scrollY:P}=Object(O.a)();Object(m.a)(c);const L=Object(b.a)();return Object(r.useEffect)((()=>{L===b.b.desktop&&u(!1)}),[L]),a.a.createElement("div",{className:Object(s.a)(g.a.sidebar,{[g.a.sidebarWithHideableNavbar]:d})},d&&a.a.createElement(y.a,Object(l.a)({tabIndex:-1,className:g.a.sidebarLogo,to:j},C),null!=E&&a.a.createElement("img",{key:h,src:E,alt:w}),null!=i&&a.a.createElement("strong",null,i)),a.a.createElement("div",{className:Object(s.a)("menu","menu--responsive",g.a.menu,{"menu--show":c,[g.a.menuWithAnnouncementBar]:!x&&0===P})},a.a.createElement("button",{"aria-label":c?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:()=>{u(!c)}},c?a.a.createElement("span",{className:Object(s.a)(g.a.sidebarMenuIcon,g.a.sidebarMenuCloseIcon)},"\xd7"):a.a.createElement("svg",{"aria-label":"Menu",className:g.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},a.a.createElement("title",null,"Menu"),a.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),a.a.createElement("ul",{className:"menu__list"},n.map((n=>a.a.createElement(k,{key:n.label,item:n,onItemClick:e=>{e.target.blur(),u(!1)},collapsible:t,activePath:e}))))))},P=t(131),L=(t(61),t(62)),N=t.n(L);var I=e=>function({id:n,...t}){const{navbar:{hideOnScroll:r}}=Object(f.a)();return n?a.a.createElement(e,t,a.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(s.a)("anchor",{[N.a.enhancedAnchor]:!r}),id:n}),t.children,a.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:"hash-link",href:"#"+n,title:"Direct link to heading"},"#")):a.a.createElement(e,t)},M=t(63),_=t.n(M);var R={code:e=>{const{children:n}=e;return"string"==typeof n?n.includes("\n")?a.a.createElement(P.a,e):a.a.createElement("code",e):n},a:e=>a.a.createElement(y.a,e),pre:e=>a.a.createElement("div",Object(l.a)({className:_.a.mdxCodeBlock},e)),h1:I("h1"),h2:I("h2"),h3:I("h3"),h4:I("h4"),h5:I("h5"),h6:I("h6")},S=t(113),T=t(99),H=t(64),A=t.n(H),D=t(121);function z({currentDocRoute:e,versionMetadata:n,children:t}){var r,u;const{siteConfig:l,isClient:s}=Object(o.a)(),{pluginId:f,permalinkToSidebar:d,docsSidebars:p,version:m}=n,b=d[e.path],v=p[b];return a.a.createElement(i.a,{key:s,searchMetadatas:{version:m,tag:Object(D.b)(f,m)}},a.a.createElement("div",{className:A.a.docPage},v&&a.a.createElement("div",{className:A.a.docSidebarContainer,role:"complementary"},a.a.createElement(x,{key:b,sidebar:v,path:e.path,sidebarCollapsible:null===(r=null===(u=l.themeConfig)||void 0===u?void 0:u.sidebarCollapsible)||void 0===r||r})),a.a.createElement("main",{className:A.a.docMainContainer},a.a.createElement(c.a,{components:R},t))))}n.default=function(e){const{route:{routes:n},versionMetadata:t,location:r}=e,c=n.find((e=>Object(T.matchPath)(r.pathname,e)));return c?a.a.createElement(z,{currentDocRoute:c,versionMetadata:t},Object(u.a)(n)):a.a.createElement(S.default,e)}},91:function(e,n,t){"use strict";t.d(n,"a",(function(){return f})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),s=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},f=function(e){var n=s(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},p=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=s(t),p=r,m=f["".concat(o,".").concat(p)]||f[p]||d[p]||c;return t?a.a.createElement(m,u(u({ref:n},l),{},{components:t})):a.a.createElement(m,u({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,o=new Array(c);o[0]=p;var u={};for(var i in n)hasOwnProperty.call(n,i)&&(u[i]=n[i]);u.originalType=e,u.mdxType="string"==typeof e?e:r,o[1]=u;for(var l=2;l<c;l++)o[l]=t[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);