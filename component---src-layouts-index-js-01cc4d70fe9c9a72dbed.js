webpackJsonp([0x67ef26645b2a,60335399758886],{124:function(e,t){e.exports={layoutContext:{}}},262:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},a=o(4),i=n(a),l=o(266),s=n(l),u=o(124),c=n(u);t.default=function(e){return i.default.createElement(s.default,r({},e,c.default))},e.exports=t.default},119:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(){return"undefined"==typeof E&&"undefined"!=typeof window&&window.IntersectionObserver&&(E=new window.IntersectionObserver(function(e){e.forEach(function(e){j.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(E.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),E}t.__esModule=!0;var a=o(26),i=n(a),l=o(35),s=n(l),u=o(34),c=n(u),f=o(88),d=n(f),p=o(87),h=n(p),m=o(4),y=n(m),b=o(222),g=n(b),v=function(e){var t=(0,h.default)({},e);return t.responsiveResolution&&(t.resolutions=t.responsiveResolution,delete t.responsiveResolution),t.responsiveSizes&&(t.sizes=t.responsiveSizes,delete t.responsiveSizes),t},w={},_=function(e){var t=v(e),o=t.sizes?t.sizes.src:t.resolutions.src;return!!w[o]||(w[o]=!0,!1)},E=void 0,j=[],O=function(e,t){r().observe(e),j.push([e,t])},S=null,L=function(){if(null!==S)return S;var e="undefined"!=typeof window?window.document.createElement("canvas"):{};return S=!(!e.getContext||!e.getContext("2d"))&&0===e.toDataURL("image/webp").indexOf("data:image/webp")},N=function(e){var t=e.opacity,o=void 0===t?"1":t,n=e.src,r=e.srcSet,a=e.sizes,i=void 0===a?"":a,l=e.title,s=void 0===l?"":l,u=e.alt,c=void 0===u?"":u,f=e.width,d=void 0===f?"":f,p=e.height,h=void 0===p?"":p,m=e.transitionDelay,y=void 0===m?"0.5s":m;return'<img width="'+d+'" height="'+h+'" src="'+n+'" srcset="'+r+'" alt="'+c+'" title="'+s+'" sizes="'+i+'" style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+y+";opacity:"+o+';width:100%;height:100%;object-fit:cover;object-position:center"/>'},k=function(e){var t=e.style,o=e.onLoad,n=(0,d.default)(e,["style","onLoad"]);return y.default.createElement("img",(0,h.default)({},n,{onLoad:o,style:(0,h.default)({position:"absolute",top:0,left:0,transition:"opacity 0.5s",width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},t)}))};k.propTypes={style:g.default.object,onLoad:g.default.func};var x=function(e){function t(o){(0,i.default)(this,t);var n=(0,s.default)(this,e.call(this,o)),r=!0,a=!0,l=!1,u=_(o);return!u&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,a=!1,l=!0),"undefined"==typeof window&&(r=!1,a=!1),n.state={isVisible:r,imgLoaded:a,IOSupported:l},n.handleRef=n.handleRef.bind(n),n}return(0,c.default)(t,e),t.prototype.handleRef=function(e){var t=this;this.state.IOSupported&&e&&O(e,function(){t.setState({isVisible:!0,imgLoaded:!1})})},t.prototype.render=function(){var e=this,t=v(this.props),o=t.title,n=t.alt,r=t.className,a=t.outerWrapperClassName,i=t.style,l=void 0===i?{}:i,s=t.imgStyle,u=void 0===s?{}:s,c=t.sizes,f=t.resolutions,d=t.backgroundColor,p=t.Tag,m=void 0;m="boolean"==typeof d?"lightgray":d;var b=(0,h.default)({opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"},u),g=(0,h.default)({opacity:this.state.imgLoaded||this.props.fadeIn===!1?1:0},u);if(c){var w=c;return w.srcWebp&&w.srcSetWebp&&L()&&(w.src=w.srcWebp,w.srcSet=w.srcSetWebp),y.default.createElement(p,{className:(a?a:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===l.position?"initial":"relative"}},y.default.createElement(p,{className:(r?r:"")+" gatsby-image-wrapper",style:(0,h.default)({position:"relative",overflow:"hidden"},l),ref:this.handleRef},y.default.createElement(p,{style:{width:"100%",paddingBottom:100/w.aspectRatio+"%"}}),w.base64&&y.default.createElement(k,{alt:n,title:o,src:w.base64,style:b}),w.tracedSVG&&y.default.createElement(k,{alt:n,title:o,src:w.tracedSVG,style:b}),m&&y.default.createElement(p,{title:o,style:{backgroundColor:m,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&y.default.createElement(k,{alt:n,title:o,srcSet:w.srcSet,src:w.src,sizes:w.sizes,style:g,onLoad:function(){e.state.IOSupported&&e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),y.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:N((0,h.default)({alt:n,title:o},w))}})))}if(f){var _=f,E=(0,h.default)({position:"relative",overflow:"hidden",display:"inline-block",width:_.width,height:_.height},l);return"inherit"===l.display&&delete E.display,_.srcWebp&&_.srcSetWebp&&L()&&(_.src=_.srcWebp,_.srcSet=_.srcSetWebp),y.default.createElement(p,{className:(a?a:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===l.position?"initial":"relative"}},y.default.createElement(p,{className:(r?r:"")+" gatsby-image-wrapper",style:E,ref:this.handleRef},_.base64&&y.default.createElement(k,{alt:n,title:o,src:_.base64,style:b}),_.tracedSVG&&y.default.createElement(k,{alt:n,title:o,src:_.tracedSVG,style:b}),m&&y.default.createElement(p,{title:o,style:{backgroundColor:m,width:_.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:_.height}}),this.state.isVisible&&y.default.createElement(k,{alt:n,title:o,width:_.width,height:_.height,srcSet:_.srcSet,src:_.src,style:g,onLoad:function(){e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),y.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:N((0,h.default)({alt:n,title:o,width:_.width,height:_.height},_))}})))}return null},t}(y.default.Component);x.defaultProps={fadeIn:!0,alt:"",Tag:"div"},x.propTypes={responsiveResolution:g.default.object,responsiveSizes:g.default.object,resolutions:g.default.object,sizes:g.default.object,fadeIn:g.default.bool,title:g.default.string,alt:g.default.string,className:g.default.oneOfType([g.default.string,g.default.object]),outerWrapperClassName:g.default.oneOfType([g.default.string,g.default.object]),style:g.default.object,imgStyle:g.default.object,position:g.default.string,backgroundColor:g.default.oneOfType([g.default.string,g.default.bool]),onLoad:g.default.func,Tag:g.default.string},t.default=x},354:function(e,t){},265:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),s=o(4),u=n(s),c=o(25),f=(n(c),o(351)),d=n(f),p=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),l(t,[{key:"render",value:function(){return u.default.createElement("footer",{className:d.default.footer},u.default.createElement("small",{className:d.default.small+" wrapper"},u.default.createElement("div",null,"Copyright © 2018."),u.default.createElement("div",null,"If you would like to use our images please ",u.default.createElement("a",{href:"mailto:dissosours@gmail.com"},"contact us"),"."),u.default.createElement("div",null,"Content not to be used without our permission.")))}}]),t}(u.default.Component);t.default=p,e.exports=t.default},351:function(e,t){e.exports={footer:"src-components-footer----footer-module---footer---1sNjJ",small:"src-components-footer----footer-module---small---3uSsj"}},86:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),s=o(4),u=n(s),c=o(25),f=n(c),d=o(117),p=n(d),h=o(191),m=n(h),y=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),l(t,[{key:"render",value:function(){return u.default.createElement("header",{style:{backgroundImage:"url("+m.default+")"},className:p.default.header+" "+(this.props.isRoot?p.default.headerBg:null)},u.default.createElement("div",{className:p.default.imageWrap},this.props.children),u.default.createElement(f.default,{className:p.default.link,to:"/"},this.props.isRoot?u.default.createElement("h1",{className:p.default.title},this.props.title):u.default.createElement("h3",{className:p.default.title},this.props.title)))}}]),t}(u.default.Component);t.default=y,e.exports=t.default},117:function(e,t){e.exports={header:"src-components-header----header-module---header---2_vNE",headerBg:"src-components-header----header-module---headerBg---3Jhf4",link:"src-components-header----header-module---link---2ZnAy",title:"src-components-header----header-module---title---3GSGs",imageWrap:"src-components-header----header-module---imageWrap---1GNFj"}},355:function(e,t){},588:function(e,t,o){e.exports=o.p+"static/escadaria-selaron.d9b9d589.jpg"},266:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),s=o(4),u=n(s),c=o(25),f=(n(c),o(119)),d=(n(f),o(354)),p=(n(d),o(355)),h=(n(p),o(86)),m=n(h),y=o(265),b=n(y),g=o(588),v=(n(g),function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),l(t,[{key:"render",value:function(){var e=this.props,t=e.location,o=e.children,n="/";n="/";var r=t.pathname===n;return u.default.createElement("main",{className:"content"},r?u.default.createElement(m.default,{title:"ourbucketl.ist",isRoot:r}):null,o(),u.default.createElement(b.default,null))}}]),t}(u.default.Component));t.default=v,e.exports=t.default},191:function(e,t,o){e.exports=o.p+"static/te-puia-geyser.9dcb76c6.jpg"}});
//# sourceMappingURL=component---src-layouts-index-js-01cc4d70fe9c9a72dbed.js.map