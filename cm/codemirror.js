/*! jQuery v1.11.2 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.2",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b=a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=hb(),z=hb(),A=hb(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},eb=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fb){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function gb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+rb(o[l]);w=ab.test(a)&&pb(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function hb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ib(a){return a[u]=!0,a}function jb(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function kb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function lb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function nb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function ob(a){return ib(function(b){return b=+b,ib(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pb(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=gb.support={},f=gb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=gb.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",eb,!1):e.attachEvent&&e.attachEvent("onunload",eb)),p=!f(g),c.attributes=jb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=jb(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=jb(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(jb(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),jb(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&jb(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return lb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?lb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},gb.matches=function(a,b){return gb(a,null,null,b)},gb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return gb(b,n,null,[a]).length>0},gb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},gb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},gb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},gb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=gb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=gb.selectors={cacheLength:50,createPseudo:ib,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||gb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&gb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=gb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||gb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ib(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ib(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ib(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ib(function(a){return function(b){return gb(a,b).length>0}}),contains:ib(function(a){return a=a.replace(cb,db),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ib(function(a){return W.test(a||"")||gb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:ob(function(){return[0]}),last:ob(function(a,b){return[b-1]}),eq:ob(function(a,b,c){return[0>c?c+b:c]}),even:ob(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:ob(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:ob(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:ob(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=mb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=nb(b);function qb(){}qb.prototype=d.filters=d.pseudos,d.setFilters=new qb,g=gb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?gb.error(a):z(a,i).slice(0)};function rb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function tb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ub(a,b,c){for(var d=0,e=b.length;e>d;d++)gb(a,b[d],c);return c}function vb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wb(a,b,c,d,e,f){return d&&!d[u]&&(d=wb(d)),e&&!e[u]&&(e=wb(e,f)),ib(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ub(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:vb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=vb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=vb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sb(function(a){return a===b},h,!0),l=sb(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sb(tb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wb(i>1&&tb(m),i>1&&rb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xb(a.slice(i,e)),f>e&&xb(a=a.slice(e)),f>e&&rb(a))}m.push(c)}return tb(m)}function yb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=vb(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&gb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ib(f):f}return h=gb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,yb(e,d)),f.selector=a}return f},i=gb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&pb(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&rb(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&pb(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=jb(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),jb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||kb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&jb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||kb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),jb(function(a){return null==a.getAttribute("disabled")})||kb(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),gb}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;
return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function ab(){return!0}function bb(){return!1}function cb(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==cb()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===cb()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ab:bb):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:bb,isPropagationStopped:bb,isImmediatePropagationStopped:bb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ab,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ab,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ab,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=bb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=bb),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function db(a){var b=eb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var eb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fb=/ jQuery\d+="(?:null|\d+)"/g,gb=new RegExp("<(?:"+eb+")[\\s/>]","i"),hb=/^\s+/,ib=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,jb=/<([\w:]+)/,kb=/<tbody/i,lb=/<|&#?\w+;/,mb=/<(?:script|style|link)/i,nb=/checked\s*(?:[^=]|=\s*.checked.)/i,ob=/^$|\/(?:java|ecma)script/i,pb=/^true\/(.*)/,qb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,rb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sb=db(y),tb=sb.appendChild(y.createElement("div"));rb.optgroup=rb.option,rb.tbody=rb.tfoot=rb.colgroup=rb.caption=rb.thead,rb.th=rb.td;function ub(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ub(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function vb(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wb(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xb(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function yb(a){var b=pb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function zb(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Ab(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Bb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xb(b).text=a.text,yb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!gb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(tb.innerHTML=a.outerHTML,tb.removeChild(f=tb.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ub(f),h=ub(a),g=0;null!=(e=h[g]);++g)d[g]&&Bb(e,d[g]);if(b)if(c)for(h=h||ub(a),d=d||ub(f),g=0;null!=(e=h[g]);g++)Ab(e,d[g]);else Ab(a,f);return d=ub(f,"script"),d.length>0&&zb(d,!i&&ub(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=db(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(lb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(jb.exec(f)||["",""])[1].toLowerCase(),l=rb[i]||rb._default,h.innerHTML=l[1]+f.replace(ib,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&hb.test(f)&&p.push(b.createTextNode(hb.exec(f)[0])),!k.tbody){f="table"!==i||kb.test(f)?"<table>"!==l[1]||kb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ub(p,"input"),vb),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ub(o.appendChild(f),"script"),g&&zb(h),c)){e=0;while(f=h[e++])ob.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ub(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&zb(ub(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ub(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fb,""):void 0;if(!("string"!=typeof a||mb.test(a)||!k.htmlSerialize&&gb.test(a)||!k.leadingWhitespace&&hb.test(a)||rb[(jb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ib,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ub(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ub(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&nb.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ub(i,"script"),xb),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ub(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,yb),j=0;f>j;j++)d=g[j],ob.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qb,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Cb,Db={};function Eb(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fb(a){var b=y,c=Db[a];return c||(c=Eb(a,b),"none"!==c&&c||(Cb=(Cb||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Cb[0].contentWindow||Cb[0].contentDocument).document,b.write(),b.close(),c=Eb(a,b),Cb.detach()),Db[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Gb=/^margin/,Hb=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ib,Jb,Kb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ib=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Hb.test(g)&&Gb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ib=function(a){return a.currentStyle},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Hb.test(g)&&!Kb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Lb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight),b.removeChild(i)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Mb=/alpha\([^)]*\)/i,Nb=/opacity\s*=\s*([^)]*)/,Ob=/^(none|table(?!-c[ea]).+)/,Pb=new RegExp("^("+S+")(.*)$","i"),Qb=new RegExp("^([+-])=("+S+")","i"),Rb={position:"absolute",visibility:"hidden",display:"block"},Sb={letterSpacing:"0",fontWeight:"400"},Tb=["Webkit","O","Moz","ms"];function Ub(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Tb.length;while(e--)if(b=Tb[e]+c,b in a)return b;return d}function Vb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fb(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wb(a,b,c){var d=Pb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Yb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ib(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Jb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Hb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xb(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Jb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ub(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ub(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Jb(a,b,d)),"normal"===f&&b in Sb&&(f=Sb[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Ob.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Rb,function(){return Yb(a,b,d)}):Yb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ib(a);return Wb(a,c,d?Xb(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Nb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Mb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Mb.test(f)?f.replace(Mb,e):f+" "+e)}}),m.cssHooks.marginRight=Lb(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Jb,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Gb.test(a)||(m.cssHooks[a+b].set=Wb)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ib(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Vb(this,!0)},hide:function(){return Vb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Zb(a,b,c,d,e){return new Zb.prototype.init(a,b,c,d,e)
}m.Tween=Zb,Zb.prototype={constructor:Zb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")},cur:function(){var a=Zb.propHooks[this.prop];return a&&a.get?a.get(this):Zb.propHooks._default.get(this)},run:function(a){var b,c=Zb.propHooks[this.prop];return this.pos=b=this.options.duration?m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Zb.propHooks._default.set(this),this}},Zb.prototype.init.prototype=Zb.prototype,Zb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Zb.propHooks.scrollTop=Zb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Zb.prototype.init,m.fx.step={};var $b,_b,ac=/^(?:toggle|show|hide)$/,bc=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cc=/queueHooks$/,dc=[ic],ec={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bc.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bc.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fc(){return setTimeout(function(){$b=void 0}),$b=m.now()}function gc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hc(a,b,c){for(var d,e=(ec[b]||[]).concat(ec["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ic(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fb(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fb(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ac.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fb(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hc(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jc(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kc(a,b,c){var d,e,f=0,g=dc.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$b||fc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$b||fc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jc(k,j.opts.specialEasing);g>f;f++)if(d=dc[f].call(j,a,k,j.opts))return d;return m.map(k,hc,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kc,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],ec[c]=ec[c]||[],ec[c].unshift(b)},prefilter:function(a,b){b?dc.unshift(a):dc.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kc(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gc(b,!0),a,d,e)}}),m.each({slideDown:gc("show"),slideUp:gc("hide"),slideToggle:gc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($b=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$b=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_b||(_b=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_b),_b=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lc=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lc,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mc,nc,oc=m.expr.attrHandle,pc=/^(?:checked|selected)$/i,qc=k.getSetAttribute,rc=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nc:mc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rc&&qc||!pc.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qc?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nc={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rc&&qc||!pc.test(c)?a.setAttribute(!qc&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=oc[b]||m.find.attr;oc[b]=rc&&qc||!pc.test(b)?function(a,b,d){var e,f;return d||(f=oc[b],oc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,oc[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rc&&qc||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mc&&mc.set(a,b,c)}}),qc||(mc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},oc.id=oc.name=oc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mc.set},m.attrHooks.contenteditable={set:function(a,b,c){mc.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sc=/^(?:input|select|textarea|button|object)$/i,tc=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sc.test(a.nodeName)||tc.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var uc=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(uc," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vc=m.now(),wc=/\?/,xc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yc,zc,Ac=/#.*$/,Bc=/([?&])_=[^&]*/,Cc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Dc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ec=/^(?:GET|HEAD)$/,Fc=/^\/\//,Gc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hc={},Ic={},Jc="*/".concat("*");try{zc=location.href}catch(Kc){zc=y.createElement("a"),zc.href="",zc=zc.href}yc=Gc.exec(zc.toLowerCase())||[];function Lc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mc(a,b,c,d){var e={},f=a===Ic;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nc(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Oc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zc,type:"GET",isLocal:Dc.test(yc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nc(Nc(a,m.ajaxSettings),b):Nc(m.ajaxSettings,a)},ajaxPrefilter:Lc(Hc),ajaxTransport:Lc(Ic),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zc)+"").replace(Ac,"").replace(Fc,yc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yc[1]&&c[2]===yc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yc[3]||("http:"===yc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mc(Hc,k,b,v),2===t)return v;h=m.event&&k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Ec.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bc.test(e)?e.replace(Bc,"$1_="+vc++):e+(wc.test(e)?"&":"?")+"_="+vc++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mc(Ic,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Oc(k,v,c)),u=Pc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qc=/%20/g,Rc=/\[\]$/,Sc=/\r?\n/g,Tc=/^(?:submit|button|image|reset|file)$/i,Uc=/^(?:input|select|textarea|keygen)/i;function Vc(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rc.test(a)?d(a,e):Vc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vc(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vc(c,a[c],b,e);return d.join("&").replace(Qc,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Uc.test(this.nodeName)&&!Tc.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sc,"\r\n")}}):{name:b.name,value:c.replace(Sc,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zc()||$c()}:Zc;var Wc=0,Xc={},Yc=m.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Xc)Xc[a](void 0,!0)}),k.cors=!!Yc&&"withCredentials"in Yc,Yc=k.ajax=!!Yc,Yc&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xc[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zc(){try{return new a.XMLHttpRequest}catch(b){}}function $c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _c=[],ad=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_c.pop()||m.expando+"_"+vc++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ad.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ad.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ad,"$1"+e):b.jsonp!==!1&&(b.url+=(wc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_c.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bd=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bd)return bd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cd=a.document.documentElement;function dd(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dd(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cd;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cd})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dd(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=Lb(k.pixelPosition,function(a,c){return c?(c=Jb(a,b),Hb.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ed=a.jQuery,fd=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fd),b&&a.jQuery===m&&(a.jQuery=ed),m},typeof b===K&&(a.jQuery=a.$=m),m});


!function(a){if("object"==typeof exports&&"object"==typeof module)module.exports=a();else{if("function"==typeof define&&define.amd)return define([],a);this.CodeMirror=a()}}(function(){"use strict";function v(a,b){if(!(this instanceof v))return new v(a,b);this.options=b=b?ch(b):{},ch(ve,b,!1),I(b);var c=b.value;"string"==typeof c&&(c=new Yf(c,b.mode)),this.doc=c;var g=new v.inputStyles[b.inputStyle](this),h=this.display=new w(a,c,g);h.wrapper.CodeMirror=this,E(this),C(this),b.lineWrapping&&(this.display.wrapper.className+=" CodeMirror-wrap"),b.autofocus&&!n&&h.input.focus(),M(this),this.state={keyMaps:[],overlays:[],modeGen:0,overwrite:!1,delayingBlurEvent:!1,focused:!1,suppressEdits:!1,pasteIncoming:!1,cutIncoming:!1,draggingText:!1,highlight:new Tg,keySeq:null,specialChars:null};var i=this;d&&11>e&&setTimeout(function(){i.display.input.reset(!0)},20),nd(this),wh(),Tc(this),this.curOp.forceUpdate=!0,ag(this,c),b.autofocus&&!n||i.hasFocus()?setTimeout(dh(Ud,this),20):Vd(this);for(var j in we)we.hasOwnProperty(j)&&we[j](this,b[j],ye);R(this),b.finishInit&&b.finishInit(this);for(var k=0;k<Ce.length;++k)Ce[k](this);Vc(this),f&&b.lineWrapping&&"optimizelegibility"==getComputedStyle(h.lineDiv).textRendering&&(h.lineDiv.style.textRendering="auto")}function w(b,c,g){var h=this;this.input=g,h.scrollbarFiller=kh("div",null,"CodeMirror-scrollbar-filler"),h.scrollbarFiller.setAttribute("cm-not-content","true"),h.gutterFiller=kh("div",null,"CodeMirror-gutter-filler"),h.gutterFiller.setAttribute("cm-not-content","true"),h.lineDiv=kh("div",null,"CodeMirror-code"),h.selectionDiv=kh("div",null,null,"position: relative; z-index: 1"),h.cursorDiv=kh("div",null,"CodeMirror-cursors"),h.measure=kh("div",null,"CodeMirror-measure"),h.lineMeasure=kh("div",null,"CodeMirror-measure"),h.lineSpace=kh("div",[h.measure,h.lineMeasure,h.selectionDiv,h.cursorDiv,h.lineDiv],null,"position: relative; outline: none"),h.mover=kh("div",[kh("div",[h.lineSpace],"CodeMirror-lines")],null,"position: relative"),h.sizer=kh("div",[h.mover],"CodeMirror-sizer"),h.sizerWidth=null,h.heightForcer=kh("div",null,null,"position: absolute; height: "+Og+"px; width: 1px;"),h.gutters=kh("div",null,"CodeMirror-gutters"),h.lineGutter=null,h.scroller=kh("div",[h.sizer,h.heightForcer,h.gutters],"CodeMirror-scroll"),h.scroller.setAttribute("tabIndex","-1"),h.wrapper=kh("div",[h.scrollbarFiller,h.gutterFiller,h.scroller],"CodeMirror"),d&&8>e&&(h.gutters.style.zIndex=-1,h.scroller.style.paddingRight=0),f||a&&n||(h.scroller.draggable=!0),b&&(b.appendChild?b.appendChild(h.wrapper):b(h.wrapper)),h.viewFrom=h.viewTo=c.first,h.reportedViewFrom=h.reportedViewTo=c.first,h.view=[],h.renderedView=null,h.externalMeasured=null,h.viewOffset=0,h.lastWrapHeight=h.lastWrapWidth=0,h.updateLineNumbers=null,h.nativeBarWidth=h.barHeight=h.barWidth=0,h.scrollbarsClipped=!1,h.lineNumWidth=h.lineNumInnerWidth=h.lineNumChars=null,h.alignWidgets=!1,h.cachedCharWidth=h.cachedTextHeight=h.cachedPaddingH=null,h.maxLine=null,h.maxLineLength=0,h.maxLineChanged=!1,h.wheelDX=h.wheelDY=h.wheelStartX=h.wheelStartY=null,h.shift=!1,h.selForContextMenu=null,h.activeTouch=null,g.init(h)}function x(a){a.doc.mode=v.getMode(a.options,a.doc.modeOption),y(a)}function y(a){a.doc.iter(function(a){a.stateAfter&&(a.stateAfter=null),a.styles&&(a.styles=null)}),a.doc.frontier=a.doc.first,gc(a,100),a.state.modeGen++,a.curOp&&gd(a)}function z(a){a.options.lineWrapping?(sh(a.display.wrapper,"CodeMirror-wrap"),a.display.sizer.style.minWidth="",a.display.sizerWidth=null):(rh(a.display.wrapper,"CodeMirror-wrap"),H(a)),B(a),gd(a),Dc(a),setTimeout(function(){N(a)},100)}function A(a){var b=Pc(a.display),c=a.options.lineWrapping,d=c&&Math.max(5,a.display.scroller.clientWidth/Qc(a.display)-3);return function(e){if(sf(a.doc,e))return 0;var f=0;if(e.widgets)for(var g=0;g<e.widgets.length;g++)e.widgets[g].height&&(f+=e.widgets[g].height);return c?f+(Math.ceil(e.text.length/d)||1)*b:f+b}}function B(a){var b=a.doc,c=A(a);b.iter(function(a){var b=c(a);b!=a.height&&eg(a,b)})}function C(a){a.display.wrapper.className=a.display.wrapper.className.replace(/\s*cm-s-\S+/g,"")+a.options.theme.replace(/(^|\s)\s*/g," cm-s-"),Dc(a)}function D(a){E(a),gd(a),setTimeout(function(){Q(a)},20)}function E(a){var b=a.display.gutters,c=a.options.gutters;mh(b);for(var d=0;d<c.length;++d){var e=c[d],f=b.appendChild(kh("div",null,"CodeMirror-gutter "+e));"CodeMirror-linenumbers"==e&&(a.display.lineGutter=f,f.style.width=(a.display.lineNumWidth||1)+"px")}b.style.display=d?"":"none",F(a)}function F(a){var b=a.display.gutters.offsetWidth;a.display.sizer.style.marginLeft=b+"px"}function G(a){if(0==a.height)return 0;for(var c,b=a.text.length,d=a;c=lf(d);){var e=c.find(0,!0);d=e.from.line,b+=e.from.ch-e.to.ch}for(d=a;c=mf(d);){var e=c.find(0,!0);b-=d.text.length-e.from.ch,d=e.to.line,b+=d.text.length-e.to.ch}return b}function H(a){var b=a.display,c=a.doc;b.maxLine=bg(c,c.first),b.maxLineLength=G(b.maxLine),b.maxLineChanged=!0,c.iter(function(a){var c=G(a);c>b.maxLineLength&&(b.maxLineLength=c,b.maxLine=a)})}function I(a){var b=$g(a.gutters,"CodeMirror-linenumbers");-1==b&&a.lineNumbers?a.gutters=a.gutters.concat(["CodeMirror-linenumbers"]):b>-1&&!a.lineNumbers&&(a.gutters=a.gutters.slice(0),a.gutters.splice(b,1))}function J(a){var b=a.display,c=b.gutters.offsetWidth,d=Math.round(a.doc.height+lc(a.display));return{clientHeight:b.scroller.clientHeight,viewHeight:b.wrapper.clientHeight,scrollWidth:b.scroller.scrollWidth,clientWidth:b.scroller.clientWidth,viewWidth:b.wrapper.clientWidth,barLeft:a.options.fixedGutter?c:0,docHeight:d,scrollHeight:d+nc(a)+b.barHeight,nativeBarWidth:b.nativeBarWidth,gutterWidth:c}}function K(a,b,c){this.cm=c;var f=this.vert=kh("div",[kh("div",null,null,"min-width: 1px")],"CodeMirror-vscrollbar"),g=this.horiz=kh("div",[kh("div",null,null,"height: 100%; min-height: 1px")],"CodeMirror-hscrollbar");a(f),a(g),Eg(f,"scroll",function(){f.clientHeight&&b(f.scrollTop,"vertical")}),Eg(g,"scroll",function(){g.clientWidth&&b(g.scrollLeft,"horizontal")}),this.checkedOverlay=!1,d&&8>e&&(this.horiz.style.minHeight=this.vert.style.minWidth="18px")}function L(){}function M(a){a.display.scrollbars&&(a.display.scrollbars.clear(),a.display.scrollbars.addClass&&rh(a.display.wrapper,a.display.scrollbars.addClass)),a.display.scrollbars=new v.scrollbarModel[a.options.scrollbarStyle](function(b){a.display.wrapper.insertBefore(b,a.display.scrollbarFiller),Eg(b,"mousedown",function(){a.state.focused&&setTimeout(function(){a.display.input.focus()},0)}),b.setAttribute("cm-not-content","true")},function(b,c){"horizontal"==c?Dd(a,b):Cd(a,b)},a),a.display.scrollbars.addClass&&sh(a.display.wrapper,a.display.scrollbars.addClass)}function N(a,b){b||(b=J(a));var c=a.display.barWidth,d=a.display.barHeight;O(a,b);for(var e=0;4>e&&c!=a.display.barWidth||d!=a.display.barHeight;e++)c!=a.display.barWidth&&a.options.lineWrapping&&$(a),O(a,J(a)),c=a.display.barWidth,d=a.display.barHeight}function O(a,b){var c=a.display,d=c.scrollbars.update(b);c.sizer.style.paddingRight=(c.barWidth=d.right)+"px",c.sizer.style.paddingBottom=(c.barHeight=d.bottom)+"px",d.right&&d.bottom?(c.scrollbarFiller.style.display="block",c.scrollbarFiller.style.height=d.bottom+"px",c.scrollbarFiller.style.width=d.right+"px"):c.scrollbarFiller.style.display="",d.bottom&&a.options.coverGutterNextToScrollbar&&a.options.fixedGutter?(c.gutterFiller.style.display="block",c.gutterFiller.style.height=d.bottom+"px",c.gutterFiller.style.width=b.gutterWidth+"px"):c.gutterFiller.style.display=""}function P(a,b,c){var d=c&&null!=c.top?Math.max(0,c.top):a.scroller.scrollTop;d=Math.floor(d-kc(a));var e=c&&null!=c.bottom?c.bottom:d+a.wrapper.clientHeight,f=gg(b,d),g=gg(b,e);if(c&&c.ensure){var h=c.ensure.from.line,i=c.ensure.to.line;f>h?(f=h,g=gg(b,hg(bg(b,h))+a.wrapper.clientHeight)):Math.min(i,b.lastLine())>=g&&(f=gg(b,hg(bg(b,i))-a.wrapper.clientHeight),g=i)}return{from:f,to:Math.max(g,f+1)}}function Q(a){var b=a.display,c=b.view;if(b.alignWidgets||b.gutters.firstChild&&a.options.fixedGutter){for(var d=T(b)-b.scroller.scrollLeft+a.doc.scrollLeft,e=b.gutters.offsetWidth,f=d+"px",g=0;g<c.length;g++)if(!c[g].hidden){a.options.fixedGutter&&c[g].gutter&&(c[g].gutter.style.left=f);var h=c[g].alignable;if(h)for(var i=0;i<h.length;i++)h[i].style.left=f}a.options.fixedGutter&&(b.gutters.style.left=d+e+"px")}}function R(a){if(!a.options.lineNumbers)return!1;var b=a.doc,c=S(a.options,b.first+b.size-1),d=a.display;if(c.length!=d.lineNumChars){var e=d.measure.appendChild(kh("div",[kh("div",c)],"CodeMirror-linenumber CodeMirror-gutter-elt")),f=e.firstChild.offsetWidth,g=e.offsetWidth-f;return d.lineGutter.style.width="",d.lineNumInnerWidth=Math.max(f,d.lineGutter.offsetWidth-g)+1,d.lineNumWidth=d.lineNumInnerWidth+g,d.lineNumChars=d.lineNumInnerWidth?c.length:-1,d.lineGutter.style.width=d.lineNumWidth+"px",F(a),!0}return!1}function S(a,b){return String(a.lineNumberFormatter(b+a.firstLineNumber))}function T(a){return a.scroller.getBoundingClientRect().left-a.sizer.getBoundingClientRect().left}function U(a,b,c){var d=a.display;this.viewport=b,this.visible=P(d,a.doc,b),this.editorIsHidden=!d.wrapper.offsetWidth,this.wrapperHeight=d.wrapper.clientHeight,this.wrapperWidth=d.wrapper.clientWidth,this.oldDisplayWidth=oc(a),this.force=c,this.dims=ab(a),this.events=[]}function V(a){var b=a.display;!b.scrollbarsClipped&&b.scroller.offsetWidth&&(b.nativeBarWidth=b.scroller.offsetWidth-b.scroller.clientWidth,b.heightForcer.style.height=nc(a)+"px",b.sizer.style.marginBottom=-b.nativeBarWidth+"px",b.sizer.style.borderRightWidth=nc(a)+"px",b.scrollbarsClipped=!0)}function W(a,b){var c=a.display,d=a.doc;if(b.editorIsHidden)return id(a),!1;if(!b.force&&b.visible.from>=c.viewFrom&&b.visible.to<=c.viewTo&&(null==c.updateLineNumbers||c.updateLineNumbers>=c.viewTo)&&c.renderedView==c.view&&0==md(a))return!1;R(a)&&(id(a),b.dims=ab(a));var e=d.first+d.size,f=Math.max(b.visible.from-a.options.viewportMargin,d.first),g=Math.min(e,b.visible.to+a.options.viewportMargin);c.viewFrom<f&&f-c.viewFrom<20&&(f=Math.max(d.first,c.viewFrom)),c.viewTo>g&&c.viewTo-g<20&&(g=Math.min(e,c.viewTo)),u&&(f=qf(a.doc,f),g=rf(a.doc,g));var h=f!=c.viewFrom||g!=c.viewTo||c.lastWrapHeight!=b.wrapperHeight||c.lastWrapWidth!=b.wrapperWidth;ld(a,f,g),c.viewOffset=hg(bg(a.doc,c.viewFrom)),a.display.mover.style.top=c.viewOffset+"px";var i=md(a);if(!h&&0==i&&!b.force&&c.renderedView==c.view&&(null==c.updateLineNumbers||c.updateLineNumbers>=c.viewTo))return!1;var j=ph();return i>4&&(c.lineDiv.style.display="none"),bb(a,c.updateLineNumbers,b.dims),i>4&&(c.lineDiv.style.display=""),c.renderedView=c.view,j&&ph()!=j&&j.offsetHeight&&j.focus(),mh(c.cursorDiv),mh(c.selectionDiv),c.gutters.style.height=0,h&&(c.lastWrapHeight=b.wrapperHeight,c.lastWrapWidth=b.wrapperWidth,gc(a,400)),c.updateLineNumbers=null,!0}function X(a,b){for(var c=b.force,d=b.viewport,e=!0;;e=!1){if(e&&a.options.lineWrapping&&b.oldDisplayWidth!=oc(a))c=!0;else if(c=!1,d&&null!=d.top&&(d={top:Math.min(a.doc.height+lc(a.display)-pc(a),d.top)}),b.visible=P(a.display,a.doc,d),b.visible.from>=a.display.viewFrom&&b.visible.to<=a.display.viewTo)break;if(!W(a,b))break;$(a);var f=J(a);bc(a),Z(a,f),N(a,f)}b.signal(a,"update",a),(a.display.viewFrom!=a.display.reportedViewFrom||a.display.viewTo!=a.display.reportedViewTo)&&(b.signal(a,"viewportChange",a,a.display.viewFrom,a.display.viewTo),a.display.reportedViewFrom=a.display.viewFrom,a.display.reportedViewTo=a.display.viewTo)}function Y(a,b){var c=new U(a,b);if(W(a,c)){$(a),X(a,c);var d=J(a);bc(a),Z(a,d),N(a,d),c.finish()}}function Z(a,b){a.display.sizer.style.minHeight=b.docHeight+"px";var c=b.docHeight+a.display.barHeight;a.display.heightForcer.style.top=c+"px",a.display.gutters.style.height=Math.max(c+nc(a),b.clientHeight)+"px"}function $(a){for(var b=a.display,c=b.lineDiv.offsetTop,f=0;f<b.view.length;f++){var h,g=b.view[f];if(!g.hidden){if(d&&8>e){var i=g.node.offsetTop+g.node.offsetHeight;h=i-c,c=i}else{var j=g.node.getBoundingClientRect();h=j.bottom-j.top}var k=g.line.height-h;if(2>h&&(h=Pc(b)),(k>.001||-.001>k)&&(eg(g.line,h),_(g.line),g.rest))for(var l=0;l<g.rest.length;l++)_(g.rest[l])}}}function _(a){if(a.widgets)for(var b=0;b<a.widgets.length;++b)a.widgets[b].height=a.widgets[b].node.offsetHeight}function ab(a){for(var b=a.display,c={},d={},e=b.gutters.clientLeft,f=b.gutters.firstChild,g=0;f;f=f.nextSibling,++g)c[a.options.gutters[g]]=f.offsetLeft+f.clientLeft+e,d[a.options.gutters[g]]=f.clientWidth;return{fixedPos:T(b),gutterTotalWidth:b.gutters.offsetWidth,gutterLeft:c,gutterWidth:d,wrapperWidth:b.wrapper.clientWidth}}function bb(a,b,c){function i(b){var c=b.nextSibling;return f&&o&&a.display.currentWheelTarget==b?b.style.display="none":b.parentNode.removeChild(b),c}for(var d=a.display,e=a.options.lineNumbers,g=d.lineDiv,h=g.firstChild,j=d.view,k=d.viewFrom,l=0;l<j.length;l++){var m=j[l];if(m.hidden);else if(m.node&&m.node.parentNode==g){for(;h!=m.node;)h=i(h);var p=e&&null!=b&&k>=b&&m.lineNumber;m.changes&&($g(m.changes,"gutter")>-1&&(p=!1),cb(a,m,k,c)),p&&(mh(m.lineNumber),m.lineNumber.appendChild(document.createTextNode(S(a.options,k)))),h=m.node.nextSibling}else{var n=kb(a,m,k,c);g.insertBefore(n,h)}k+=m.size}for(;h;)h=i(h)}function cb(a,b,c,d){for(var e=0;e<b.changes.length;e++){var f=b.changes[e];"text"==f?gb(a,b):"gutter"==f?ib(a,b,c,d):"class"==f?hb(b):"widget"==f&&jb(a,b,d)}b.changes=null}function db(a){return a.node==a.text&&(a.node=kh("div",null,null,"position: relative"),a.text.parentNode&&a.text.parentNode.replaceChild(a.node,a.text),a.node.appendChild(a.text),d&&8>e&&(a.node.style.zIndex=2)),a.node}function eb(a){var b=a.bgClass?a.bgClass+" "+(a.line.bgClass||""):a.line.bgClass;if(b&&(b+=" CodeMirror-linebackground"),a.background)b?a.background.className=b:(a.background.parentNode.removeChild(a.background),a.background=null);else if(b){var c=db(a);a.background=c.insertBefore(kh("div",null,b),c.firstChild)}}function fb(a,b){var c=a.display.externalMeasured;return c&&c.line==b.line?(a.display.externalMeasured=null,b.measure=c.measure,c.built):Mf(a,b)}function gb(a,b){var c=b.text.className,d=fb(a,b);b.text==b.node&&(b.node=d.pre),b.text.parentNode.replaceChild(d.pre,b.text),b.text=d.pre,d.bgClass!=b.bgClass||d.textClass!=b.textClass?(b.bgClass=d.bgClass,b.textClass=d.textClass,hb(b)):c&&(b.text.className=c)}function hb(a){eb(a),a.line.wrapClass?db(a).className=a.line.wrapClass:a.node!=a.text&&(a.node.className="");var b=a.textClass?a.textClass+" "+(a.line.textClass||""):a.line.textClass;a.text.className=b||""}function ib(a,b,c,d){b.gutter&&(b.node.removeChild(b.gutter),b.gutter=null);var e=b.line.gutterMarkers;if(a.options.lineNumbers||e){var f=db(b),g=b.gutter=kh("div",null,"CodeMirror-gutter-wrapper","left: "+(a.options.fixedGutter?d.fixedPos:-d.gutterTotalWidth)+"px; width: "+d.gutterTotalWidth+"px");if(a.display.input.setUneditable(g),f.insertBefore(g,b.text),b.line.gutterClass&&(g.className+=" "+b.line.gutterClass),!a.options.lineNumbers||e&&e["CodeMirror-linenumbers"]||(b.lineNumber=g.appendChild(kh("div",S(a.options,c),"CodeMirror-linenumber CodeMirror-gutter-elt","left: "+d.gutterLeft["CodeMirror-linenumbers"]+"px; width: "+a.display.lineNumInnerWidth+"px"))),e)for(var h=0;h<a.options.gutters.length;++h){var i=a.options.gutters[h],j=e.hasOwnProperty(i)&&e[i];j&&g.appendChild(kh("div",[j],"CodeMirror-gutter-elt","left: "+d.gutterLeft[i]+"px; width: "+d.gutterWidth[i]+"px"))}}}function jb(a,b,c){b.alignable&&(b.alignable=null);for(var e,d=b.node.firstChild;d;d=e){var e=d.nextSibling;"CodeMirror-linewidget"==d.className&&b.node.removeChild(d)}lb(a,b,c)}function kb(a,b,c,d){var e=fb(a,b);return b.text=b.node=e.pre,e.bgClass&&(b.bgClass=e.bgClass),e.textClass&&(b.textClass=e.textClass),hb(b),ib(a,b,c,d),lb(a,b,d),b.node}function lb(a,b,c){if(mb(a,b.line,b,c,!0),b.rest)for(var d=0;d<b.rest.length;d++)mb(a,b.rest[d],b,c,!1)}function mb(a,b,c,d,e){if(b.widgets)for(var f=db(c),g=0,h=b.widgets;g<h.length;++g){var i=h[g],j=kh("div",[i.node],"CodeMirror-linewidget");i.handleMouseEvents||j.setAttribute("cm-ignore-events","true"),nb(i,j,c,d),a.display.input.setUneditable(j),e&&i.above?f.insertBefore(j,c.gutter||c.text):f.appendChild(j),Ig(i,"redraw")}}function nb(a,b,c,d){if(a.noHScroll){(c.alignable||(c.alignable=[])).push(b);var e=d.wrapperWidth;b.style.left=d.fixedPos+"px",a.coverGutter||(e-=d.gutterTotalWidth,b.style.paddingLeft=d.gutterTotalWidth+"px"),b.style.width=e+"px"}a.coverGutter&&(b.style.zIndex=5,b.style.position="relative",a.noHScroll||(b.style.marginLeft=-d.gutterTotalWidth+"px"))}function qb(a){return ob(a.line,a.ch)}function rb(a,b){return pb(a,b)<0?b:a}function sb(a,b){return pb(a,b)<0?a:b}function tb(a){a.state.focused||(a.display.input.focus(),Ud(a))}function ub(a){return a.options.readOnly||a.doc.cantEdit}function wb(a,b,c,d){var e=a.doc;a.display.shift=!1,d||(d=e.sel);var f=Dh(b),g=null;a.state.pasteIncoming&&d.ranges.length>1&&(vb&&vb.join("\n")==b?g=0==d.ranges.length%vb.length&&_g(vb,Dh):f.length==d.ranges.length&&(g=_g(f,function(a){return[a]})));for(var h=d.ranges.length-1;h>=0;h--){var i=d.ranges[h],j=i.from(),k=i.to();i.empty()&&(c&&c>0?j=ob(j.line,j.ch-c):a.state.overwrite&&!a.state.pasteIncoming&&(k=ob(k.line,Math.min(bg(e,k.line).text.length,k.ch+Yg(f).length))));var l=a.curOp.updateInput,m={from:j,to:k,text:g?g[h%g.length]:f,origin:a.state.pasteIncoming?"paste":a.state.cutIncoming?"cut":"+input"};if(ce(a.doc,m),Ig(a,"inputRead",a,m),b&&!a.state.pasteIncoming&&a.options.electricChars&&a.options.smartIndent&&i.head.ch<100&&(!h||d.ranges[h-1].head.line!=i.head.line)){var n=a.getModeAt(i.head),o=Yd(m);if(n.electricChars){for(var p=0;p<n.electricChars.length;p++)if(b.indexOf(n.electricChars.charAt(p))>-1){qe(a,o.line,"smart");break}}else n.electricInput&&n.electricInput.test(bg(e,o.line).text.slice(0,o.ch))&&qe(a,o.line,"smart")}}oe(a),a.curOp.updateInput=l,a.curOp.typing=!0,a.state.pasteIncoming=a.state.cutIncoming=!1}function xb(a){for(var b=[],c=[],d=0;d<a.doc.sel.ranges.length;d++){var e=a.doc.sel.ranges[d].head.line,f={anchor:ob(e,0),head:ob(e+1,0)};c.push(f),b.push(a.getRange(f.anchor,f.head))}return{text:b,ranges:c}}function yb(a){a.setAttribute("autocorrect","off"),a.setAttribute("autocapitalize","off"),a.setAttribute("spellcheck","false")}function zb(a){this.cm=a,this.prevInput="",this.pollingFast=!1,this.polling=new Tg,this.inaccurateSelection=!1,this.hasSelection=!1}function Ab(){var a=kh("textarea",null,null,"position: absolute; padding: 0; width: 1px; height: 1em; outline: none"),b=kh("div",[a],null,"overflow: hidden; position: relative; width: 3px; height: 0px;");return f?a.style.width="1000px":a.setAttribute("wrap","off"),m&&(a.style.border="1px solid black"),yb(a),b}function Bb(a){this.cm=a,this.lastAnchorNode=this.lastAnchorOffset=this.lastFocusNode=this.lastFocusOffset=null,this.polling=new Tg,this.gracePeriod=!1}function Cb(a,b){var c=uc(a,b.line);if(!c||c.hidden)return null;var d=bg(a.doc,b.line),e=rc(c,d,b.line),f=ig(d),g="left";if(f){var h=Th(f,b.ch);g=h%2?"right":"left"}var i=yc(e.map,b.ch,"left");return i.offset="right"==i.collapse?i.end:i.start,i}function Db(a,b){return b&&(a.bad=!0),a}function Eb(a,b,c){var d;if(b==a.display.lineDiv){if(d=a.display.lineDiv.childNodes[c],!d)return Db(a.clipPos(ob(a.display.viewTo-1)),!0);b=null,c=0}else for(d=b;;d=d.parentNode){if(!d||d==a.display.lineDiv)return null;if(d.parentNode&&d.parentNode==a.display.lineDiv)break}for(var e=0;e<a.display.view.length;e++){var f=a.display.view[e];if(f.node==d)return Fb(f,b,c)}}function Fb(a,b,c){function k(b,c,d){for(var e=-1;e<(j?j.length:0);e++)for(var f=0>e?i.map:j[e],g=0;g<f.length;g+=3){var h=f[g+2];if(h==b||h==c){var k=fg(0>e?a.line:a.rest[e]),l=f[g]+d;return(0>d||h!=b)&&(l=f[g+(d?1:0)]),ob(k,l)}}}var d=a.text.firstChild,e=!1;if(!b||!oh(d,b))return Db(ob(fg(a.line),0),!0);if(b==d&&(e=!0,b=d.childNodes[c],c=0,!b)){var f=a.rest?Yg(a.rest):a.line;return Db(ob(fg(f),f.text.length),e)}var g=3==b.nodeType?b:null,h=b;for(g||1!=b.childNodes.length||3!=b.firstChild.nodeType||(g=b.firstChild,c&&(c=g.nodeValue.length));h.parentNode!=d;)h=h.parentNode;var i=a.measure,j=i.maps,l=k(g,h,c);if(l)return Db(l,e);for(var m=h.nextSibling,n=g?g.nodeValue.length-c:0;m;m=m.nextSibling){if(l=k(m,m.firstChild,0))return Db(ob(l.line,l.ch-n),e);n+=m.textContent.length}for(var o=h.previousSibling,n=c;o;o=o.previousSibling){if(l=k(o,o.firstChild,-1))return Db(ob(l.line,l.ch+n),e);n+=m.textContent.length}}function Gb(a,b,c,d,e){function h(a){return function(b){return b.id==a}}function i(b){if(1==b.nodeType){var c=b.getAttribute("cm-text");if(null!=c)return""==c&&(c=b.textContent.replace(/\u200b/g,"")),f+=c,void 0;var k,j=b.getAttribute("cm-marker");if(j){var l=a.findMarks(ob(d,0),ob(e+1,0),h(+j));return l.length&&(k=l[0].find())&&(f+=cg(a.doc,k.from,k.to).join("\n")),void 0}if("false"==b.getAttribute("contenteditable"))return;for(var m=0;m<b.childNodes.length;m++)i(b.childNodes[m]);/^(pre|div|p)$/i.test(b.nodeName)&&(g=!0)}else if(3==b.nodeType){var n=b.nodeValue;if(!n)return;g&&(f+="\n",g=!1),f+=n}}for(var f="",g=!1;i(b),b!=c;)b=b.nextSibling;return f}function Hb(a,b){this.ranges=a,this.primIndex=b}function Ib(a,b){this.anchor=a,this.head=b}function Jb(a,b){var c=a[b];a.sort(function(a,b){return pb(a.from(),b.from())}),b=$g(a,c);for(var d=1;d<a.length;d++){var e=a[d],f=a[d-1];if(pb(f.to(),e.from())>=0){var g=sb(f.from(),e.from()),h=rb(f.to(),e.to()),i=f.empty()?e.from()==e.head:f.from()==f.head;b>=d&&--b,a.splice(--d,2,new Ib(i?h:g,i?g:h))}}return new Hb(a,b)}function Kb(a,b){return new Hb([new Ib(a,b||a)],0)}function Lb(a,b){return Math.max(a.first,Math.min(b,a.first+a.size-1))}function Mb(a,b){if(b.line<a.first)return ob(a.first,0);var c=a.first+a.size-1;return b.line>c?ob(c,bg(a,c).text.length):Nb(b,bg(a,b.line).text.length)}function Nb(a,b){var c=a.ch;return null==c||c>b?ob(a.line,b):0>c?ob(a.line,0):a}function Ob(a,b){return b>=a.first&&b<a.first+a.size}function Pb(a,b){for(var c=[],d=0;d<b.length;d++)c[d]=Mb(a,b[d]);return c}function Qb(a,b,c,d){if(a.cm&&a.cm.display.shift||a.extend){var e=b.anchor;if(d){var f=pb(c,e)<0;f!=pb(d,e)<0?(e=c,c=d):f!=pb(c,d)<0&&(c=d)}return new Ib(e,c)}return new Ib(d||c,c)}function Rb(a,b,c,d){Xb(a,new Hb([Qb(a,a.sel.primary(),b,c)],0),d)}function Sb(a,b,c){for(var d=[],e=0;e<a.sel.ranges.length;e++)d[e]=Qb(a,a.sel.ranges[e],b[e],null);var f=Jb(d,a.sel.primIndex);Xb(a,f,c)}function Tb(a,b,c,d){var e=a.sel.ranges.slice(0);e[b]=c,Xb(a,Jb(e,a.sel.primIndex),d)}function Ub(a,b,c,d){Xb(a,Kb(b,c),d)}function Vb(a,b){var c={ranges:b.ranges,update:function(b){this.ranges=[];for(var c=0;c<b.length;c++)this.ranges[c]=new Ib(Mb(a,b[c].anchor),Mb(a,b[c].head))}};return Gg(a,"beforeSelectionChange",a,c),a.cm&&Gg(a.cm,"beforeSelectionChange",a.cm,c),c.ranges!=b.ranges?Jb(c.ranges,c.ranges.length-1):b}function Wb(a,b,c){var d=a.history.done,e=Yg(d);e&&e.ranges?(d[d.length-1]=b,Yb(a,b,c)):Xb(a,b,c)}function Xb(a,b,c){Yb(a,b,c),pg(a,a.sel,a.cm?a.cm.curOp.id:0/0,c)}function Yb(a,b,c){(Mg(a,"beforeSelectionChange")||a.cm&&Mg(a.cm,"beforeSelectionChange"))&&(b=Vb(a,b));var d=c&&c.bias||(pb(b.primary().head,a.sel.primary().head)<0?-1:1);Zb(a,_b(a,b,d,!0)),c&&c.scroll===!1||!a.cm||oe(a.cm)}function Zb(a,b){b.equals(a.sel)||(a.sel=b,a.cm&&(a.cm.curOp.updateInput=a.cm.curOp.selectionChanged=!0,Lg(a.cm)),Ig(a,"cursorActivity",a))}function $b(a){Zb(a,_b(a,a.sel,null,!1),Qg)}function _b(a,b,c,d){for(var e,f=0;f<b.ranges.length;f++){var g=b.ranges[f],h=ac(a,g.anchor,c,d),i=ac(a,g.head,c,d);(e||h!=g.anchor||i!=g.head)&&(e||(e=b.ranges.slice(0,f)),e[f]=new Ib(h,i))}return e?Jb(e,b.primIndex):b}function ac(a,b,c,d){var e=!1,f=b,g=c||1;a.cantEdit=!1;a:for(;;){var h=bg(a,f.line);if(h.markedSpans)for(var i=0;i<h.markedSpans.length;++i){var j=h.markedSpans[i],k=j.marker;if((null==j.from||(k.inclusiveLeft?j.from<=f.ch:j.from<f.ch))&&(null==j.to||(k.inclusiveRight?j.to>=f.ch:j.to>f.ch))){if(d&&(Gg(k,"beforeCursorEnter"),k.explicitlyCleared)){if(h.markedSpans){--i;continue}break}if(!k.atomic)continue;var l=k.find(0>g?-1:1);if(0==pb(l,f)&&(l.ch+=g,l.ch<0?l=l.line>a.first?Mb(a,ob(l.line-1)):null:l.ch>h.text.length&&(l=l.line<a.first+a.size-1?ob(l.line+1,0):null),!l)){if(e)return d?(a.cantEdit=!0,ob(a.first,0)):ac(a,b,c,!0);e=!0,l=b,g=-g}f=l;continue a}}return f}}function bc(a){a.display.input.showSelection(a.display.input.prepareSelection())}function cc(a,b){for(var c=a.doc,d={},e=d.cursors=document.createDocumentFragment(),f=d.selection=document.createDocumentFragment(),g=0;g<c.sel.ranges.length;g++)if(b!==!1||g!=c.sel.primIndex){var h=c.sel.ranges[g],i=h.empty();(i||a.options.showCursorWhenSelecting)&&dc(a,h,e),i||ec(a,h,f)}return d}function dc(a,b,c){var d=Jc(a,b.head,"div",null,null,!a.options.singleCursorHeightPerLine),e=c.appendChild(kh("div","\xa0","CodeMirror-cursor"));if(e.style.left=d.left+"px",e.style.top=d.top+"px",e.style.height=Math.max(0,d.bottom-d.top)*a.options.cursorHeight+"px",d.other){var f=c.appendChild(kh("div","\xa0","CodeMirror-cursor CodeMirror-secondarycursor"));f.style.display="",f.style.left=d.other.left+"px",f.style.top=d.other.top+"px",f.style.height=.85*(d.other.bottom-d.other.top)+"px"}}function ec(a,b,c){function j(a,b,c,d){0>b&&(b=0),b=Math.round(b),d=Math.round(d),f.appendChild(kh("div",null,"CodeMirror-selected","position: absolute; left: "+a+"px; top: "+b+"px; width: "+(null==c?i-a:c)+"px; height: "+(d-b)+"px"))}function k(b,c,d){function m(c,d){return Ic(a,ob(b,c),"div",f,d)}var k,l,f=bg(e,b),g=f.text.length;return Jh(ig(f),c||0,null==d?g:d,function(a,b,e){var n,o,p,f=m(a,"left");if(a==b)n=f,o=p=f.left;else{if(n=m(b-1,"right"),"rtl"==e){var q=f;f=n,n=q}o=f.left,p=n.right}null==c&&0==a&&(o=h),n.top-f.top>3&&(j(o,f.top,null,f.bottom),o=h,f.bottom<n.top&&j(o,f.bottom,null,n.top)),null==d&&b==g&&(p=i),(!k||f.top<k.top||f.top==k.top&&f.left<k.left)&&(k=f),(!l||n.bottom>l.bottom||n.bottom==l.bottom&&n.right>l.right)&&(l=n),h+1>o&&(o=h),j(o,n.top,p-o,n.bottom)}),{start:k,end:l}}var d=a.display,e=a.doc,f=document.createDocumentFragment(),g=mc(a.display),h=g.left,i=Math.max(d.sizerWidth,oc(a)-d.sizer.offsetLeft)-g.right,l=b.from(),m=b.to();if(l.line==m.line)k(l.line,l.ch,m.ch);else{var n=bg(e,l.line),o=bg(e,m.line),p=of(n)==of(o),q=k(l.line,l.ch,p?n.text.length+1:null).end,r=k(m.line,p?0:null,m.ch).start;p&&(q.top<r.top-2?(j(q.right,q.top,null,q.bottom),j(h,r.top,r.left,r.bottom)):j(q.right,q.top,r.left-q.right,q.bottom)),q.bottom<r.top&&j(h,q.bottom,null,r.top)}c.appendChild(f)}function fc(a){if(a.state.focused){var b=a.display;clearInterval(b.blinker);var c=!0;b.cursorDiv.style.visibility="",a.options.cursorBlinkRate>0?b.blinker=setInterval(function(){b.cursorDiv.style.visibility=(c=!c)?"":"hidden"},a.options.cursorBlinkRate):a.options.cursorBlinkRate<0&&(b.cursorDiv.style.visibility="hidden")}}function gc(a,b){a.doc.mode.startState&&a.doc.frontier<a.display.viewTo&&a.state.highlight.set(b,dh(hc,a))}function hc(a){var b=a.doc;if(b.frontier<b.first&&(b.frontier=b.first),!(b.frontier>=a.display.viewTo)){var c=+new Date+a.options.workTime,d=Ee(b.mode,jc(a,b.frontier)),e=[];b.iter(b.frontier,Math.min(b.first+b.size,a.display.viewTo+500),function(f){if(b.frontier>=a.display.viewFrom){var g=f.styles,h=Gf(a,f,d,!0);f.styles=h.styles;var i=f.styleClasses,j=h.classes;j?f.styleClasses=j:i&&(f.styleClasses=null);for(var k=!g||g.length!=f.styles.length||i!=j&&(!i||!j||i.bgClass!=j.bgClass||i.textClass!=j.textClass),l=0;!k&&l<g.length;++l)k=g[l]!=f.styles[l];k&&e.push(b.frontier),f.stateAfter=Ee(b.mode,d)}else If(a,f.text,d),f.stateAfter=0==b.frontier%5?Ee(b.mode,d):null;return++b.frontier,+new Date>c?(gc(a,a.options.workDelay),!0):void 0}),e.length&&ad(a,function(){for(var b=0;b<e.length;b++)hd(a,e[b],"text")})}}function ic(a,b,c){for(var d,e,f=a.doc,g=c?-1:b-(a.doc.mode.innerMode?1e3:100),h=b;h>g;--h){if(h<=f.first)return f.first;var i=bg(f,h-1);if(i.stateAfter&&(!c||h<=f.frontier))return h;var j=Ug(i.text,null,a.options.tabSize);(null==e||d>j)&&(e=h-1,d=j)}return e}function jc(a,b,c){var d=a.doc,e=a.display;if(!d.mode.startState)return!0;var f=ic(a,b,c),g=f>d.first&&bg(d,f-1).stateAfter;return g=g?Ee(d.mode,g):Fe(d.mode),d.iter(f,b,function(c){If(a,c.text,g);var h=f==b-1||0==f%5||f>=e.viewFrom&&f<e.viewTo;c.stateAfter=h?Ee(d.mode,g):null,++f}),c&&(d.frontier=f),g}function kc(a){return a.lineSpace.offsetTop}function lc(a){return a.mover.offsetHeight-a.lineSpace.offsetHeight}function mc(a){if(a.cachedPaddingH)return a.cachedPaddingH;var b=nh(a.measure,kh("pre","x")),c=window.getComputedStyle?window.getComputedStyle(b):b.currentStyle,d={left:parseInt(c.paddingLeft),right:parseInt(c.paddingRight)};return isNaN(d.left)||isNaN(d.right)||(a.cachedPaddingH=d),d}function nc(a){return Og-a.display.nativeBarWidth}function oc(a){return a.display.scroller.clientWidth-nc(a)-a.display.barWidth}function pc(a){return a.display.scroller.clientHeight-nc(a)-a.display.barHeight}function qc(a,b,c){var d=a.options.lineWrapping,e=d&&oc(a);if(!b.measure.heights||d&&b.measure.width!=e){var f=b.measure.heights=[];if(d){b.measure.width=e;for(var g=b.text.firstChild.getClientRects(),h=0;h<g.length-1;h++){var i=g[h],j=g[h+1];Math.abs(i.bottom-j.bottom)>2&&f.push((i.bottom+j.top)/2-c.top)}}f.push(c.bottom-c.top)}}function rc(a,b,c){if(a.line==b)return{map:a.measure.map,cache:a.measure.cache};for(var d=0;d<a.rest.length;d++)if(a.rest[d]==b)return{map:a.measure.maps[d],cache:a.measure.caches[d]};for(var d=0;d<a.rest.length;d++)if(fg(a.rest[d])>c)return{map:a.measure.maps[d],cache:a.measure.caches[d],before:!0}}function sc(a,b){b=of(b);var c=fg(b),d=a.display.externalMeasured=new ed(a.doc,b,c);d.lineN=c;var e=d.built=Mf(a,d);return d.text=e.pre,nh(a.display.lineMeasure,e.pre),d}function tc(a,b,c,d){return wc(a,vc(a,b),c,d)}function uc(a,b){if(b>=a.display.viewFrom&&b<a.display.viewTo)return a.display.view[jd(a,b)];var c=a.display.externalMeasured;return c&&b>=c.lineN&&b<c.lineN+c.size?c:void 0}function vc(a,b){var c=fg(b),d=uc(a,c);d&&!d.text?d=null:d&&d.changes&&cb(a,d,c,ab(a)),d||(d=sc(a,b));var e=rc(d,b,c);return{line:b,view:d,rect:null,map:e.map,cache:e.cache,before:e.before,hasHeights:!1}}function wc(a,b,c,d,e){b.before&&(c=-1);var g,f=c+(d||"");return b.cache.hasOwnProperty(f)?g=b.cache[f]:(b.rect||(b.rect=b.view.text.getBoundingClientRect()),b.hasHeights||(qc(a,b.view,b.rect),b.hasHeights=!0),g=zc(a,b,c,d),g.bogus||(b.cache[f]=g)),{left:g.left,right:g.right,top:e?g.rtop:g.top,bottom:e?g.rbottom:g.bottom}}function yc(a,b,c){for(var d,e,f,g,h=0;h<a.length;h+=3){var i=a[h],j=a[h+1];if(i>b?(e=0,f=1,g="left"):j>b?(e=b-i,f=e+1):(h==a.length-3||b==j&&a[h+3]>b)&&(f=j-i,e=f-1,b>=j&&(g="right")),null!=e){if(d=a[h+2],i==j&&c==(d.insertLeft?"left":"right")&&(g=c),"left"==c&&0==e)for(;h&&a[h-2]==a[h-3]&&a[h-1].insertLeft;)d=a[(h-=3)+2],g="left";if("right"==c&&e==j-i)for(;h<a.length-3&&a[h+3]==a[h+4]&&!a[h+5].insertLeft;)d=a[(h+=3)+2],g="right";break}}return{node:d,start:e,end:f,collapse:g,coverStart:i,coverEnd:j}}function zc(a,b,c,f){var l,g=yc(b.map,c,f),h=g.node,i=g.start,j=g.end,k=g.collapse;if(3==h.nodeType){for(var m=0;4>m;m++){for(;i&&jh(b.line.text.charAt(g.coverStart+i));)--i;for(;g.coverStart+j<g.coverEnd&&jh(b.line.text.charAt(g.coverStart+j));)++j;if(d&&9>e&&0==i&&j==g.coverEnd-g.coverStart)l=h.parentNode.getBoundingClientRect();else if(d&&a.options.lineWrapping){var n=lh(h,i,j).getClientRects();l=n.length?n["right"==f?n.length-1:0]:xc}else l=lh(h,i,j).getBoundingClientRect()||xc;if(l.left||l.right||0==i)break;j=i,i-=1,k="right"}d&&11>e&&(l=Ac(a.display.measure,l))}else{i>0&&(k=f="right");var n;l=a.options.lineWrapping&&(n=h.getClientRects()).length>1?n["right"==f?n.length-1:0]:h.getBoundingClientRect()}if(d&&9>e&&!i&&(!l||!l.left&&!l.right)){var o=h.parentNode.getClientRects()[0];l=o?{left:o.left,right:o.left+Qc(a.display),top:o.top,bottom:o.bottom}:xc}for(var p=l.top-b.rect.top,q=l.bottom-b.rect.top,r=(p+q)/2,s=b.view.measure.heights,m=0;m<s.length-1&&!(r<s[m]);m++);var t=m?s[m-1]:0,u=s[m],v={left:("right"==k?l.right:l.left)-b.rect.left,right:("left"==k?l.left:l.right)-b.rect.left,top:t,bottom:u};
return l.left||l.right||(v.bogus=!0),a.options.singleCursorHeightPerLine||(v.rtop=p,v.rbottom=q),v}function Ac(a,b){if(!window.screen||null==screen.logicalXDPI||screen.logicalXDPI==screen.deviceXDPI||!Hh(a))return b;var c=screen.logicalXDPI/screen.deviceXDPI,d=screen.logicalYDPI/screen.deviceYDPI;return{left:b.left*c,right:b.right*c,top:b.top*d,bottom:b.bottom*d}}function Bc(a){if(a.measure&&(a.measure.cache={},a.measure.heights=null,a.rest))for(var b=0;b<a.rest.length;b++)a.measure.caches[b]={}}function Cc(a){a.display.externalMeasure=null,mh(a.display.lineMeasure);for(var b=0;b<a.display.view.length;b++)Bc(a.display.view[b])}function Dc(a){Cc(a),a.display.cachedCharWidth=a.display.cachedTextHeight=a.display.cachedPaddingH=null,a.options.lineWrapping||(a.display.maxLineChanged=!0),a.display.lineNumChars=null}function Ec(){return window.pageXOffset||(document.documentElement||document.body).scrollLeft}function Fc(){return window.pageYOffset||(document.documentElement||document.body).scrollTop}function Gc(a,b,c,d){if(b.widgets)for(var e=0;e<b.widgets.length;++e)if(b.widgets[e].above){var f=wf(b.widgets[e]);c.top+=f,c.bottom+=f}if("line"==d)return c;d||(d="local");var g=hg(b);if("local"==d?g+=kc(a.display):g-=a.display.viewOffset,"page"==d||"window"==d){var h=a.display.lineSpace.getBoundingClientRect();g+=h.top+("window"==d?0:Fc());var i=h.left+("window"==d?0:Ec());c.left+=i,c.right+=i}return c.top+=g,c.bottom+=g,c}function Hc(a,b,c){if("div"==c)return b;var d=b.left,e=b.top;if("page"==c)d-=Ec(),e-=Fc();else if("local"==c||!c){var f=a.display.sizer.getBoundingClientRect();d+=f.left,e+=f.top}var g=a.display.lineSpace.getBoundingClientRect();return{left:d-g.left,top:e-g.top}}function Ic(a,b,c,d,e){return d||(d=bg(a.doc,b.line)),Gc(a,d,tc(a,d,b.ch,e),c)}function Jc(a,b,c,d,e,f){function g(b,g){var h=wc(a,e,b,g?"right":"left",f);return g?h.left=h.right:h.right=h.left,Gc(a,d,h,c)}function h(a,b){var c=i[b],d=c.level%2;return a==Kh(c)&&b&&c.level<i[b-1].level?(c=i[--b],a=Lh(c)-(c.level%2?0:1),d=!0):a==Lh(c)&&b<i.length-1&&c.level<i[b+1].level&&(c=i[++b],a=Kh(c)-c.level%2,d=!1),d&&a==c.to&&a>c.from?g(a-1):g(a,d)}d=d||bg(a.doc,b.line),e||(e=vc(a,d));var i=ig(d),j=b.ch;if(!i)return g(j);var k=Th(i,j),l=h(j,k);return null!=Sh&&(l.other=h(j,Sh)),l}function Kc(a,b){var c=0,b=Mb(a.doc,b);a.options.lineWrapping||(c=Qc(a.display)*b.ch);var d=bg(a.doc,b.line),e=hg(d)+kc(a.display);return{left:c,right:c,top:e,bottom:e+d.height}}function Lc(a,b,c,d){var e=ob(a,b);return e.xRel=d,c&&(e.outside=!0),e}function Mc(a,b,c){var d=a.doc;if(c+=a.display.viewOffset,0>c)return Lc(d.first,0,!0,-1);var e=gg(d,c),f=d.first+d.size-1;if(e>f)return Lc(d.first+d.size-1,bg(d,f).text.length,!0,1);0>b&&(b=0);for(var g=bg(d,e);;){var h=Nc(a,g,e,b,c),i=mf(g),j=i&&i.find(0,!0);if(!i||!(h.ch>j.from.ch||h.ch==j.from.ch&&h.xRel>0))return h;e=fg(g=j.to.line)}}function Nc(a,b,c,d,e){function j(d){var e=Jc(a,ob(c,d),"line",b,i);return g=!0,f>e.bottom?e.left-h:f<e.top?e.left+h:(g=!1,e.left)}var f=e-hg(b),g=!1,h=2*a.display.wrapper.clientWidth,i=vc(a,b),k=ig(b),l=b.text.length,m=Mh(b),n=Nh(b),o=j(m),p=g,q=j(n),r=g;if(d>q)return Lc(c,n,r,1);for(;;){if(k?n==m||n==Vh(b,m,1):1>=n-m){for(var s=o>d||q-d>=d-o?m:n,t=d-(s==m?o:q);jh(b.text.charAt(s));)++s;var u=Lc(c,s,s==m?p:r,-1>t?-1:t>1?1:0);return u}var v=Math.ceil(l/2),w=m+v;if(k){w=m;for(var x=0;v>x;++x)w=Vh(b,w,1)}var y=j(w);y>d?(n=w,q=y,(r=g)&&(q+=1e3),l=v):(m=w,o=y,p=g,l-=v)}}function Pc(a){if(null!=a.cachedTextHeight)return a.cachedTextHeight;if(null==Oc){Oc=kh("pre");for(var b=0;49>b;++b)Oc.appendChild(document.createTextNode("x")),Oc.appendChild(kh("br"));Oc.appendChild(document.createTextNode("x"))}nh(a.measure,Oc);var c=Oc.offsetHeight/50;return c>3&&(a.cachedTextHeight=c),mh(a.measure),c||1}function Qc(a){if(null!=a.cachedCharWidth)return a.cachedCharWidth;var b=kh("span","xxxxxxxxxx"),c=kh("pre",[b]);nh(a.measure,c);var d=b.getBoundingClientRect(),e=(d.right-d.left)/10;return e>2&&(a.cachedCharWidth=e),e||10}function Tc(a){a.curOp={cm:a,viewChanged:!1,startHeight:a.doc.height,forceUpdate:!1,updateInput:null,typing:!1,changeObjs:null,cursorActivityHandlers:null,cursorActivityCalled:0,selectionChanged:!1,updateMaxLine:!1,scrollLeft:null,scrollTop:null,scrollToPos:null,id:++Sc},Rc?Rc.ops.push(a.curOp):a.curOp.ownsGroup=Rc={ops:[a.curOp],delayedCallbacks:[]}}function Uc(a){var b=a.delayedCallbacks,c=0;do{for(;c<b.length;c++)b[c]();for(var d=0;d<a.ops.length;d++){var e=a.ops[d];if(e.cursorActivityHandlers)for(;e.cursorActivityCalled<e.cursorActivityHandlers.length;)e.cursorActivityHandlers[e.cursorActivityCalled++](e.cm)}}while(c<b.length)}function Vc(a){var b=a.curOp,c=b.ownsGroup;if(c)try{Uc(c)}finally{Rc=null;for(var d=0;d<c.ops.length;d++)c.ops[d].cm.curOp=null;Wc(c)}}function Wc(a){for(var b=a.ops,c=0;c<b.length;c++)Xc(b[c]);for(var c=0;c<b.length;c++)Yc(b[c]);for(var c=0;c<b.length;c++)Zc(b[c]);for(var c=0;c<b.length;c++)$c(b[c]);for(var c=0;c<b.length;c++)_c(b[c])}function Xc(a){var b=a.cm,c=b.display;V(b),a.updateMaxLine&&H(b),a.mustUpdate=a.viewChanged||a.forceUpdate||null!=a.scrollTop||a.scrollToPos&&(a.scrollToPos.from.line<c.viewFrom||a.scrollToPos.to.line>=c.viewTo)||c.maxLineChanged&&b.options.lineWrapping,a.update=a.mustUpdate&&new U(b,a.mustUpdate&&{top:a.scrollTop,ensure:a.scrollToPos},a.forceUpdate)}function Yc(a){a.updatedDisplay=a.mustUpdate&&W(a.cm,a.update)}function Zc(a){var b=a.cm,c=b.display;a.updatedDisplay&&$(b),a.barMeasure=J(b),c.maxLineChanged&&!b.options.lineWrapping&&(a.adjustWidthTo=tc(b,c.maxLine,c.maxLine.text.length).left+3,b.display.sizerWidth=a.adjustWidthTo,a.barMeasure.scrollWidth=Math.max(c.scroller.clientWidth,c.sizer.offsetLeft+a.adjustWidthTo+nc(b)+b.display.barWidth),a.maxScrollLeft=Math.max(0,c.sizer.offsetLeft+a.adjustWidthTo-oc(b))),(a.updatedDisplay||a.selectionChanged)&&(a.preparedSelection=c.input.prepareSelection())}function $c(a){var b=a.cm;null!=a.adjustWidthTo&&(b.display.sizer.style.minWidth=a.adjustWidthTo+"px",a.maxScrollLeft<b.doc.scrollLeft&&Dd(b,Math.min(b.display.scroller.scrollLeft,a.maxScrollLeft),!0),b.display.maxLineChanged=!1),a.preparedSelection&&b.display.input.showSelection(a.preparedSelection),a.updatedDisplay&&Z(b,a.barMeasure),(a.updatedDisplay||a.startHeight!=b.doc.height)&&N(b,a.barMeasure),a.selectionChanged&&fc(b),b.state.focused&&a.updateInput&&b.display.input.reset(a.typing)}function _c(a){var b=a.cm,c=b.display,d=b.doc;if(a.updatedDisplay&&X(b,a.update),null==c.wheelStartX||null==a.scrollTop&&null==a.scrollLeft&&!a.scrollToPos||(c.wheelStartX=c.wheelStartY=null),null==a.scrollTop||c.scroller.scrollTop==a.scrollTop&&!a.forceScroll||(d.scrollTop=Math.max(0,Math.min(c.scroller.scrollHeight-c.scroller.clientHeight,a.scrollTop)),c.scrollbars.setScrollTop(d.scrollTop),c.scroller.scrollTop=d.scrollTop),null==a.scrollLeft||c.scroller.scrollLeft==a.scrollLeft&&!a.forceScroll||(d.scrollLeft=Math.max(0,Math.min(c.scroller.scrollWidth-oc(b),a.scrollLeft)),c.scrollbars.setScrollLeft(d.scrollLeft),c.scroller.scrollLeft=d.scrollLeft,Q(b)),a.scrollToPos){var e=ke(b,Mb(d,a.scrollToPos.from),Mb(d,a.scrollToPos.to),a.scrollToPos.margin);a.scrollToPos.isCursor&&b.state.focused&&je(b,e)}var f=a.maybeHiddenMarkers,g=a.maybeUnhiddenMarkers;if(f)for(var h=0;h<f.length;++h)f[h].lines.length||Gg(f[h],"hide");if(g)for(var h=0;h<g.length;++h)g[h].lines.length&&Gg(g[h],"unhide");c.wrapper.offsetHeight&&(d.scrollTop=b.display.scroller.scrollTop),a.changeObjs&&Gg(b,"changes",b,a.changeObjs),a.update&&a.update.finish()}function ad(a,b){if(a.curOp)return b();Tc(a);try{return b()}finally{Vc(a)}}function bd(a,b){return function(){if(a.curOp)return b.apply(a,arguments);Tc(a);try{return b.apply(a,arguments)}finally{Vc(a)}}}function cd(a){return function(){if(this.curOp)return a.apply(this,arguments);Tc(this);try{return a.apply(this,arguments)}finally{Vc(this)}}}function dd(a){return function(){var b=this.cm;if(!b||b.curOp)return a.apply(this,arguments);Tc(b);try{return a.apply(this,arguments)}finally{Vc(b)}}}function ed(a,b,c){this.line=b,this.rest=pf(b),this.size=this.rest?fg(Yg(this.rest))-c+1:1,this.node=this.text=null,this.hidden=sf(a,b)}function fd(a,b,c){for(var e,d=[],f=b;c>f;f=e){var g=new ed(a.doc,bg(a.doc,f),f);e=f+g.size,d.push(g)}return d}function gd(a,b,c,d){null==b&&(b=a.doc.first),null==c&&(c=a.doc.first+a.doc.size),d||(d=0);var e=a.display;if(d&&c<e.viewTo&&(null==e.updateLineNumbers||e.updateLineNumbers>b)&&(e.updateLineNumbers=b),a.curOp.viewChanged=!0,b>=e.viewTo)u&&qf(a.doc,b)<e.viewTo&&id(a);else if(c<=e.viewFrom)u&&rf(a.doc,c+d)>e.viewFrom?id(a):(e.viewFrom+=d,e.viewTo+=d);else if(b<=e.viewFrom&&c>=e.viewTo)id(a);else if(b<=e.viewFrom){var f=kd(a,c,c+d,1);f?(e.view=e.view.slice(f.index),e.viewFrom=f.lineN,e.viewTo+=d):id(a)}else if(c>=e.viewTo){var f=kd(a,b,b,-1);f?(e.view=e.view.slice(0,f.index),e.viewTo=f.lineN):id(a)}else{var g=kd(a,b,b,-1),h=kd(a,c,c+d,1);g&&h?(e.view=e.view.slice(0,g.index).concat(fd(a,g.lineN,h.lineN)).concat(e.view.slice(h.index)),e.viewTo+=d):id(a)}var i=e.externalMeasured;i&&(c<i.lineN?i.lineN+=d:b<i.lineN+i.size&&(e.externalMeasured=null))}function hd(a,b,c){a.curOp.viewChanged=!0;var d=a.display,e=a.display.externalMeasured;if(e&&b>=e.lineN&&b<e.lineN+e.size&&(d.externalMeasured=null),!(b<d.viewFrom||b>=d.viewTo)){var f=d.view[jd(a,b)];if(null!=f.node){var g=f.changes||(f.changes=[]);-1==$g(g,c)&&g.push(c)}}}function id(a){a.display.viewFrom=a.display.viewTo=a.doc.first,a.display.view=[],a.display.viewOffset=0}function jd(a,b){if(b>=a.display.viewTo)return null;if(b-=a.display.viewFrom,0>b)return null;for(var c=a.display.view,d=0;d<c.length;d++)if(b-=c[d].size,0>b)return d}function kd(a,b,c,d){var f,e=jd(a,b),g=a.display.view;if(!u||c==a.doc.first+a.doc.size)return{index:e,lineN:c};for(var h=0,i=a.display.viewFrom;e>h;h++)i+=g[h].size;if(i!=b){if(d>0){if(e==g.length-1)return null;f=i+g[e].size-b,e++}else f=i-b;b+=f,c+=f}for(;qf(a.doc,c)!=c;){if(e==(0>d?0:g.length-1))return null;c+=d*g[e-(0>d?1:0)].size,e+=d}return{index:e,lineN:c}}function ld(a,b,c){var d=a.display,e=d.view;0==e.length||b>=d.viewTo||c<=d.viewFrom?(d.view=fd(a,b,c),d.viewFrom=b):(d.viewFrom>b?d.view=fd(a,b,d.viewFrom).concat(d.view):d.viewFrom<b&&(d.view=d.view.slice(jd(a,b))),d.viewFrom=b,d.viewTo<c?d.view=d.view.concat(fd(a,d.viewTo,c)):d.viewTo>c&&(d.view=d.view.slice(0,jd(a,c)))),d.viewTo=c}function md(a){for(var b=a.display.view,c=0,d=0;d<b.length;d++){var e=b[d];e.hidden||e.node&&!e.changes||++c}return c}function nd(a){function g(){b.activeTouch&&(c=setTimeout(function(){b.activeTouch=null},1e3),f=b.activeTouch,f.end=+new Date)}function h(a){if(1!=a.touches.length)return!1;var b=a.touches[0];return b.radiusX<=1&&b.radiusY<=1}function i(a,b){if(null==b.left)return!0;var c=b.left-a.left,d=b.top-a.top;return c*c+d*d>400}function j(b){Kg(a,b)||Bg(b)}var b=a.display;Eg(b.scroller,"mousedown",bd(a,rd)),d&&11>e?Eg(b.scroller,"dblclick",bd(a,function(b){if(!Kg(a,b)){var c=qd(a,b);if(c&&!yd(a,b)&&!pd(a.display,b)){yg(b);var d=a.findWordAt(c);Rb(a.doc,d.anchor,d.head)}}})):Eg(b.scroller,"dblclick",function(b){Kg(a,b)||yg(b)}),s||Eg(b.scroller,"contextmenu",function(b){Wd(a,b)});var c,f={end:0};Eg(b.scroller,"touchstart",function(a){if(!h(a)){clearTimeout(c);var d=+new Date;b.activeTouch={start:d,moved:!1,prev:d-f.end<=300?f:null},1==a.touches.length&&(b.activeTouch.left=a.touches[0].pageX,b.activeTouch.top=a.touches[0].pageY)}}),Eg(b.scroller,"touchmove",function(){b.activeTouch&&(b.activeTouch.moved=!0)}),Eg(b.scroller,"touchend",function(c){var d=b.activeTouch;if(d&&!pd(b,c)&&null!=d.left&&!d.moved&&new Date-d.start<300){var f,e=a.coordsChar(b.activeTouch,"page");f=!d.prev||i(d,d.prev)?new Ib(e,e):!d.prev.prev||i(d,d.prev.prev)?a.findWordAt(e):new Ib(ob(e.line,0),Mb(a.doc,ob(e.line+1,0))),a.setSelection(f.anchor,f.head),a.focus(),yg(c)}g()}),Eg(b.scroller,"touchcancel",g),Eg(b.scroller,"scroll",function(){b.scroller.clientHeight&&(Cd(a,b.scroller.scrollTop),Dd(a,b.scroller.scrollLeft,!0),Gg(a,"scroll",a))}),Eg(b.scroller,"mousewheel",function(b){Hd(a,b)}),Eg(b.scroller,"DOMMouseScroll",function(b){Hd(a,b)}),Eg(b.wrapper,"scroll",function(){b.wrapper.scrollTop=b.wrapper.scrollLeft=0}),a.options.dragDrop&&(Eg(b.scroller,"dragstart",function(b){Bd(a,b)}),Eg(b.scroller,"dragenter",j),Eg(b.scroller,"dragover",j),Eg(b.scroller,"drop",bd(a,Ad)));var k=b.input.getField();Eg(k,"keyup",function(b){Rd.call(a,b)}),Eg(k,"keydown",bd(a,Pd)),Eg(k,"keypress",bd(a,Sd)),Eg(k,"focus",dh(Ud,a)),Eg(k,"blur",dh(Vd,a))}function od(a){var b=a.display;(b.lastWrapHeight!=b.wrapper.clientHeight||b.lastWrapWidth!=b.wrapper.clientWidth)&&(b.cachedCharWidth=b.cachedTextHeight=b.cachedPaddingH=null,b.scrollbarsClipped=!1,a.setSize())}function pd(a,b){for(var c=Cg(b);c!=a.wrapper;c=c.parentNode)if(!c||1==c.nodeType&&"true"==c.getAttribute("cm-ignore-events")||c.parentNode==a.sizer&&c!=a.mover)return!0}function qd(a,b,c,d){var e=a.display;if(!c&&"true"==Cg(b).getAttribute("cm-not-content"))return null;var f,g,h=e.lineSpace.getBoundingClientRect();try{f=b.clientX-h.left,g=b.clientY-h.top}catch(b){return null}var j,i=Mc(a,f,g);if(d&&1==i.xRel&&(j=bg(a.doc,i.line).text).length==i.ch){var k=Ug(j,j.length,a.options.tabSize)-j.length;i=ob(i.line,Math.max(0,Math.round((f-mc(a.display).left)/Qc(a.display))-k))}return i}function rd(a){var b=this,c=b.display;if(!(c.activeTouch&&c.input.supportsTouch()||Kg(b,a))){if(c.shift=a.shiftKey,pd(c,a))return f||(c.scroller.draggable=!1,setTimeout(function(){c.scroller.draggable=!0},100)),void 0;if(!yd(b,a)){var d=qd(b,a);switch(window.focus(),Dg(a)){case 1:d?ud(b,a,d):Cg(a)==c.scroller&&yg(a);break;case 2:f&&(b.state.lastMiddleDown=+new Date),d&&Rb(b.doc,d),setTimeout(function(){c.input.focus()},20),yg(a);break;case 3:s?Wd(b,a):Td(b)}}}}function ud(a,b,c){d?setTimeout(dh(tb,a),0):tb(a);var f,e=+new Date;td&&td.time>e-400&&0==pb(td.pos,c)?f="triple":sd&&sd.time>e-400&&0==pb(sd.pos,c)?(f="double",td={time:e,pos:c}):(f="single",sd={time:e,pos:c});var i,g=a.doc.sel,h=o?b.metaKey:b.ctrlKey;a.options.dragDrop&&yh&&!ub(a)&&"single"==f&&(i=g.contains(c))>-1&&!g.ranges[i].empty()?vd(a,b,c,h):wd(a,b,c,f,h)}function vd(a,b,c,g){var h=a.display,i=bd(a,function(j){f&&(h.scroller.draggable=!1),a.state.draggingText=!1,Fg(document,"mouseup",i),Fg(h.scroller,"drop",i),Math.abs(b.clientX-j.clientX)+Math.abs(b.clientY-j.clientY)<10&&(yg(j),g||Rb(a.doc,c),f||d&&9==e?setTimeout(function(){document.body.focus(),h.input.focus()},20):h.input.focus())});f&&(h.scroller.draggable=!0),a.state.draggingText=i,h.scroller.dragDrop&&h.scroller.dragDrop(),Eg(document,"mouseup",i),Eg(h.scroller,"drop",i)}function wd(a,b,c,d,e){function o(b){if(0!=pb(n,b))if(n=b,"rect"==d){for(var e=[],f=a.options.tabSize,k=Ug(bg(g,c.line).text,c.ch,f),l=Ug(bg(g,b.line).text,b.ch,f),m=Math.min(k,l),o=Math.max(k,l),p=Math.min(c.line,b.line),q=Math.min(a.lastLine(),Math.max(c.line,b.line));q>=p;p++){var r=bg(g,p).text,s=Vg(r,m,f);m==o?e.push(new Ib(ob(p,s),ob(p,s))):r.length>s&&e.push(new Ib(ob(p,s),ob(p,Vg(r,o,f))))}e.length||e.push(new Ib(c,c)),Xb(g,Jb(j.ranges.slice(0,i).concat(e),i),{origin:"*mouse",scroll:!1}),a.scrollIntoView(b)}else{var t=h,u=t.anchor,v=b;if("single"!=d){if("double"==d)var w=a.findWordAt(b);else var w=new Ib(ob(b.line,0),Mb(g,ob(b.line+1,0)));pb(w.anchor,u)>0?(v=w.head,u=sb(t.from(),w.anchor)):(v=w.anchor,u=rb(t.to(),w.head))}var e=j.ranges.slice(0);e[i]=new Ib(Mb(g,u),v),Xb(g,Jb(e,i),Rg)}}function r(b){var c=++q,e=qd(a,b,!0,"rect"==d);if(e)if(0!=pb(e,n)){tb(a),o(e);var h=P(f,g);(e.line>=h.to||e.line<h.from)&&setTimeout(bd(a,function(){q==c&&r(b)}),150)}else{var i=b.clientY<p.top?-20:b.clientY>p.bottom?20:0;i&&setTimeout(bd(a,function(){q==c&&(f.scroller.scrollTop+=i,r(b))}),50)}}function s(a){q=1/0,yg(a),f.input.focus(),Fg(document,"mousemove",t),Fg(document,"mouseup",u),g.history.lastSelOrigin=null}var f=a.display,g=a.doc;yg(b);var h,i,j=g.sel,k=j.ranges;if(e&&!b.shiftKey?(i=g.sel.contains(c),h=i>-1?k[i]:new Ib(c,c)):(h=g.sel.primary(),i=g.sel.primIndex),b.altKey)d="rect",e||(h=new Ib(c,c)),c=qd(a,b,!0,!0),i=-1;else if("double"==d){var l=a.findWordAt(c);h=a.display.shift||g.extend?Qb(g,h,l.anchor,l.head):l}else if("triple"==d){var m=new Ib(ob(c.line,0),Mb(g,ob(c.line+1,0)));h=a.display.shift||g.extend?Qb(g,h,m.anchor,m.head):m}else h=Qb(g,h,c);e?-1==i?(i=k.length,Xb(g,Jb(k.concat([h]),i),{scroll:!1,origin:"*mouse"})):k.length>1&&k[i].empty()&&"single"==d&&!b.shiftKey?(Xb(g,Jb(k.slice(0,i).concat(k.slice(i+1)),0)),j=g.sel):Tb(g,i,h,Rg):(i=0,Xb(g,new Hb([h],0),Rg),j=g.sel);var n=c,p=f.wrapper.getBoundingClientRect(),q=0,t=bd(a,function(a){Dg(a)?r(a):s(a)}),u=bd(a,s);Eg(document,"mousemove",t),Eg(document,"mouseup",u)}function xd(a,b,c,d,e){try{var f=b.clientX,g=b.clientY}catch(b){return!1}if(f>=Math.floor(a.display.gutters.getBoundingClientRect().right))return!1;d&&yg(b);var h=a.display,i=h.lineDiv.getBoundingClientRect();if(g>i.bottom||!Mg(a,c))return Ag(b);g-=i.top-h.viewOffset;for(var j=0;j<a.options.gutters.length;++j){var k=h.gutters.childNodes[j];if(k&&k.getBoundingClientRect().right>=f){var l=gg(a.doc,g),m=a.options.gutters[j];return e(a,c,a,l,m,b),Ag(b)}}}function yd(a,b){return xd(a,b,"gutterClick",!0,Ig)}function Ad(a){var b=this;if(!Kg(b,a)&&!pd(b.display,a)){yg(a),d&&(zd=+new Date);var c=qd(b,a,!0),e=a.dataTransfer.files;if(c&&!ub(b))if(e&&e.length&&window.FileReader&&window.File)for(var f=e.length,g=Array(f),h=0,i=function(a,d){var e=new FileReader;e.onload=bd(b,function(){if(g[d]=e.result,++h==f){c=Mb(b.doc,c);var a={from:c,to:c,text:Dh(g.join("\n")),origin:"paste"};ce(b.doc,a),Wb(b.doc,Kb(c,Yd(a)))}}),e.readAsText(a)},j=0;f>j;++j)i(e[j],j);else{if(b.state.draggingText&&b.doc.sel.contains(c)>-1)return b.state.draggingText(a),setTimeout(function(){b.display.input.focus()},20),void 0;try{var g=a.dataTransfer.getData("Text");if(g){if(b.state.draggingText&&!(o?a.metaKey:a.ctrlKey))var k=b.listSelections();if(Yb(b.doc,Kb(c,c)),k)for(var j=0;j<k.length;++j)ie(b.doc,"",k[j].anchor,k[j].head,"drag");b.replaceSelection(g,"around","paste"),b.display.input.focus()}}catch(a){}}}}function Bd(a,b){if(d&&(!a.state.draggingText||+new Date-zd<100))return Bg(b),void 0;if(!Kg(a,b)&&!pd(a.display,b)&&(b.dataTransfer.setData("Text",a.getSelection()),b.dataTransfer.setDragImage&&!j)){var c=kh("img",null,null,"position: fixed; left: 0; top: 0;");c.src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",i&&(c.width=c.height=1,a.display.wrapper.appendChild(c),c._top=c.offsetTop),b.dataTransfer.setDragImage(c,0,0),i&&c.parentNode.removeChild(c)}}function Cd(b,c){Math.abs(b.doc.scrollTop-c)<2||(b.doc.scrollTop=c,a||Y(b,{top:c}),b.display.scroller.scrollTop!=c&&(b.display.scroller.scrollTop=c),b.display.scrollbars.setScrollTop(c),a&&Y(b),gc(b,100))}function Dd(a,b,c){(c?b==a.doc.scrollLeft:Math.abs(a.doc.scrollLeft-b)<2)||(b=Math.min(b,a.display.scroller.scrollWidth-a.display.scroller.clientWidth),a.doc.scrollLeft=b,Q(a),a.display.scroller.scrollLeft!=b&&(a.display.scroller.scrollLeft=b),a.display.scrollbars.setScrollLeft(b))}function Hd(b,c){var d=Gd(c),e=d.x,g=d.y,h=b.display,j=h.scroller;if(e&&j.scrollWidth>j.clientWidth||g&&j.scrollHeight>j.clientHeight){if(g&&o&&f)a:for(var k=c.target,l=h.view;k!=j;k=k.parentNode)for(var m=0;m<l.length;m++)if(l[m].node==k){b.display.currentWheelTarget=k;break a}if(e&&!a&&!i&&null!=Fd)return g&&Cd(b,Math.max(0,Math.min(j.scrollTop+g*Fd,j.scrollHeight-j.clientHeight))),Dd(b,Math.max(0,Math.min(j.scrollLeft+e*Fd,j.scrollWidth-j.clientWidth))),yg(c),h.wheelStartX=null,void 0;if(g&&null!=Fd){var n=g*Fd,p=b.doc.scrollTop,q=p+h.wrapper.clientHeight;0>n?p=Math.max(0,p+n-50):q=Math.min(b.doc.height,q+n+50),Y(b,{top:p,bottom:q})}20>Ed&&(null==h.wheelStartX?(h.wheelStartX=j.scrollLeft,h.wheelStartY=j.scrollTop,h.wheelDX=e,h.wheelDY=g,setTimeout(function(){if(null!=h.wheelStartX){var a=j.scrollLeft-h.wheelStartX,b=j.scrollTop-h.wheelStartY,c=b&&h.wheelDY&&b/h.wheelDY||a&&h.wheelDX&&a/h.wheelDX;h.wheelStartX=h.wheelStartY=null,c&&(Fd=(Fd*Ed+c)/(Ed+1),++Ed)}},200)):(h.wheelDX+=e,h.wheelDY+=g))}}function Id(a,b,c){if("string"==typeof b&&(b=Ge[b],!b))return!1;a.display.input.ensurePolled();var d=a.display.shift,e=!1;try{ub(a)&&(a.state.suppressEdits=!0),c&&(a.display.shift=!1),e=b(a)!=Pg}finally{a.display.shift=d,a.state.suppressEdits=!1}return e}function Jd(a,b,c){for(var d=0;d<a.state.keyMaps.length;d++){var e=Je(b,a.state.keyMaps[d],c,a);if(e)return e}return a.options.extraKeys&&Je(b,a.options.extraKeys,c,a)||Je(b,a.options.keyMap,c,a)}function Ld(a,b,c,d){var e=a.state.keySeq;if(e){if(Ke(b))return"handled";Kd.set(50,function(){a.state.keySeq==e&&(a.state.keySeq=null,a.display.input.reset())}),b=e+" "+b}var f=Jd(a,b,d);return"multi"==f&&(a.state.keySeq=b),"handled"==f&&Ig(a,"keyHandled",a,b,c),("handled"==f||"multi"==f)&&(yg(c),fc(a)),e&&!f&&/\'$/.test(b)?(yg(c),!0):!!f}function Md(a,b){var c=Le(b,!0);return c?b.shiftKey&&!a.state.keySeq?Ld(a,"Shift-"+c,b,function(b){return Id(a,b,!0)})||Ld(a,c,b,function(b){return("string"==typeof b?/^go[A-Z]/.test(b):b.motion)?Id(a,b):void 0}):Ld(a,c,b,function(b){return Id(a,b)}):!1}function Nd(a,b,c){return Ld(a,"'"+c+"'",b,function(b){return Id(a,b,!0)})}function Pd(a){var b=this;if(tb(b),!Kg(b,a)){d&&11>e&&27==a.keyCode&&(a.returnValue=!1);var c=a.keyCode;b.display.shift=16==c||a.shiftKey;var f=Md(b,a);i&&(Od=f?c:null,!f&&88==c&&!Fh&&(o?a.metaKey:a.ctrlKey)&&b.replaceSelection("",null,"cut")),18!=c||/\bCodeMirror-crosshair\b/.test(b.display.lineDiv.className)||Qd(b)}}function Qd(a){function c(a){18!=a.keyCode&&a.altKey||(rh(b,"CodeMirror-crosshair"),Fg(document,"keyup",c),Fg(document,"mouseover",c))}var b=a.display.lineDiv;sh(b,"CodeMirror-crosshair"),Eg(document,"keyup",c),Eg(document,"mouseover",c)}function Rd(a){16==a.keyCode&&(this.doc.sel.shift=!1),Kg(this,a)}function Sd(a){var b=this;if(!(pd(b.display,a)||Kg(b,a)||a.ctrlKey&&!a.altKey||o&&a.metaKey)){var c=a.keyCode,d=a.charCode;if(i&&c==Od)return Od=null,yg(a),void 0;if(!i||a.which&&!(a.which<10)||!Md(b,a)){var e=String.fromCharCode(null==d?c:d);Nd(b,a,e)||b.display.input.onKeyPress(a)}}}function Td(a){a.state.delayingBlurEvent=!0,setTimeout(function(){a.state.delayingBlurEvent&&(a.state.delayingBlurEvent=!1,Vd(a))},100)}function Ud(a){a.state.delayingBlurEvent&&(a.state.delayingBlurEvent=!1),"nocursor"!=a.options.readOnly&&(a.state.focused||(Gg(a,"focus",a),a.state.focused=!0,sh(a.display.wrapper,"CodeMirror-focused"),a.curOp||a.display.selForContextMenu==a.doc.sel||(a.display.input.reset(),f&&setTimeout(function(){a.display.input.reset(!0)},20)),a.display.input.receivedFocus()),fc(a))}function Vd(a){a.state.delayingBlurEvent||(a.state.focused&&(Gg(a,"blur",a),a.state.focused=!1,rh(a.display.wrapper,"CodeMirror-focused")),clearInterval(a.display.blinker),setTimeout(function(){a.state.focused||(a.display.shift=!1)},150))}function Wd(a,b){pd(a.display,b)||Xd(a,b)||a.display.input.onContextMenu(b)}function Xd(a,b){return Mg(a,"gutterContextMenu")?xd(a,b,"gutterContextMenu",!1,Gg):!1}function Zd(a,b){if(pb(a,b.from)<0)return a;if(pb(a,b.to)<=0)return Yd(b);var c=a.line+b.text.length-(b.to.line-b.from.line)-1,d=a.ch;return a.line==b.to.line&&(d+=Yd(b).ch-b.to.ch),ob(c,d)}function $d(a,b){for(var c=[],d=0;d<a.sel.ranges.length;d++){var e=a.sel.ranges[d];c.push(new Ib(Zd(e.anchor,b),Zd(e.head,b)))}return Jb(c,a.sel.primIndex)}function _d(a,b,c){return a.line==b.line?ob(c.line,a.ch-b.ch+c.ch):ob(c.line+(a.line-b.line),a.ch)}function ae(a,b,c){for(var d=[],e=ob(a.first,0),f=e,g=0;g<b.length;g++){var h=b[g],i=_d(h.from,e,f),j=_d(Yd(h),e,f);if(e=h.to,f=j,"around"==c){var k=a.sel.ranges[g],l=pb(k.head,k.anchor)<0;d[g]=new Ib(l?j:i,l?i:j)}else d[g]=new Ib(i,i)}return new Hb(d,a.sel.primIndex)}function be(a,b,c){var d={canceled:!1,from:b.from,to:b.to,text:b.text,origin:b.origin,cancel:function(){this.canceled=!0}};return c&&(d.update=function(b,c,d,e){b&&(this.from=Mb(a,b)),c&&(this.to=Mb(a,c)),d&&(this.text=d),void 0!==e&&(this.origin=e)}),Gg(a,"beforeChange",a,d),a.cm&&Gg(a.cm,"beforeChange",a.cm,d),d.canceled?null:{from:d.from,to:d.to,text:d.text,origin:d.origin}}function ce(a,b,c){if(a.cm){if(!a.cm.curOp)return bd(a.cm,ce)(a,b,c);if(a.cm.state.suppressEdits)return}if(!(Mg(a,"beforeChange")||a.cm&&Mg(a.cm,"beforeChange"))||(b=be(a,b,!0))){var d=t&&!c&&df(a,b.from,b.to);if(d)for(var e=d.length-1;e>=0;--e)de(a,{from:d[e].from,to:d[e].to,text:e?[""]:b.text});else de(a,b)}}function de(a,b){if(1!=b.text.length||""!=b.text[0]||0!=pb(b.from,b.to)){var c=$d(a,b);ng(a,b,c,a.cm?a.cm.curOp.id:0/0),ge(a,b,c,af(a,b));var d=[];_f(a,function(a,c){c||-1!=$g(d,a.history)||(xg(a.history,b),d.push(a.history)),ge(a,b,null,af(a,b))})}}function ee(a,b,c){if(!a.cm||!a.cm.state.suppressEdits){for(var e,d=a.history,f=a.sel,g="undo"==b?d.done:d.undone,h="undo"==b?d.undone:d.done,i=0;i<g.length&&(e=g[i],c?!e.ranges||e.equals(a.sel):e.ranges);i++);if(i!=g.length){for(d.lastOrigin=d.lastSelOrigin=null;e=g.pop(),e.ranges;){if(qg(e,h),c&&!e.equals(a.sel))return Xb(a,e,{clearRedo:!1}),void 0;f=e}var j=[];qg(f,h),h.push({changes:j,generation:d.generation}),d.generation=e.generation||++d.maxGeneration;for(var k=Mg(a,"beforeChange")||a.cm&&Mg(a.cm,"beforeChange"),i=e.changes.length-1;i>=0;--i){var l=e.changes[i];if(l.origin=b,k&&!be(a,l,!1))return g.length=0,void 0;j.push(kg(a,l));var m=i?$d(a,l):Yg(g);ge(a,l,m,cf(a,l)),!i&&a.cm&&a.cm.scrollIntoView({from:l.from,to:Yd(l)});var n=[];_f(a,function(a,b){b||-1!=$g(n,a.history)||(xg(a.history,l),n.push(a.history)),ge(a,l,null,cf(a,l))})}}}}function fe(a,b){if(0!=b&&(a.first+=b,a.sel=new Hb(_g(a.sel.ranges,function(a){return new Ib(ob(a.anchor.line+b,a.anchor.ch),ob(a.head.line+b,a.head.ch))}),a.sel.primIndex),a.cm)){gd(a.cm,a.first,a.first-b,b);for(var c=a.cm.display,d=c.viewFrom;d<c.viewTo;d++)hd(a.cm,d,"gutter")}}function ge(a,b,c,d){if(a.cm&&!a.cm.curOp)return bd(a.cm,ge)(a,b,c,d);if(b.to.line<a.first)return fe(a,b.text.length-1-(b.to.line-b.from.line)),void 0;if(!(b.from.line>a.lastLine())){if(b.from.line<a.first){var e=b.text.length-1-(a.first-b.from.line);fe(a,e),b={from:ob(a.first,0),to:ob(b.to.line+e,b.to.ch),text:[Yg(b.text)],origin:b.origin}}var f=a.lastLine();b.to.line>f&&(b={from:b.from,to:ob(f,bg(a,f).text.length),text:[b.text[0]],origin:b.origin}),b.removed=cg(a,b.from,b.to),c||(c=$d(a,b)),a.cm?he(a.cm,b,d):Uf(a,b,d),Yb(a,c,Qg)}}function he(a,b,c){var d=a.doc,e=a.display,f=b.from,g=b.to,h=!1,i=f.line;a.options.lineWrapping||(i=fg(of(bg(d,f.line))),d.iter(i,g.line+1,function(a){return a==e.maxLine?(h=!0,!0):void 0})),d.sel.contains(b.from,b.to)>-1&&Lg(a),Uf(d,b,c,A(a)),a.options.lineWrapping||(d.iter(i,f.line+b.text.length,function(a){var b=G(a);b>e.maxLineLength&&(e.maxLine=a,e.maxLineLength=b,e.maxLineChanged=!0,h=!1)}),h&&(a.curOp.updateMaxLine=!0)),d.frontier=Math.min(d.frontier,f.line),gc(a,400);var j=b.text.length-(g.line-f.line)-1;b.full?gd(a):f.line!=g.line||1!=b.text.length||Tf(a.doc,b)?gd(a,f.line,g.line+1,j):hd(a,f.line,"text");var k=Mg(a,"changes"),l=Mg(a,"change");if(l||k){var m={from:f,to:g,text:b.text,removed:b.removed,origin:b.origin};l&&Ig(a,"change",a,m),k&&(a.curOp.changeObjs||(a.curOp.changeObjs=[])).push(m)}a.display.selForContextMenu=null}function ie(a,b,c,d,e){if(d||(d=c),pb(d,c)<0){var f=d;d=c,c=f}"string"==typeof b&&(b=Dh(b)),ce(a,{from:c,to:d,text:b,origin:e})}function je(a,b){if(!Kg(a,"scrollCursorIntoView")){var c=a.display,d=c.sizer.getBoundingClientRect(),e=null;if(b.top+d.top<0?e=!0:b.bottom+d.top>(window.innerHeight||document.documentElement.clientHeight)&&(e=!1),null!=e&&!l){var f=kh("div","\u200b",null,"position: absolute; top: "+(b.top-c.viewOffset-kc(a.display))+"px; height: "+(b.bottom-b.top+nc(a)+c.barHeight)+"px; left: "+b.left+"px; width: 2px;");a.display.lineSpace.appendChild(f),f.scrollIntoView(e),a.display.lineSpace.removeChild(f)}}}function ke(a,b,c,d){null==d&&(d=0);for(var e=0;5>e;e++){var f=!1,g=Jc(a,b),h=c&&c!=b?Jc(a,c):g,i=me(a,Math.min(g.left,h.left),Math.min(g.top,h.top)-d,Math.max(g.left,h.left),Math.max(g.bottom,h.bottom)+d),j=a.doc.scrollTop,k=a.doc.scrollLeft;if(null!=i.scrollTop&&(Cd(a,i.scrollTop),Math.abs(a.doc.scrollTop-j)>1&&(f=!0)),null!=i.scrollLeft&&(Dd(a,i.scrollLeft),Math.abs(a.doc.scrollLeft-k)>1&&(f=!0)),!f)break}return g}function le(a,b,c,d,e){var f=me(a,b,c,d,e);null!=f.scrollTop&&Cd(a,f.scrollTop),null!=f.scrollLeft&&Dd(a,f.scrollLeft)}function me(a,b,c,d,e){var f=a.display,g=Pc(a.display);0>c&&(c=0);var h=a.curOp&&null!=a.curOp.scrollTop?a.curOp.scrollTop:f.scroller.scrollTop,i=pc(a),j={};e-c>i&&(e=c+i);var k=a.doc.height+lc(f),l=g>c,m=e>k-g;if(h>c)j.scrollTop=l?0:c;else if(e>h+i){var n=Math.min(c,(m?k:e)-i);n!=h&&(j.scrollTop=n)}var o=a.curOp&&null!=a.curOp.scrollLeft?a.curOp.scrollLeft:f.scroller.scrollLeft,p=oc(a)-(a.options.fixedGutter?f.gutters.offsetWidth:0),q=d-b>p;return q&&(d=b+p),10>b?j.scrollLeft=0:o>b?j.scrollLeft=Math.max(0,b-(q?0:10)):d>p+o-3&&(j.scrollLeft=d+(q?0:10)-p),j}function ne(a,b,c){(null!=b||null!=c)&&pe(a),null!=b&&(a.curOp.scrollLeft=(null==a.curOp.scrollLeft?a.doc.scrollLeft:a.curOp.scrollLeft)+b),null!=c&&(a.curOp.scrollTop=(null==a.curOp.scrollTop?a.doc.scrollTop:a.curOp.scrollTop)+c)}function oe(a){pe(a);var b=a.getCursor(),c=b,d=b;a.options.lineWrapping||(c=b.ch?ob(b.line,b.ch-1):b,d=ob(b.line,b.ch+1)),a.curOp.scrollToPos={from:c,to:d,margin:a.options.cursorScrollMargin,isCursor:!0}}function pe(a){var b=a.curOp.scrollToPos;if(b){a.curOp.scrollToPos=null;var c=Kc(a,b.from),d=Kc(a,b.to),e=me(a,Math.min(c.left,d.left),Math.min(c.top,d.top)-b.margin,Math.max(c.right,d.right),Math.max(c.bottom,d.bottom)+b.margin);a.scrollTo(e.scrollLeft,e.scrollTop)}}function qe(a,b,c,d){var f,e=a.doc;null==c&&(c="add"),"smart"==c&&(e.mode.indent?f=jc(a,b):c="prev");var g=a.options.tabSize,h=bg(e,b),i=Ug(h.text,null,g);h.stateAfter&&(h.stateAfter=null);var k,j=h.text.match(/^\s*/)[0];if(d||/\S/.test(h.text)){if("smart"==c&&(k=e.mode.indent(f,h.text.slice(j.length),h.text),k==Pg||k>150)){if(!d)return;c="prev"}}else k=0,c="not";"prev"==c?k=b>e.first?Ug(bg(e,b-1).text,null,g):0:"add"==c?k=i+a.options.indentUnit:"subtract"==c?k=i-a.options.indentUnit:"number"==typeof c&&(k=i+c),k=Math.max(0,k);var l="",m=0;if(a.options.indentWithTabs)for(var n=Math.floor(k/g);n;--n)m+=g,l+=" ";if(k>m&&(l+=Xg(k-m)),l!=j)ie(e,l,ob(b,0),ob(b,j.length),"+input");else for(var n=0;n<e.sel.ranges.length;n++){var o=e.sel.ranges[n];if(o.head.line==b&&o.head.ch<j.length){var m=ob(b,j.length);Tb(e,n,new Ib(m,m));break}}h.stateAfter=null}function re(a,b,c,d){var e=b,f=b;return"number"==typeof b?f=bg(a,Lb(a,b)):e=fg(b),null==e?null:(d(f,e)&&a.cm&&hd(a.cm,e,c),f)}function se(a,b){for(var c=a.doc.sel.ranges,d=[],e=0;e<c.length;e++){for(var f=b(c[e]);d.length&&pb(f.from,Yg(d).to)<=0;){var g=d.pop();if(pb(g.from,f.from)<0){f.from=g.from;break}}d.push(f)}ad(a,function(){for(var b=d.length-1;b>=0;b--)ie(a.doc,"",d[b].from,d[b].to,"+delete");oe(a)})}function te(a,b,c,d,e){function k(){var b=f+c;return b<a.first||b>=a.first+a.size?j=!1:(f=b,i=bg(a,b))}function l(a){var b=(e?Vh:Wh)(i,g,c,!0);if(null==b){if(a||!k())return j=!1;g=e?(0>c?Nh:Mh)(i):0>c?i.text.length:0}else g=b;return!0}var f=b.line,g=b.ch,h=c,i=bg(a,f),j=!0;if("char"==d)l();else if("column"==d)l(!0);else if("word"==d||"group"==d)for(var m=null,n="group"==d,o=a.cm&&a.cm.getHelper(b,"wordChars"),p=!0;!(0>c)||l(!p);p=!1){var q=i.text.charAt(g)||"\n",r=gh(q,o)?"w":n&&"\n"==q?"n":!n||/\s/.test(q)?null:"p";if(!n||p||r||(r="s"),m&&m!=r){0>c&&(c=1,l());break}if(r&&(m=r),c>0&&!l(!p))break}var s=ac(a,ob(f,g),h,!0);return j||(s.hitSide=!0),s}function ue(a,b,c,d){var g,e=a.doc,f=b.left;if("page"==d){var h=Math.min(a.display.wrapper.clientHeight,window.innerHeight||document.documentElement.clientHeight);g=b.top+c*(h-(0>c?1.5:.5)*Pc(a.display))}else"line"==d&&(g=c>0?b.bottom+3:b.top-3);for(;;){var i=Mc(a,f,g);if(!i.outside)break;if(0>c?0>=g:g>=e.height){i.hitSide=!0;break}g+=5*c}return i}function xe(a,b,c,d){v.defaults[a]=b,c&&(we[a]=d?function(a,b,d){d!=ye&&c(a,b,d)}:c)}function Ie(a){for(var c,d,e,f,b=a.split(/-(?!$)/),a=b[b.length-1],g=0;g<b.length-1;g++){var h=b[g];
if(/^(cmd|meta|m)$/i.test(h))f=!0;else if(/^a(lt)?$/i.test(h))c=!0;else if(/^(c|ctrl|control)$/i.test(h))d=!0;else{if(!/^s(hift)$/i.test(h))throw new Error("Unrecognized modifier name: "+h);e=!0}}return c&&(a="Alt-"+a),d&&(a="Ctrl-"+a),f&&(a="Cmd-"+a),e&&(a="Shift-"+a),a}function Me(a){return"string"==typeof a?He[a]:a}function Qe(a,b,c,d,e){if(d&&d.shared)return Se(a,b,c,d,e);if(a.cm&&!a.cm.curOp)return bd(a.cm,Qe)(a,b,c,d,e);var f=new Pe(a,e),g=pb(b,c);if(d&&ch(d,f,!1),g>0||0==g&&f.clearWhenEmpty!==!1)return f;if(f.replacedWith&&(f.collapsed=!0,f.widgetNode=kh("span",[f.replacedWith],"CodeMirror-widget"),d.handleMouseEvents||f.widgetNode.setAttribute("cm-ignore-events","true"),d.insertLeft&&(f.widgetNode.insertLeft=!0)),f.collapsed){if(nf(a,b.line,b,c,f)||b.line!=c.line&&nf(a,c.line,b,c,f))throw new Error("Inserting collapsed marker partially overlapping an existing one");u=!0}f.addToHistory&&ng(a,{from:b,to:c,origin:"markText"},a.sel,0/0);var j,h=b.line,i=a.cm;if(a.iter(h,c.line+1,function(a){i&&f.collapsed&&!i.options.lineWrapping&&of(a)==i.display.maxLine&&(j=!0),f.collapsed&&h!=b.line&&eg(a,0),Ze(a,new We(f,h==b.line?b.ch:null,h==c.line?c.ch:null)),++h}),f.collapsed&&a.iter(b.line,c.line+1,function(b){sf(a,b)&&eg(b,0)}),f.clearOnEnter&&Eg(f,"beforeCursorEnter",function(){f.clear()}),f.readOnly&&(t=!0,(a.history.done.length||a.history.undone.length)&&a.clearHistory()),f.collapsed&&(f.id=++Oe,f.atomic=!0),i){if(j&&(i.curOp.updateMaxLine=!0),f.collapsed)gd(i,b.line,c.line+1);else if(f.className||f.title||f.startStyle||f.endStyle||f.css)for(var k=b.line;k<=c.line;k++)hd(i,k,"text");f.atomic&&$b(i.doc),Ig(i,"markerAdded",i,f)}return f}function Se(a,b,c,d,e){d=ch(d),d.shared=!1;var f=[Qe(a,b,c,d,e)],g=f[0],h=d.widgetNode;return _f(a,function(a){h&&(d.widgetNode=h.cloneNode(!0)),f.push(Qe(a,Mb(a,b),Mb(a,c),d,e));for(var i=0;i<a.linked.length;++i)if(a.linked[i].isParent)return;g=Yg(f)}),new Re(f,g)}function Te(a){return a.findMarks(ob(a.first,0),a.clipPos(ob(a.lastLine())),function(a){return a.parent})}function Ue(a,b){for(var c=0;c<b.length;c++){var d=b[c],e=d.find(),f=a.clipPos(e.from),g=a.clipPos(e.to);if(pb(f,g)){var h=Qe(a,f,g,d.primary,d.primary.type);d.markers.push(h),h.parent=d}}}function Ve(a){for(var b=0;b<a.length;b++){var c=a[b],d=[c.primary.doc];_f(c.primary.doc,function(a){d.push(a)});for(var e=0;e<c.markers.length;e++){var f=c.markers[e];-1==$g(d,f.doc)&&(f.parent=null,c.markers.splice(e--,1))}}}function We(a,b,c){this.marker=a,this.from=b,this.to=c}function Xe(a,b){if(a)for(var c=0;c<a.length;++c){var d=a[c];if(d.marker==b)return d}}function Ye(a,b){for(var c,d=0;d<a.length;++d)a[d]!=b&&(c||(c=[])).push(a[d]);return c}function Ze(a,b){a.markedSpans=a.markedSpans?a.markedSpans.concat([b]):[b],b.marker.attachLine(a)}function $e(a,b,c){if(a)for(var e,d=0;d<a.length;++d){var f=a[d],g=f.marker,h=null==f.from||(g.inclusiveLeft?f.from<=b:f.from<b);if(h||f.from==b&&"bookmark"==g.type&&(!c||!f.marker.insertLeft)){var i=null==f.to||(g.inclusiveRight?f.to>=b:f.to>b);(e||(e=[])).push(new We(g,f.from,i?null:f.to))}}return e}function _e(a,b,c){if(a)for(var e,d=0;d<a.length;++d){var f=a[d],g=f.marker,h=null==f.to||(g.inclusiveRight?f.to>=b:f.to>b);if(h||f.from==b&&"bookmark"==g.type&&(!c||f.marker.insertLeft)){var i=null==f.from||(g.inclusiveLeft?f.from<=b:f.from<b);(e||(e=[])).push(new We(g,i?null:f.from-b,null==f.to?null:f.to-b))}}return e}function af(a,b){if(b.full)return null;var c=Ob(a,b.from.line)&&bg(a,b.from.line).markedSpans,d=Ob(a,b.to.line)&&bg(a,b.to.line).markedSpans;if(!c&&!d)return null;var e=b.from.ch,f=b.to.ch,g=0==pb(b.from,b.to),h=$e(c,e,g),i=_e(d,f,g),j=1==b.text.length,k=Yg(b.text).length+(j?e:0);if(h)for(var l=0;l<h.length;++l){var m=h[l];if(null==m.to){var n=Xe(i,m.marker);n?j&&(m.to=null==n.to?null:n.to+k):m.to=e}}if(i)for(var l=0;l<i.length;++l){var m=i[l];if(null!=m.to&&(m.to+=k),null==m.from){var n=Xe(h,m.marker);n||(m.from=k,j&&(h||(h=[])).push(m))}else m.from+=k,j&&(h||(h=[])).push(m)}h&&(h=bf(h)),i&&i!=h&&(i=bf(i));var o=[h];if(!j){var q,p=b.text.length-2;if(p>0&&h)for(var l=0;l<h.length;++l)null==h[l].to&&(q||(q=[])).push(new We(h[l].marker,null,null));for(var l=0;p>l;++l)o.push(q);o.push(i)}return o}function bf(a){for(var b=0;b<a.length;++b){var c=a[b];null!=c.from&&c.from==c.to&&c.marker.clearWhenEmpty!==!1&&a.splice(b--,1)}return a.length?a:null}function cf(a,b){var c=tg(a,b),d=af(a,b);if(!c)return d;if(!d)return c;for(var e=0;e<c.length;++e){var f=c[e],g=d[e];if(f&&g)a:for(var h=0;h<g.length;++h){for(var i=g[h],j=0;j<f.length;++j)if(f[j].marker==i.marker)continue a;f.push(i)}else g&&(c[e]=g)}return c}function df(a,b,c){var d=null;if(a.iter(b.line,c.line+1,function(a){if(a.markedSpans)for(var b=0;b<a.markedSpans.length;++b){var c=a.markedSpans[b].marker;!c.readOnly||d&&-1!=$g(d,c)||(d||(d=[])).push(c)}}),!d)return null;for(var e=[{from:b,to:c}],f=0;f<d.length;++f)for(var g=d[f],h=g.find(0),i=0;i<e.length;++i){var j=e[i];if(!(pb(j.to,h.from)<0||pb(j.from,h.to)>0)){var k=[i,1],l=pb(j.from,h.from),m=pb(j.to,h.to);(0>l||!g.inclusiveLeft&&!l)&&k.push({from:j.from,to:h.from}),(m>0||!g.inclusiveRight&&!m)&&k.push({from:h.to,to:j.to}),e.splice.apply(e,k),i+=k.length-1}}return e}function ef(a){var b=a.markedSpans;if(b){for(var c=0;c<b.length;++c)b[c].marker.detachLine(a);a.markedSpans=null}}function ff(a,b){if(b){for(var c=0;c<b.length;++c)b[c].marker.attachLine(a);a.markedSpans=b}}function gf(a){return a.inclusiveLeft?-1:0}function hf(a){return a.inclusiveRight?1:0}function jf(a,b){var c=a.lines.length-b.lines.length;if(0!=c)return c;var d=a.find(),e=b.find(),f=pb(d.from,e.from)||gf(a)-gf(b);if(f)return-f;var g=pb(d.to,e.to)||hf(a)-hf(b);return g?g:b.id-a.id}function kf(a,b){var d,c=u&&a.markedSpans;if(c)for(var e,f=0;f<c.length;++f)e=c[f],e.marker.collapsed&&null==(b?e.from:e.to)&&(!d||jf(d,e.marker)<0)&&(d=e.marker);return d}function lf(a){return kf(a,!0)}function mf(a){return kf(a,!1)}function nf(a,b,c,d,e){var f=bg(a,b),g=u&&f.markedSpans;if(g)for(var h=0;h<g.length;++h){var i=g[h];if(i.marker.collapsed){var j=i.marker.find(0),k=pb(j.from,c)||gf(i.marker)-gf(e),l=pb(j.to,d)||hf(i.marker)-hf(e);if(!(k>=0&&0>=l||0>=k&&l>=0)&&(0>=k&&(pb(j.to,c)>0||i.marker.inclusiveRight&&e.inclusiveLeft)||k>=0&&(pb(j.from,d)<0||i.marker.inclusiveLeft&&e.inclusiveRight)))return!0}}}function of(a){for(var b;b=lf(a);)a=b.find(-1,!0).line;return a}function pf(a){for(var b,c;b=mf(a);)a=b.find(1,!0).line,(c||(c=[])).push(a);return c}function qf(a,b){var c=bg(a,b),d=of(c);return c==d?b:fg(d)}function rf(a,b){if(b>a.lastLine())return b;var d,c=bg(a,b);if(!sf(a,c))return b;for(;d=mf(c);)c=d.find(1,!0).line;return fg(c)+1}function sf(a,b){var c=u&&b.markedSpans;if(c)for(var d,e=0;e<c.length;++e)if(d=c[e],d.marker.collapsed){if(null==d.from)return!0;if(!d.marker.widgetNode&&0==d.from&&d.marker.inclusiveLeft&&tf(a,b,d))return!0}}function tf(a,b,c){if(null==c.to){var d=c.marker.find(1,!0);return tf(a,d.line,Xe(d.line.markedSpans,c.marker))}if(c.marker.inclusiveRight&&c.to==b.text.length)return!0;for(var e,f=0;f<b.markedSpans.length;++f)if(e=b.markedSpans[f],e.marker.collapsed&&!e.marker.widgetNode&&e.from==c.to&&(null==e.to||e.to!=c.from)&&(e.marker.inclusiveLeft||c.marker.inclusiveRight)&&tf(a,b,e))return!0}function vf(a,b,c){hg(b)<(a.curOp&&a.curOp.scrollTop||a.doc.scrollTop)&&ne(a,null,c)}function wf(a){if(null!=a.height)return a.height;var b=a.doc.cm;if(!b)return 0;if(!oh(document.body,a.node)){var c="position: relative;";a.coverGutter&&(c+="margin-left: -"+b.display.gutters.offsetWidth+"px;"),a.noHScroll&&(c+="width: "+b.display.wrapper.clientWidth+"px;"),nh(b.display.measure,kh("div",[a.node],null,c))}return a.height=a.node.offsetHeight}function xf(a,b,c,d){var e=new uf(a,c,d),f=a.cm;return f&&e.noHScroll&&(f.display.alignWidgets=!0),re(a,b,"widget",function(b){var c=b.widgets||(b.widgets=[]);if(null==e.insertAt?c.push(e):c.splice(Math.min(c.length-1,Math.max(0,e.insertAt)),0,e),e.line=b,f&&!sf(a,b)){var d=hg(b)<a.scrollTop;eg(b,b.height+wf(e)),d&&ne(f,null,e.height),f.curOp.forceUpdate=!0}return!0}),e}function zf(a,b,c,d){a.text=b,a.stateAfter&&(a.stateAfter=null),a.styles&&(a.styles=null),null!=a.order&&(a.order=null),ef(a),ff(a,c);var e=d?d(a):1;e!=a.height&&eg(a,e)}function Af(a){a.parent=null,ef(a)}function Bf(a,b){if(a)for(;;){var c=a.match(/(?:^|\s+)line-(background-)?(\S+)/);if(!c)break;a=a.slice(0,c.index)+a.slice(c.index+c[0].length);var d=c[1]?"bgClass":"textClass";null==b[d]?b[d]=c[2]:new RegExp("(?:^|s)"+c[2]+"(?:$|s)").test(b[d])||(b[d]+=" "+c[2])}return a}function Cf(a,b){if(a.blankLine)return a.blankLine(b);if(a.innerMode){var c=v.innerMode(a,b);return c.mode.blankLine?c.mode.blankLine(c.state):void 0}}function Df(a,b,c,d){for(var e=0;10>e;e++){d&&(d[0]=v.innerMode(a,c).mode);var f=a.token(b,c);if(b.pos>b.start)return f}throw new Error("Mode "+a.name+" failed to advance stream.")}function Ef(a,b,c,d){function e(a){return{start:k.start,end:k.pos,string:k.current(),type:h||null,state:a?Ee(f.mode,j):j}}var h,f=a.doc,g=f.mode;b=Mb(f,b);var l,i=bg(f,b.line),j=jc(a,b.line,c),k=new Ne(i.text,a.options.tabSize);for(d&&(l=[]);(d||k.pos<b.ch)&&!k.eol();)k.start=k.pos,h=Df(g,k,j),d&&l.push(e(!0));return d?l:e()}function Ff(a,b,c,d,e,f,g){var h=c.flattenSpans;null==h&&(h=a.options.flattenSpans);var l,i=0,j=null,k=new Ne(b,a.options.tabSize),m=a.options.addModeClass&&[null];for(""==b&&Bf(Cf(c,d),f);!k.eol();){if(k.pos>a.options.maxHighlightLength?(h=!1,g&&If(a,b,d,k.pos),k.pos=b.length,l=null):l=Bf(Df(c,k,d,m),f),m){var n=m[0].name;n&&(l="m-"+(l?n+" "+l:n))}if(!h||j!=l){for(;i<k.start;)i=Math.min(k.start,i+5e4),e(i,j);j=l}k.start=k.pos}for(;i<k.pos;){var o=Math.min(k.pos,i+5e4);e(o,j),i=o}}function Gf(a,b,c,d){var e=[a.state.modeGen],f={};Ff(a,b.text,a.doc.mode,c,function(a,b){e.push(a,b)},f,d);for(var g=0;g<a.state.overlays.length;++g){var h=a.state.overlays[g],i=1,j=0;Ff(a,b.text,h.mode,!0,function(a,b){for(var c=i;a>j;){var d=e[i];d>a&&e.splice(i,1,a,e[i+1],d),i+=2,j=Math.min(a,d)}if(b)if(h.opaque)e.splice(c,i-c,a,"cm-overlay "+b),i=c+2;else for(;i>c;c+=2){var f=e[c+1];e[c+1]=(f?f+" ":"")+"cm-overlay "+b}},f)}return{styles:e,classes:f.bgClass||f.textClass?f:null}}function Hf(a,b,c){if(!b.styles||b.styles[0]!=a.state.modeGen){var d=Gf(a,b,b.stateAfter=jc(a,fg(b)));b.styles=d.styles,d.classes?b.styleClasses=d.classes:b.styleClasses&&(b.styleClasses=null),c===a.doc.frontier&&a.doc.frontier++}return b.styles}function If(a,b,c,d){var e=a.doc.mode,f=new Ne(b,a.options.tabSize);for(f.start=f.pos=d||0,""==b&&Cf(e,c);!f.eol()&&f.pos<=a.options.maxHighlightLength;)Df(e,f,c),f.start=f.pos}function Lf(a,b){if(!a||/^\s*$/.test(a))return null;var c=b.addModeClass?Kf:Jf;return c[a]||(c[a]=a.replace(/\S+/g,"cm-$&"))}function Mf(a,b){var c=kh("span",null,null,f?"padding-right: .1px":null),e={pre:kh("pre",[c]),content:c,col:0,pos:0,cm:a,splitSpaces:(d||f)&&a.getOption("lineWrapping")};b.measure={};for(var g=0;g<=(b.rest?b.rest.length:0);g++){var i,h=g?b.rest[g-1]:b.line;e.pos=0,e.addToken=Of,Ch(a.display.measure)&&(i=ig(h))&&(e.addToken=Qf(e.addToken,i)),e.map=[];var j=b!=a.display.externalMeasured&&fg(h);Sf(h,e,Hf(a,h,j)),h.styleClasses&&(h.styleClasses.bgClass&&(e.bgClass=th(h.styleClasses.bgClass,e.bgClass||"")),h.styleClasses.textClass&&(e.textClass=th(h.styleClasses.textClass,e.textClass||""))),0==e.map.length&&e.map.push(0,0,e.content.appendChild(Ah(a.display.measure))),0==g?(b.measure.map=e.map,b.measure.cache={}):((b.measure.maps||(b.measure.maps=[])).push(e.map),(b.measure.caches||(b.measure.caches=[])).push({}))}return f&&/\bcm-tab\b/.test(e.content.lastChild.className)&&(e.content.className="cm-tab-wrap-hack"),Gg(a,"renderLine",a,b.line,e.pre),e.pre.className&&(e.textClass=th(e.pre.className,e.textClass||"")),e}function Nf(a){var b=kh("span","\u2022","cm-invalidchar");return b.title="\\u"+a.charCodeAt(0).toString(16),b.setAttribute("aria-label",b.title),b}function Of(a,b,c,f,g,h,i){if(b){var j=a.splitSpaces?b.replace(/ {3,}/g,Pf):b,k=a.cm.state.specialChars,l=!1;if(k.test(b))for(var m=document.createDocumentFragment(),n=0;;){k.lastIndex=n;var o=k.exec(b),p=o?o.index-n:b.length-n;if(p){var q=document.createTextNode(j.slice(n,n+p));d&&9>e?m.appendChild(kh("span",[q])):m.appendChild(q),a.map.push(a.pos,a.pos+p,q),a.col+=p,a.pos+=p}if(!o)break;if(n+=p+1,"  "==o[0]){var r=a.cm.options.tabSize,s=r-a.col%r,q=m.appendChild(kh("span",Xg(s),"cm-tab"));q.setAttribute("role","presentation"),q.setAttribute("cm-text"," "),a.col+=s}else{var q=a.cm.options.specialCharPlaceholder(o[0]);q.setAttribute("cm-text",o[0]),d&&9>e?m.appendChild(kh("span",[q])):m.appendChild(q),a.col+=1}a.map.push(a.pos,a.pos+1,q),a.pos++}else{a.col+=b.length;var m=document.createTextNode(j);a.map.push(a.pos,a.pos+b.length,m),d&&9>e&&(l=!0),a.pos+=b.length}if(c||f||g||l||i){var t=c||"";f&&(t+=f),g&&(t+=g);var u=kh("span",[m],t,i);return h&&(u.title=h),a.content.appendChild(u)}a.content.appendChild(m)}}function Pf(a){for(var b=" ",c=0;c<a.length-2;++c)b+=c%2?" ":"\xa0";return b+=" "}function Qf(a,b){return function(c,d,e,f,g,h,i){e=e?e+" cm-force-border":"cm-force-border";for(var j=c.pos,k=j+d.length;;){for(var l=0;l<b.length;l++){var m=b[l];if(m.to>j&&m.from<=j)break}if(m.to>=k)return a(c,d,e,f,g,h,i);a(c,d.slice(0,m.to-j),e,f,null,h,i),f=null,d=d.slice(m.to-j),j=m.to}}}function Rf(a,b,c,d){var e=!d&&c.widgetNode;e&&a.map.push(a.pos,a.pos+b,e),!d&&a.cm.display.input.needsContentAttribute&&(e||(e=a.content.appendChild(document.createElement("span"))),e.setAttribute("cm-marker",c.id)),e&&(a.cm.display.input.setUneditable(e),a.content.appendChild(e)),a.pos+=b}function Sf(a,b,c){var d=a.markedSpans,e=a.text,f=0;if(d)for(var k,l,n,o,p,q,r,h=e.length,i=0,g=1,j="",m=0;;){if(m==i){n=o=p=q=l="",r=null,m=1/0;for(var s=[],t=0;t<d.length;++t){var u=d[t],v=u.marker;u.from<=i&&(null==u.to||u.to>i)?(null!=u.to&&m>u.to&&(m=u.to,o=""),v.className&&(n+=" "+v.className),v.css&&(l=v.css),v.startStyle&&u.from==i&&(p+=" "+v.startStyle),v.endStyle&&u.to==m&&(o+=" "+v.endStyle),v.title&&!q&&(q=v.title),v.collapsed&&(!r||jf(r.marker,v)<0)&&(r=u)):u.from>i&&m>u.from&&(m=u.from),"bookmark"==v.type&&u.from==i&&v.widgetNode&&s.push(v)}if(r&&(r.from||0)==i&&(Rf(b,(null==r.to?h+1:r.to)-i,r.marker,null==r.from),null==r.to))return;if(!r&&s.length)for(var t=0;t<s.length;++t)Rf(b,0,s[t])}if(i>=h)break;for(var w=Math.min(h,m);;){if(j){var x=i+j.length;if(!r){var y=x>w?j.slice(0,w-i):j;b.addToken(b,y,k?k+n:n,p,i+y.length==m?o:"",q,l)}if(x>=w){j=j.slice(w-i),i=w;break}i=x,p=""}j=e.slice(f,f=c[g++]),k=Lf(c[g++],b.cm.options)}}else for(var g=1;g<c.length;g+=2)b.addToken(b,e.slice(f,f=c[g]),Lf(c[g+1],b.cm.options))}function Tf(a,b){return 0==b.from.ch&&0==b.to.ch&&""==Yg(b.text)&&(!a.cm||a.cm.options.wholeLineUpdateBefore)}function Uf(a,b,c,d){function e(a){return c?c[a]:null}function f(a,c,e){zf(a,c,e,d),Ig(a,"change",a,b)}function g(a,b){for(var c=a,f=[];b>c;++c)f.push(new yf(j[c],e(c),d));return f}var h=b.from,i=b.to,j=b.text,k=bg(a,h.line),l=bg(a,i.line),m=Yg(j),n=e(j.length-1),o=i.line-h.line;if(b.full)a.insert(0,g(0,j.length)),a.remove(j.length,a.size-j.length);else if(Tf(a,b)){var p=g(0,j.length-1);f(l,l.text,n),o&&a.remove(h.line,o),p.length&&a.insert(h.line,p)}else if(k==l)if(1==j.length)f(k,k.text.slice(0,h.ch)+m+k.text.slice(i.ch),n);else{var p=g(1,j.length-1);p.push(new yf(m+k.text.slice(i.ch),n,d)),f(k,k.text.slice(0,h.ch)+j[0],e(0)),a.insert(h.line+1,p)}else if(1==j.length)f(k,k.text.slice(0,h.ch)+j[0]+l.text.slice(i.ch),e(0)),a.remove(h.line+1,o);else{f(k,k.text.slice(0,h.ch)+j[0],e(0)),f(l,m+l.text.slice(i.ch),n);var p=g(1,j.length-1);o>1&&a.remove(h.line+1,o-1),a.insert(h.line+1,p)}Ig(a,"change",a,b)}function Vf(a){this.lines=a,this.parent=null;for(var b=0,c=0;b<a.length;++b)a[b].parent=this,c+=a[b].height;this.height=c}function Wf(a){this.children=a;for(var b=0,c=0,d=0;d<a.length;++d){var e=a[d];b+=e.chunkSize(),c+=e.height,e.parent=this}this.size=b,this.height=c,this.parent=null}function _f(a,b,c){function d(a,e,f){if(a.linked)for(var g=0;g<a.linked.length;++g){var h=a.linked[g];if(h.doc!=e){var i=f&&h.sharedHist;(!c||i)&&(b(h.doc,i),d(h.doc,a,i))}}}d(a,null,!0)}function ag(a,b){if(b.cm)throw new Error("This document is already in use.");a.doc=b,b.cm=a,B(a),x(a),a.options.lineWrapping||H(a),a.options.mode=b.modeOption,gd(a)}function bg(a,b){if(b-=a.first,0>b||b>=a.size)throw new Error("There is no line "+(b+a.first)+" in the document.");for(var c=a;!c.lines;)for(var d=0;;++d){var e=c.children[d],f=e.chunkSize();if(f>b){c=e;break}b-=f}return c.lines[b]}function cg(a,b,c){var d=[],e=b.line;return a.iter(b.line,c.line+1,function(a){var f=a.text;e==c.line&&(f=f.slice(0,c.ch)),e==b.line&&(f=f.slice(b.ch)),d.push(f),++e}),d}function dg(a,b,c){var d=[];return a.iter(b,c,function(a){d.push(a.text)}),d}function eg(a,b){var c=b-a.height;if(c)for(var d=a;d;d=d.parent)d.height+=c}function fg(a){if(null==a.parent)return null;for(var b=a.parent,c=$g(b.lines,a),d=b.parent;d;b=d,d=d.parent)for(var e=0;d.children[e]!=b;++e)c+=d.children[e].chunkSize();return c+b.first}function gg(a,b){var c=a.first;a:do{for(var d=0;d<a.children.length;++d){var e=a.children[d],f=e.height;if(f>b){a=e;continue a}b-=f,c+=e.chunkSize()}return c}while(!a.lines);for(var d=0;d<a.lines.length;++d){var g=a.lines[d],h=g.height;if(h>b)break;b-=h}return c+d}function hg(a){a=of(a);for(var b=0,c=a.parent,d=0;d<c.lines.length;++d){var e=c.lines[d];if(e==a)break;b+=e.height}for(var f=c.parent;f;c=f,f=c.parent)for(var d=0;d<f.children.length;++d){var g=f.children[d];if(g==c)break;b+=g.height}return b}function ig(a){var b=a.order;return null==b&&(b=a.order=Xh(a.text)),b}function jg(a){this.done=[],this.undone=[],this.undoDepth=1/0,this.lastModTime=this.lastSelTime=0,this.lastOp=this.lastSelOp=null,this.lastOrigin=this.lastSelOrigin=null,this.generation=this.maxGeneration=a||1}function kg(a,b){var c={from:qb(b.from),to:Yd(b),text:cg(a,b.from,b.to)};return rg(a,c,b.from.line,b.to.line+1),_f(a,function(a){rg(a,c,b.from.line,b.to.line+1)},!0),c}function lg(a){for(;a.length;){var b=Yg(a);if(!b.ranges)break;a.pop()}}function mg(a,b){return b?(lg(a.done),Yg(a.done)):a.done.length&&!Yg(a.done).ranges?Yg(a.done):a.done.length>1&&!a.done[a.done.length-2].ranges?(a.done.pop(),Yg(a.done)):void 0}function ng(a,b,c,d){var e=a.history;e.undone.length=0;var g,f=+new Date;if((e.lastOp==d||e.lastOrigin==b.origin&&b.origin&&("+"==b.origin.charAt(0)&&a.cm&&e.lastModTime>f-a.cm.options.historyEventDelay||"*"==b.origin.charAt(0)))&&(g=mg(e,e.lastOp==d))){var h=Yg(g.changes);0==pb(b.from,b.to)&&0==pb(b.from,h.to)?h.to=Yd(b):g.changes.push(kg(a,b))}else{var i=Yg(e.done);for(i&&i.ranges||qg(a.sel,e.done),g={changes:[kg(a,b)],generation:e.generation},e.done.push(g);e.done.length>e.undoDepth;)e.done.shift(),e.done[0].ranges||e.done.shift()}e.done.push(c),e.generation=++e.maxGeneration,e.lastModTime=e.lastSelTime=f,e.lastOp=e.lastSelOp=d,e.lastOrigin=e.lastSelOrigin=b.origin,h||Gg(a,"historyAdded")}function og(a,b,c,d){var e=b.charAt(0);return"*"==e||"+"==e&&c.ranges.length==d.ranges.length&&c.somethingSelected()==d.somethingSelected()&&new Date-a.history.lastSelTime<=(a.cm?a.cm.options.historyEventDelay:500)}function pg(a,b,c,d){var e=a.history,f=d&&d.origin;c==e.lastSelOp||f&&e.lastSelOrigin==f&&(e.lastModTime==e.lastSelTime&&e.lastOrigin==f||og(a,f,Yg(e.done),b))?e.done[e.done.length-1]=b:qg(b,e.done),e.lastSelTime=+new Date,e.lastSelOrigin=f,e.lastSelOp=c,d&&d.clearRedo!==!1&&lg(e.undone)}function qg(a,b){var c=Yg(b);c&&c.ranges&&c.equals(a)||b.push(a)}function rg(a,b,c,d){var e=b["spans_"+a.id],f=0;a.iter(Math.max(a.first,c),Math.min(a.first+a.size,d),function(c){c.markedSpans&&((e||(e=b["spans_"+a.id]={}))[f]=c.markedSpans),++f})}function sg(a){if(!a)return null;for(var c,b=0;b<a.length;++b)a[b].marker.explicitlyCleared?c||(c=a.slice(0,b)):c&&c.push(a[b]);return c?c.length?c:null:a}function tg(a,b){var c=b["spans_"+a.id];if(!c)return null;for(var d=0,e=[];d<b.text.length;++d)e.push(sg(c[d]));return e}function ug(a,b,c){for(var d=0,e=[];d<a.length;++d){var f=a[d];if(f.ranges)e.push(c?Hb.prototype.deepCopy.call(f):f);else{var g=f.changes,h=[];e.push({changes:h});for(var i=0;i<g.length;++i){var k,j=g[i];if(h.push({from:j.from,to:j.to,text:j.text}),b)for(var l in j)(k=l.match(/^spans_(\d+)$/))&&$g(b,Number(k[1]))>-1&&(Yg(h)[l]=j[l],delete j[l])}}}return e}function vg(a,b,c,d){c<a.line?a.line+=d:b<a.line&&(a.line=b,a.ch=0)}function wg(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e],g=!0;if(f.ranges){f.copied||(f=a[e]=f.deepCopy(),f.copied=!0);for(var h=0;h<f.ranges.length;h++)vg(f.ranges[h].anchor,b,c,d),vg(f.ranges[h].head,b,c,d)}else{for(var h=0;h<f.changes.length;++h){var i=f.changes[h];if(c<i.from.line)i.from=ob(i.from.line+d,i.from.ch),i.to=ob(i.to.line+d,i.to.ch);else if(b<=i.to.line){g=!1;break}}g||(a.splice(0,e+1),e=0)}}}function xg(a,b){var c=b.from.line,d=b.to.line,e=b.text.length-(d-c)-1;wg(a.done,c,d,e),wg(a.undone,c,d,e)}function Ag(a){return null!=a.defaultPrevented?a.defaultPrevented:0==a.returnValue}function Cg(a){return a.target||a.srcElement}function Dg(a){var b=a.which;return null==b&&(1&a.button?b=1:2&a.button?b=3:4&a.button&&(b=2)),o&&a.ctrlKey&&1==b&&(b=3),b}function Ig(a,b){function f(a){return function(){a.apply(null,d)}}var c=a._handlers&&a._handlers[b];if(c){var e,d=Array.prototype.slice.call(arguments,2);Rc?e=Rc.delayedCallbacks:Hg?e=Hg:(e=Hg=[],setTimeout(Jg,0));for(var g=0;g<c.length;++g)e.push(f(c[g]))}}function Jg(){var a=Hg;Hg=null;for(var b=0;b<a.length;++b)a[b]()}function Kg(a,b,c){return"string"==typeof b&&(b={type:b,preventDefault:function(){this.defaultPrevented=!0}}),Gg(a,c||b.type,a,b),Ag(b)||b.codemirrorIgnore}function Lg(a){var b=a._handlers&&a._handlers.cursorActivity;if(b)for(var c=a.curOp.cursorActivityHandlers||(a.curOp.cursorActivityHandlers=[]),d=0;d<b.length;++d)-1==$g(c,b[d])&&c.push(b[d])}function Mg(a,b){var c=a._handlers&&a._handlers[b];return c&&c.length>0}function Ng(a){a.prototype.on=function(a,b){Eg(this,a,b)},a.prototype.off=function(a,b){Fg(this,a,b)}}function Tg(){this.id=null}function Vg(a,b,c){for(var d=0,e=0;;){var f=a.indexOf("  ",d);-1==f&&(f=a.length);var g=f-d;if(f==a.length||e+g>=b)return d+Math.min(g,b-e);if(e+=f-d,e+=c-e%c,d=f+1,e>=b)return d}}function Xg(a){for(;Wg.length<=a;)Wg.push(Yg(Wg)+" ");return Wg[a]}function Yg(a){return a[a.length-1]}function $g(a,b){for(var c=0;c<a.length;++c)if(a[c]==b)return c;return-1}function _g(a,b){for(var c=[],d=0;d<a.length;d++)c[d]=b(a[d],d);return c}function ah(){}function bh(a,b){var c;return Object.create?c=Object.create(a):(ah.prototype=a,c=new ah),b&&ch(b,c),c}function ch(a,b,c){b||(b={});for(var d in a)!a.hasOwnProperty(d)||c===!1&&b.hasOwnProperty(d)||(b[d]=a[d]);return b}function dh(a){var b=Array.prototype.slice.call(arguments,1);return function(){return a.apply(null,b)}}function gh(a,b){return b?b.source.indexOf("\\w")>-1&&fh(a)?!0:b.test(a):fh(a)}function hh(a){for(var b in a)if(a.hasOwnProperty(b)&&a[b])return!1;return!0}function jh(a){return a.charCodeAt(0)>=768&&ih.test(a)}function kh(a,b,c,d){var e=document.createElement(a);if(c&&(e.className=c),d&&(e.style.cssText=d),"string"==typeof b)e.appendChild(document.createTextNode(b));else if(b)for(var f=0;f<b.length;++f)e.appendChild(b[f]);return e}function mh(a){for(var b=a.childNodes.length;b>0;--b)a.removeChild(a.firstChild);return a}function nh(a,b){return mh(a).appendChild(b)}function ph(){return document.activeElement}function qh(a){return new RegExp("(^|\\s)"+a+"(?:$|\\s)\\s*")}function th(a,b){for(var c=a.split(" "),d=0;d<c.length;d++)c[d]&&!qh(c[d]).test(b)&&(b+=" "+c[d]);return b}function uh(a){if(document.body.getElementsByClassName)for(var b=document.body.getElementsByClassName("CodeMirror"),c=0;c<b.length;c++){var d=b[c].CodeMirror;d&&a(d)}}function wh(){vh||(xh(),vh=!0)}function xh(){var a;Eg(window,"resize",function(){null==a&&(a=setTimeout(function(){a=null,uh(od)},100))}),Eg(window,"blur",function(){uh(Vd)})}function Ah(a){if(null==zh){var b=kh("span","\u200b");nh(a,kh("span",[b,document.createTextNode("x")])),0!=a.firstChild.offsetHeight&&(zh=b.offsetWidth<=1&&b.offsetHeight>2&&!(d&&8>e))}var c=zh?kh("span","\u200b"):kh("span","\xa0",null,"display: inline-block; width: 1px; margin-right: -1px");return c.setAttribute("cm-text",""),c}function Ch(a){if(null!=Bh)return Bh;var b=nh(a,document.createTextNode("A\u062eA")),c=lh(b,0,1).getBoundingClientRect();if(!c||c.left==c.right)return!1;var d=lh(b,1,2).getBoundingClientRect();return Bh=d.right-c.right<3}function Hh(a){if(null!=Gh)return Gh;var b=nh(a,kh("span","x")),c=b.getBoundingClientRect(),d=lh(b,0,1).getBoundingClientRect();return Gh=Math.abs(c.left-d.left)>1}function Jh(a,b,c,d){if(!a)return d(b,c,"ltr");for(var e=!1,f=0;f<a.length;++f){var g=a[f];(g.from<c&&g.to>b||b==c&&g.to==b)&&(d(Math.max(g.from,b),Math.min(g.to,c),1==g.level?"rtl":"ltr"),e=!0)}e||d(b,c,"ltr")}function Kh(a){return a.level%2?a.to:a.from}function Lh(a){return a.level%2?a.from:a.to}function Mh(a){var b=ig(a);return b?Kh(b[0]):0}function Nh(a){var b=ig(a);return b?Lh(Yg(b)):a.text.length}function Oh(a,b){var c=bg(a.doc,b),d=of(c);d!=c&&(b=fg(d));var e=ig(d),f=e?e[0].level%2?Nh(d):Mh(d):0;return ob(b,f)}function Ph(a,b){for(var c,d=bg(a.doc,b);c=mf(d);)d=c.find(1,!0).line,b=null;var e=ig(d),f=e?e[0].level%2?Mh(d):Nh(d):d.text.length;return ob(null==b?fg(d):b,f)}function Qh(a,b){var c=Oh(a,b.line),d=bg(a.doc,c.line),e=ig(d);if(!e||0==e[0].level){var f=Math.max(0,d.text.search(/\S/)),g=b.line==c.line&&b.ch<=f&&b.ch;return ob(c.line,g?0:f)}return c}function Rh(a,b,c){var d=a[0].level;return b==d?!0:c==d?!1:c>b}function Th(a,b){Sh=null;for(var d,c=0;c<a.length;++c){var e=a[c];if(e.from<b&&e.to>b)return c;if(e.from==b||e.to==b){if(null!=d)return Rh(a,e.level,a[d].level)?(e.from!=e.to&&(Sh=d),c):(e.from!=e.to&&(Sh=c),d);d=c}}return d}function Uh(a,b,c,d){if(!d)return b+c;do b+=c;while(b>0&&jh(a.text.charAt(b)));return b}function Vh(a,b,c,d){var e=ig(a);if(!e)return Wh(a,b,c,d);for(var f=Th(e,b),g=e[f],h=Uh(a,b,g.level%2?-c:c,d);;){if(h>g.from&&h<g.to)return h;if(h==g.from||h==g.to)return Th(e,h)==f?h:(g=e[f+=c],c>0==g.level%2?g.to:g.from);if(g=e[f+=c],!g)return null;h=c>0==g.level%2?Uh(a,g.to,-1,d):Uh(a,g.from,1,d)}}function Wh(a,b,c,d){var e=b+c;if(d)for(;e>0&&jh(a.text.charAt(e));)e+=c;return 0>e||e>a.text.length?null:e}var a=/gecko\/\d/i.test(navigator.userAgent),b=/MSIE \d/.test(navigator.userAgent),c=/Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent),d=b||c,e=d&&(b?document.documentMode||6:c[1]),f=/WebKit\//.test(navigator.userAgent),g=f&&/Qt\/\d+\.\d+/.test(navigator.userAgent),h=/Chrome\//.test(navigator.userAgent),i=/Opera\//.test(navigator.userAgent),j=/Apple Computer/.test(navigator.vendor),k=/Mac OS X 1\d\D([8-9]|\d\d)\D/.test(navigator.userAgent),l=/PhantomJS/.test(navigator.userAgent),m=/AppleWebKit/.test(navigator.userAgent)&&/Mobile\/\w+/.test(navigator.userAgent),n=m||/Android|webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(navigator.userAgent),o=m||/Mac/.test(navigator.platform),p=/win/i.test(navigator.platform),q=i&&navigator.userAgent.match(/Version\/(\d*\.\d*)/);q&&(q=Number(q[1])),q&&q>=15&&(i=!1,f=!0);var r=o&&(g||i&&(null==q||12.11>q)),s=a||d&&e>=9,t=!1,u=!1;K.prototype=ch({update:function(a){var b=a.scrollWidth>a.clientWidth+1,c=a.scrollHeight>a.clientHeight+1,d=a.nativeBarWidth;if(c){this.vert.style.display="block",this.vert.style.bottom=b?d+"px":"0";var e=a.viewHeight-(b?d:0);this.vert.firstChild.style.height=Math.max(0,a.scrollHeight-a.clientHeight+e)+"px"}else this.vert.style.display="",this.vert.firstChild.style.height="0";if(b){this.horiz.style.display="block",this.horiz.style.right=c?d+"px":"0",this.horiz.style.left=a.barLeft+"px";var f=a.viewWidth-a.barLeft-(c?d:0);this.horiz.firstChild.style.width=a.scrollWidth-a.clientWidth+f+"px"}else this.horiz.style.display="",this.horiz.firstChild.style.width="0";return!this.checkedOverlay&&a.clientHeight>0&&(0==d&&this.overlayHack(),this.checkedOverlay=!0),{right:c?d:0,bottom:b?d:0}},setScrollLeft:function(a){this.horiz.scrollLeft!=a&&(this.horiz.scrollLeft=a)},setScrollTop:function(a){this.vert.scrollTop!=a&&(this.vert.scrollTop=a)},overlayHack:function(){var a=o&&!k?"12px":"18px";this.horiz.style.minHeight=this.vert.style.minWidth=a;var b=this,c=function(a){Cg(a)!=b.vert&&Cg(a)!=b.horiz&&bd(b.cm,rd)(a)};Eg(this.vert,"mousedown",c),Eg(this.horiz,"mousedown",c)},clear:function(){var a=this.horiz.parentNode;a.removeChild(this.horiz),a.removeChild(this.vert)}},K.prototype),L.prototype=ch({update:function(){return{bottom:0,right:0}},setScrollLeft:function(){},setScrollTop:function(){},clear:function(){}},L.prototype),v.scrollbarModel={"native":K,"null":L},U.prototype.signal=function(a,b){Mg(a,b)&&this.events.push(arguments)},U.prototype.finish=function(){for(var a=0;a<this.events.length;a++)Gg.apply(null,this.events[a])};var ob=v.Pos=function(a,b){return this instanceof ob?(this.line=a,this.ch=b,void 0):new ob(a,b)},pb=v.cmpPos=function(a,b){return a.line-b.line||a.ch-b.ch},vb=null;zb.prototype=ch({init:function(a){function i(a){if(c.somethingSelected())vb=c.getSelections(),b.inaccurateSelection&&(b.prevInput="",b.inaccurateSelection=!1,h.value=vb.join("\n"),Zg(h));else{var d=xb(c);vb=d.text,"cut"==a.type?c.setSelections(d.ranges,null,Qg):(b.prevInput="",h.value=d.text.join("\n"),Zg(h))}"cut"==a.type&&(c.state.cutIncoming=!0)}var b=this,c=this.cm,g=this.wrapper=Ab(),h=this.textarea=g.firstChild;a.wrapper.insertBefore(g,a.wrapper.firstChild),m&&(h.style.width="0px"),Eg(h,"input",function(){d&&e>=9&&b.hasSelection&&(b.hasSelection=null),b.poll()}),Eg(h,"paste",function(){if(f&&!c.state.fakedLastChar&&!(new Date-c.state.lastMiddleDown<200)){var a=h.selectionStart,d=h.selectionEnd;h.value+="$",h.selectionEnd=d,h.selectionStart=a,c.state.fakedLastChar=!0}c.state.pasteIncoming=!0,b.fastPoll()}),Eg(h,"cut",i),Eg(h,"copy",i),Eg(a.scroller,"paste",function(d){pd(a,d)||(c.state.pasteIncoming=!0,b.focus())}),Eg(a.lineSpace,"selectstart",function(b){pd(a,b)||yg(b)})},prepareSelection:function(){var a=this.cm,b=a.display,c=a.doc,d=cc(a);if(a.options.moveInputWithCursor){var e=Jc(a,c.sel.primary().head,"div"),f=b.wrapper.getBoundingClientRect(),g=b.lineDiv.getBoundingClientRect();d.teTop=Math.max(0,Math.min(b.wrapper.clientHeight-10,e.top+g.top-f.top)),d.teLeft=Math.max(0,Math.min(b.wrapper.clientWidth-10,e.left+g.left-f.left))}return d},showSelection:function(a){var b=this.cm,c=b.display;nh(c.cursorDiv,a.cursors),nh(c.selectionDiv,a.selection),null!=a.teTop&&(this.wrapper.style.top=a.teTop+"px",this.wrapper.style.left=a.teLeft+"px")},reset:function(a){if(!this.contextMenuPending){var b,c,f=this.cm,g=f.doc;if(f.somethingSelected()){this.prevInput="";var h=g.sel.primary();b=Fh&&(h.to().line-h.from().line>100||(c=f.getSelection()).length>1e3);var i=b?"-":c||f.getSelection();this.textarea.value=i,f.state.focused&&Zg(this.textarea),d&&e>=9&&(this.hasSelection=i)}else a||(this.prevInput=this.textarea.value="",d&&e>=9&&(this.hasSelection=null));this.inaccurateSelection=b}},getField:function(){return this.textarea},supportsTouch:function(){return!1},focus:function(){if("nocursor"!=this.cm.options.readOnly&&(!n||ph()!=this.textarea))try{this.textarea.focus()}catch(a){}},blur:function(){this.textarea.blur()},resetPosition:function(){this.wrapper.style.top=this.wrapper.style.left=0},receivedFocus:function(){this.slowPoll()},slowPoll:function(){var a=this;a.pollingFast||a.polling.set(this.cm.options.pollInterval,function(){a.poll(),a.cm.state.focused&&a.slowPoll()})},fastPoll:function(){function c(){var d=b.poll();d||a?(b.pollingFast=!1,b.slowPoll()):(a=!0,b.polling.set(60,c))}var a=!1,b=this;b.pollingFast=!0,b.polling.set(20,c)},poll:function(){var a=this.cm,b=this.textarea,c=this.prevInput;if(!a.state.focused||Eh(b)&&!c||ub(a)||a.options.disableInput||a.state.keySeq)return!1;a.state.pasteIncoming&&a.state.fakedLastChar&&(b.value=b.value.substring(0,b.value.length-1),a.state.fakedLastChar=!1);var f=b.value;if(f==c&&!a.somethingSelected())return!1;if(d&&e>=9&&this.hasSelection===f||o&&/[\uf700-\uf7ff]/.test(f))return a.display.input.reset(),!1;
8203!=f.charCodeAt(0)||a.doc.sel!=a.display.selForContextMenu||c||(c="\u200b");for(var g=0,h=Math.min(c.length,f.length);h>g&&c.charCodeAt(g)==f.charCodeAt(g);)++g;var i=this;return ad(a,function(){wb(a,f.slice(g),c.length-g),f.length>1e3||f.indexOf("\n")>-1?b.value=i.prevInput="":i.prevInput=f}),!0},ensurePolled:function(){this.pollingFast&&this.poll()&&(this.pollingFast=!1)},onKeyPress:function(){d&&e>=9&&(this.hasSelection=null),this.fastPoll()},onContextMenu:function(a){function o(){if(null!=h.selectionStart){var a=c.somethingSelected(),d=h.value="\u200b"+(a?h.value:"");b.prevInput=a?"":"\u200b",h.selectionStart=1,h.selectionEnd=d.length,g.selForContextMenu=c.doc.sel}}function p(){if(b.contextMenuPending=!1,b.wrapper.style.position="relative",h.style.cssText=m,d&&9>e&&g.scrollbars.setScrollTop(g.scroller.scrollTop=k),null!=h.selectionStart){(!d||d&&9>e)&&o();var a=0,f=function(){g.selForContextMenu==c.doc.sel&&0==h.selectionStart?bd(c,Ge.selectAll)(c):a++<10?g.detectingSelectAll=setTimeout(f,500):g.input.reset()};g.detectingSelectAll=setTimeout(f,200)}}var b=this,c=b.cm,g=c.display,h=b.textarea,j=qd(c,a),k=g.scroller.scrollTop;if(j&&!i){var l=c.options.resetSelectionOnContextMenu;l&&-1==c.doc.sel.contains(j)&&bd(c,Xb)(c.doc,Kb(j),Qg);var m=h.style.cssText;if(b.wrapper.style.position="absolute",h.style.cssText="position: fixed; width: 30px; height: 30px; top: "+(a.clientY-5)+"px; left: "+(a.clientX-5)+"px; z-index: 1000; background: "+(d?"rgba(255, 255, 255, .05)":"transparent")+"; outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);",f)var n=window.scrollY;if(g.input.focus(),f&&window.scrollTo(null,n),g.input.reset(),c.somethingSelected()||(h.value=b.prevInput=" "),b.contextMenuPending=!0,g.selForContextMenu=c.doc.sel,clearTimeout(g.detectingSelectAll),d&&e>=9&&o(),s){Bg(a);var q=function(){Fg(window,"mouseup",q),setTimeout(p,20)};Eg(window,"mouseup",q)}else setTimeout(p,50)}},setUneditable:ah,needsContentAttribute:!1},zb.prototype),Bb.prototype=ch({init:function(a){function e(a){if(c.somethingSelected())vb=c.getSelections(),"cut"==a.type&&c.replaceSelection("",null,"cut");else{var b=xb(c);vb=b.text,"cut"==a.type&&c.operation(function(){c.setSelections(b.ranges,0,Qg),c.replaceSelection("",null,"cut")})}if(a.clipboardData&&!m)a.preventDefault(),a.clipboardData.clearData(),a.clipboardData.setData("text/plain",vb.join("\n"));else{var d=Ab(),e=d.firstChild;c.display.lineSpace.insertBefore(d,c.display.lineSpace.firstChild),e.value=vb.join("\n");var f=document.activeElement;Zg(e),setTimeout(function(){c.display.lineSpace.removeChild(d),f.focus()},50)}}var b=this,c=b.cm,d=b.div=a.lineDiv;d.contentEditable="true",yb(d),Eg(d,"paste",function(a){var b=a.clipboardData&&a.clipboardData.getData("text/plain");b&&(a.preventDefault(),c.replaceSelection(b,null,"paste"))}),Eg(d,"compositionstart",function(a){var d=a.data;if(b.composing={sel:c.doc.sel,data:d,startData:d},d){var e=c.doc.sel.primary(),f=c.getLine(e.head.line),g=f.indexOf(d,Math.max(0,e.head.ch-d.length));g>-1&&g<=e.head.ch&&(b.composing.sel=Kb(ob(e.head.line,g),ob(e.head.line,g+d.length)))}}),Eg(d,"compositionupdate",function(a){b.composing.data=a.data}),Eg(d,"compositionend",function(a){var c=b.composing;c&&(a.data==c.startData||/\u200b/.test(a.data)||(c.data=a.data),setTimeout(function(){c.handled||b.applyComposition(c),b.composing==c&&(b.composing=null)},50))}),Eg(d,"touchstart",function(){b.forceCompositionEnd()}),Eg(d,"input",function(){b.composing||b.pollContent()||ad(b.cm,function(){gd(c)})}),Eg(d,"copy",e),Eg(d,"cut",e)},prepareSelection:function(){var a=cc(this.cm,!1);return a.focus=this.cm.state.focused,a},showSelection:function(a){a&&this.cm.display.view.length&&(a.focus&&this.showPrimarySelection(),this.showMultipleSelections(a))},showPrimarySelection:function(){var b=window.getSelection(),c=this.cm.doc.sel.primary(),d=Eb(this.cm,b.anchorNode,b.anchorOffset),e=Eb(this.cm,b.focusNode,b.focusOffset);if(!d||d.bad||!e||e.bad||0!=pb(sb(d,e),c.from())||0!=pb(rb(d,e),c.to())){var f=Cb(this.cm,c.from()),g=Cb(this.cm,c.to());if(f||g){var h=this.cm.display.view,i=b.rangeCount&&b.getRangeAt(0);if(f){if(!g){var j=h[h.length-1].measure,k=j.maps?j.maps[j.maps.length-1]:j.map;g={node:k[k.length-1],offset:k[k.length-2]-k[k.length-3]}}}else f={node:h[0].measure.map[2],offset:0};try{var l=lh(f.node,f.offset,g.offset,g.node)}catch(m){}l&&(b.removeAllRanges(),b.addRange(l),i&&null==b.anchorNode?b.addRange(i):a&&this.startGracePeriod()),this.rememberSelection()}}},startGracePeriod:function(){var a=this;clearTimeout(this.gracePeriod),this.gracePeriod=setTimeout(function(){a.gracePeriod=!1,a.selectionChanged()&&a.cm.operation(function(){a.cm.curOp.selectionChanged=!0})},20)},showMultipleSelections:function(a){nh(this.cm.display.cursorDiv,a.cursors),nh(this.cm.display.selectionDiv,a.selection)},rememberSelection:function(){var a=window.getSelection();this.lastAnchorNode=a.anchorNode,this.lastAnchorOffset=a.anchorOffset,this.lastFocusNode=a.focusNode,this.lastFocusOffset=a.focusOffset},selectionInEditor:function(){var a=window.getSelection();if(!a.rangeCount)return!1;var b=a.getRangeAt(0).commonAncestorContainer;return oh(this.div,b)},focus:function(){"nocursor"!=this.cm.options.readOnly&&this.div.focus()},blur:function(){this.div.blur()},getField:function(){return this.div},supportsTouch:function(){return!0},receivedFocus:function(){function b(){a.cm.state.focused&&(a.pollSelection(),a.polling.set(a.cm.options.pollInterval,b))}var a=this;this.selectionInEditor()?this.pollSelection():ad(this.cm,function(){a.cm.curOp.selectionChanged=!0}),this.polling.set(this.cm.options.pollInterval,b)},selectionChanged:function(){var a=window.getSelection();return a.anchorNode!=this.lastAnchorNode||a.anchorOffset!=this.lastAnchorOffset||a.focusNode!=this.lastFocusNode||a.focusOffset!=this.lastFocusOffset},pollSelection:function(){if(!this.composing&&!this.gracePeriod&&this.selectionChanged()){var a=window.getSelection(),b=this.cm;this.rememberSelection();var c=Eb(b,a.anchorNode,a.anchorOffset),d=Eb(b,a.focusNode,a.focusOffset);c&&d&&ad(b,function(){Xb(b.doc,Kb(c,d),Qg),(c.bad||d.bad)&&(b.curOp.selectionChanged=!0)})}},pollContent:function(){var a=this.cm,b=a.display,c=a.doc.sel.primary(),d=c.from(),e=c.to();if(d.line<b.viewFrom||e.line>b.viewTo-1)return!1;var f;if(d.line==b.viewFrom||0==(f=jd(a,d.line)))var g=fg(b.view[0].line),h=b.view[0].node;else var g=fg(b.view[f].line),h=b.view[f-1].node.nextSibling;var i=jd(a,e.line);if(i==b.view.length-1)var j=b.viewTo-1,k=b.view[i].node;else var j=fg(b.view[i+1].line)-1,k=b.view[i+1].node.previousSibling;for(var l=Dh(Gb(a,h,k,g,j)),m=cg(a.doc,ob(g,0),ob(j,bg(a.doc,j).text.length));l.length>1&&m.length>1;)if(Yg(l)==Yg(m))l.pop(),m.pop(),j--;else{if(l[0]!=m[0])break;l.shift(),m.shift(),g++}for(var n=0,o=0,p=l[0],q=m[0],r=Math.min(p.length,q.length);r>n&&p.charCodeAt(n)==q.charCodeAt(n);)++n;for(var s=Yg(l),t=Yg(m),u=Math.min(s.length-(1==l.length?n:0),t.length-(1==m.length?n:0));u>o&&s.charCodeAt(s.length-o-1)==t.charCodeAt(t.length-o-1);)++o;l[l.length-1]=s.slice(0,s.length-o),l[0]=l[0].slice(n);var v=ob(g,n),w=ob(j,m.length?Yg(m).length-o:0);return l.length>1||l[0]||pb(v,w)?(ie(a.doc,l,v,w,"+input"),!0):void 0},ensurePolled:function(){this.forceCompositionEnd()},reset:function(){this.forceCompositionEnd()},forceCompositionEnd:function(){this.composing&&!this.composing.handled&&(this.applyComposition(this.composing),this.composing.handled=!0,this.div.blur(),this.div.focus())},applyComposition:function(a){a.data&&a.data!=a.startData&&bd(this.cm,wb)(this.cm,a.data,0,a.sel)},setUneditable:function(a){a.setAttribute("contenteditable","false")},onKeyPress:function(a){a.preventDefault(),bd(this.cm,wb)(this.cm,String.fromCharCode(null==a.charCode?a.keyCode:a.charCode),0)},onContextMenu:ah,resetPosition:ah,needsContentAttribute:!0},Bb.prototype),v.inputStyles={textarea:zb,contenteditable:Bb},Hb.prototype={primary:function(){return this.ranges[this.primIndex]},equals:function(a){if(a==this)return!0;if(a.primIndex!=this.primIndex||a.ranges.length!=this.ranges.length)return!1;for(var b=0;b<this.ranges.length;b++){var c=this.ranges[b],d=a.ranges[b];if(0!=pb(c.anchor,d.anchor)||0!=pb(c.head,d.head))return!1}return!0},deepCopy:function(){for(var a=[],b=0;b<this.ranges.length;b++)a[b]=new Ib(qb(this.ranges[b].anchor),qb(this.ranges[b].head));return new Hb(a,this.primIndex)},somethingSelected:function(){for(var a=0;a<this.ranges.length;a++)if(!this.ranges[a].empty())return!0;return!1},contains:function(a,b){b||(b=a);for(var c=0;c<this.ranges.length;c++){var d=this.ranges[c];if(pb(b,d.from())>=0&&pb(a,d.to())<=0)return c}return-1}},Ib.prototype={from:function(){return sb(this.anchor,this.head)},to:function(){return rb(this.anchor,this.head)},empty:function(){return this.head.line==this.anchor.line&&this.head.ch==this.anchor.ch}};var Oc,sd,td,xc={left:0,right:0,top:0,bottom:0},Rc=null,Sc=0,zd=0,Ed=0,Fd=null;d?Fd=-.53:a?Fd=15:h?Fd=-.7:j&&(Fd=-1/3);var Gd=function(a){var b=a.wheelDeltaX,c=a.wheelDeltaY;return null==b&&a.detail&&a.axis==a.HORIZONTAL_AXIS&&(b=a.detail),null==c&&a.detail&&a.axis==a.VERTICAL_AXIS?c=a.detail:null==c&&(c=a.wheelDelta),{x:b,y:c}};v.wheelEventPixels=function(a){var b=Gd(a);return b.x*=Fd,b.y*=Fd,b};var Kd=new Tg,Od=null,Yd=v.changeEnd=function(a){return a.text?ob(a.from.line+a.text.length-1,Yg(a.text).length+(1==a.text.length?a.from.ch:0)):a.to};v.prototype={constructor:v,focus:function(){window.focus(),this.display.input.focus()},setOption:function(a,b){var c=this.options,d=c[a];(c[a]!=b||"mode"==a)&&(c[a]=b,we.hasOwnProperty(a)&&bd(this,we[a])(this,b,d))},getOption:function(a){return this.options[a]},getDoc:function(){return this.doc},addKeyMap:function(a,b){this.state.keyMaps[b?"push":"unshift"](Me(a))},removeKeyMap:function(a){for(var b=this.state.keyMaps,c=0;c<b.length;++c)if(b[c]==a||b[c].name==a)return b.splice(c,1),!0},addOverlay:cd(function(a,b){var c=a.token?a:v.getMode(this.options,a);if(c.startState)throw new Error("Overlays may not be stateful.");this.state.overlays.push({mode:c,modeSpec:a,opaque:b&&b.opaque}),this.state.modeGen++,gd(this)}),removeOverlay:cd(function(a){for(var b=this.state.overlays,c=0;c<b.length;++c){var d=b[c].modeSpec;if(d==a||"string"==typeof a&&d.name==a)return b.splice(c,1),this.state.modeGen++,gd(this),void 0}}),indentLine:cd(function(a,b,c){"string"!=typeof b&&"number"!=typeof b&&(b=null==b?this.options.smartIndent?"smart":"prev":b?"add":"subtract"),Ob(this.doc,a)&&qe(this,a,b,c)}),indentSelection:cd(function(a){for(var b=this.doc.sel.ranges,c=-1,d=0;d<b.length;d++){var e=b[d];if(e.empty())e.head.line>c&&(qe(this,e.head.line,a,!0),c=e.head.line,d==this.doc.sel.primIndex&&oe(this));else{var f=e.from(),g=e.to(),h=Math.max(c,f.line);c=Math.min(this.lastLine(),g.line-(g.ch?0:1))+1;for(var i=h;c>i;++i)qe(this,i,a);var j=this.doc.sel.ranges;0==f.ch&&b.length==j.length&&j[d].from().ch>0&&Tb(this.doc,d,new Ib(f,j[d].to()),Qg)}}}),getTokenAt:function(a,b){return Ef(this,a,b)},getLineTokens:function(a,b){return Ef(this,ob(a),b,!0)},getTokenTypeAt:function(a){a=Mb(this.doc,a);var f,b=Hf(this,bg(this.doc,a.line)),c=0,d=(b.length-1)/2,e=a.ch;if(0==e)f=b[2];else for(;;){var g=c+d>>1;if((g?b[2*g-1]:0)>=e)d=g;else{if(!(b[2*g+1]<e)){f=b[2*g+2];break}c=g+1}}var h=f?f.indexOf("cm-overlay "):-1;return 0>h?f:0==h?null:f.slice(0,h-1)},getModeAt:function(a){var b=this.doc.mode;return b.innerMode?v.innerMode(b,this.getTokenAt(a).state).mode:b},getHelper:function(a,b){return this.getHelpers(a,b)[0]},getHelpers:function(a,b){var c=[];if(!De.hasOwnProperty(b))return c;var d=De[b],e=this.getModeAt(a);if("string"==typeof e[b])d[e[b]]&&c.push(d[e[b]]);else if(e[b])for(var f=0;f<e[b].length;f++){var g=d[e[b][f]];g&&c.push(g)}else e.helperType&&d[e.helperType]?c.push(d[e.helperType]):d[e.name]&&c.push(d[e.name]);for(var f=0;f<d._global.length;f++){var h=d._global[f];h.pred(e,this)&&-1==$g(c,h.val)&&c.push(h.val)}return c},getStateAfter:function(a,b){var c=this.doc;return a=Lb(c,null==a?c.first+c.size-1:a),jc(this,a+1,b)},cursorCoords:function(a,b){var c,d=this.doc.sel.primary();return c=null==a?d.head:"object"==typeof a?Mb(this.doc,a):a?d.from():d.to(),Jc(this,c,b||"page")},charCoords:function(a,b){return Ic(this,Mb(this.doc,a),b||"page")},coordsChar:function(a,b){return a=Hc(this,a,b||"page"),Mc(this,a.left,a.top)},lineAtHeight:function(a,b){return a=Hc(this,{top:a,left:0},b||"page").top,gg(this.doc,a+this.display.viewOffset)},heightAtLine:function(a,b){var c=!1,d=this.doc.first+this.doc.size-1;a<this.doc.first?a=this.doc.first:a>d&&(a=d,c=!0);var e=bg(this.doc,a);return Gc(this,e,{top:0,left:0},b||"page").top+(c?this.doc.height-hg(e):0)},defaultTextHeight:function(){return Pc(this.display)},defaultCharWidth:function(){return Qc(this.display)},setGutterMarker:cd(function(a,b,c){return re(this.doc,a,"gutter",function(a){var d=a.gutterMarkers||(a.gutterMarkers={});return d[b]=c,!c&&hh(d)&&(a.gutterMarkers=null),!0})}),clearGutter:cd(function(a){var b=this,c=b.doc,d=c.first;c.iter(function(c){c.gutterMarkers&&c.gutterMarkers[a]&&(c.gutterMarkers[a]=null,hd(b,d,"gutter"),hh(c.gutterMarkers)&&(c.gutterMarkers=null)),++d})}),lineInfo:function(a){if("number"==typeof a){if(!Ob(this.doc,a))return null;var b=a;if(a=bg(this.doc,a),!a)return null}else{var b=fg(a);if(null==b)return null}return{line:b,handle:a,text:a.text,gutterMarkers:a.gutterMarkers,textClass:a.textClass,bgClass:a.bgClass,wrapClass:a.wrapClass,widgets:a.widgets}},getViewport:function(){return{from:this.display.viewFrom,to:this.display.viewTo}},addWidget:function(a,b,c,d,e){var f=this.display;a=Jc(this,Mb(this.doc,a));var g=a.bottom,h=a.left;if(b.style.position="absolute",b.setAttribute("cm-ignore-events","true"),this.display.input.setUneditable(b),f.sizer.appendChild(b),"over"==d)g=a.top;else if("above"==d||"near"==d){var i=Math.max(f.wrapper.clientHeight,this.doc.height),j=Math.max(f.sizer.clientWidth,f.lineSpace.clientWidth);("above"==d||a.bottom+b.offsetHeight>i)&&a.top>b.offsetHeight?g=a.top-b.offsetHeight:a.bottom+b.offsetHeight<=i&&(g=a.bottom),h+b.offsetWidth>j&&(h=j-b.offsetWidth)}b.style.top=g+"px",b.style.left=b.style.right="","right"==e?(h=f.sizer.clientWidth-b.offsetWidth,b.style.right="0px"):("left"==e?h=0:"middle"==e&&(h=(f.sizer.clientWidth-b.offsetWidth)/2),b.style.left=h+"px"),c&&le(this,h,g,h+b.offsetWidth,g+b.offsetHeight)},triggerOnKeyDown:cd(Pd),triggerOnKeyPress:cd(Sd),triggerOnKeyUp:Rd,execCommand:function(a){return Ge.hasOwnProperty(a)?Ge[a](this):void 0},findPosH:function(a,b,c,d){var e=1;0>b&&(e=-1,b=-b);for(var f=0,g=Mb(this.doc,a);b>f&&(g=te(this.doc,g,e,c,d),!g.hitSide);++f);return g},moveH:cd(function(a,b){var c=this;c.extendSelectionsBy(function(d){return c.display.shift||c.doc.extend||d.empty()?te(c.doc,d.head,a,b,c.options.rtlMoveVisually):0>a?d.from():d.to()},Sg)}),deleteH:cd(function(a,b){var c=this.doc.sel,d=this.doc;c.somethingSelected()?d.replaceSelection("",null,"+delete"):se(this,function(c){var e=te(d,c.head,a,b,!1);return 0>a?{from:e,to:c.head}:{from:c.head,to:e}})}),findPosV:function(a,b,c,d){var e=1,f=d;0>b&&(e=-1,b=-b);for(var g=0,h=Mb(this.doc,a);b>g;++g){var i=Jc(this,h,"div");if(null==f?f=i.left:i.left=f,h=ue(this,i,e,c),h.hitSide)break}return h},moveV:cd(function(a,b){var c=this,d=this.doc,e=[],f=!c.display.shift&&!d.extend&&d.sel.somethingSelected();if(d.extendSelectionsBy(function(g){if(f)return 0>a?g.from():g.to();var h=Jc(c,g.head,"div");null!=g.goalColumn&&(h.left=g.goalColumn),e.push(h.left);var i=ue(c,h,a,b);return"page"==b&&g==d.sel.primary()&&ne(c,null,Ic(c,i,"div").top-h.top),i},Sg),e.length)for(var g=0;g<d.sel.ranges.length;g++)d.sel.ranges[g].goalColumn=e[g]}),findWordAt:function(a){var b=this.doc,c=bg(b,a.line).text,d=a.ch,e=a.ch;if(c){var f=this.getHelper(a,"wordChars");(a.xRel<0||e==c.length)&&d?--d:++e;for(var g=c.charAt(d),h=gh(g,f)?function(a){return gh(a,f)}:/\s/.test(g)?function(a){return/\s/.test(a)}:function(a){return!/\s/.test(a)&&!gh(a)};d>0&&h(c.charAt(d-1));)--d;for(;e<c.length&&h(c.charAt(e));)++e}return new Ib(ob(a.line,d),ob(a.line,e))},toggleOverwrite:function(a){(null==a||a!=this.state.overwrite)&&((this.state.overwrite=!this.state.overwrite)?sh(this.display.cursorDiv,"CodeMirror-overwrite"):rh(this.display.cursorDiv,"CodeMirror-overwrite"),Gg(this,"overwriteToggle",this,this.state.overwrite))},hasFocus:function(){return this.display.input.getField()==ph()},scrollTo:cd(function(a,b){(null!=a||null!=b)&&pe(this),null!=a&&(this.curOp.scrollLeft=a),null!=b&&(this.curOp.scrollTop=b)}),getScrollInfo:function(){var a=this.display.scroller;return{left:a.scrollLeft,top:a.scrollTop,height:a.scrollHeight-nc(this)-this.display.barHeight,width:a.scrollWidth-nc(this)-this.display.barWidth,clientHeight:pc(this),clientWidth:oc(this)}},scrollIntoView:cd(function(a,b){if(null==a?(a={from:this.doc.sel.primary().head,to:null},null==b&&(b=this.options.cursorScrollMargin)):"number"==typeof a?a={from:ob(a,0),to:null}:null==a.from&&(a={from:a,to:null}),a.to||(a.to=a.from),a.margin=b||0,null!=a.from.line)pe(this),this.curOp.scrollToPos=a;else{var c=me(this,Math.min(a.from.left,a.to.left),Math.min(a.from.top,a.to.top)-a.margin,Math.max(a.from.right,a.to.right),Math.max(a.from.bottom,a.to.bottom)+a.margin);this.scrollTo(c.scrollLeft,c.scrollTop)}}),setSize:cd(function(a,b){function d(a){return"number"==typeof a||/^\d+$/.test(String(a))?a+"px":a}var c=this;null!=a&&(c.display.wrapper.style.width=d(a)),null!=b&&(c.display.wrapper.style.height=d(b)),c.options.lineWrapping&&Cc(this);var e=c.display.viewFrom;c.doc.iter(e,c.display.viewTo,function(a){if(a.widgets)for(var b=0;b<a.widgets.length;b++)if(a.widgets[b].noHScroll){hd(c,e,"widget");break}++e}),c.curOp.forceUpdate=!0,Gg(c,"refresh",this)}),operation:function(a){return ad(this,a)},refresh:cd(function(){var a=this.display.cachedTextHeight;gd(this),this.curOp.forceUpdate=!0,Dc(this),this.scrollTo(this.doc.scrollLeft,this.doc.scrollTop),F(this),(null==a||Math.abs(a-Pc(this.display))>.5)&&B(this),Gg(this,"refresh",this)}),swapDoc:cd(function(a){var b=this.doc;return b.cm=null,ag(this,a),Dc(this),this.display.input.reset(),this.scrollTo(a.scrollLeft,a.scrollTop),this.curOp.forceScroll=!0,Ig(this,"swapDoc",this,b),b}),getInputField:function(){return this.display.input.getField()},getWrapperElement:function(){return this.display.wrapper},getScrollerElement:function(){return this.display.scroller},getGutterElement:function(){return this.display.gutters}},Ng(v);var ve=v.defaults={},we=v.optionHandlers={},ye=v.Init={toString:function(){return"CodeMirror.Init"}};xe("value","",function(a,b){a.setValue(b)},!0),xe("mode",null,function(a,b){a.doc.modeOption=b,x(a)},!0),xe("indentUnit",2,x,!0),xe("indentWithTabs",!1),xe("smartIndent",!0),xe("tabSize",4,function(a){y(a),Dc(a),gd(a)},!0),xe("specialChars",/[\t\u0000-\u0019\u00ad\u200b-\u200f\u2028\u2029\ufeff]/g,function(a,b,c){a.state.specialChars=new RegExp(b.source+(b.test("  ")?"":"|  "),"g"),c!=v.Init&&a.refresh()}),xe("specialCharPlaceholder",Nf,function(a){a.refresh()},!0),xe("electricChars",!0),xe("inputStyle",n?"contenteditable":"textarea",function(){throw new Error("inputStyle can not (yet) be changed in a running editor")},!0),xe("rtlMoveVisually",!p),xe("wholeLineUpdateBefore",!0),xe("theme","default",function(a){C(a),D(a)},!0),xe("keyMap","default",function(a,b,c){var d=Me(b),e=c!=v.Init&&Me(c);e&&e.detach&&e.detach(a,d),d.attach&&d.attach(a,e||null)}),xe("extraKeys",null),xe("lineWrapping",!1,z,!0),xe("gutters",[],function(a){I(a.options),D(a)},!0),xe("fixedGutter",!0,function(a,b){a.display.gutters.style.left=b?T(a.display)+"px":"0",a.refresh()},!0),xe("coverGutterNextToScrollbar",!1,function(a){N(a)},!0),xe("scrollbarStyle","native",function(a){M(a),N(a),a.display.scrollbars.setScrollTop(a.doc.scrollTop),a.display.scrollbars.setScrollLeft(a.doc.scrollLeft)},!0),xe("lineNumbers",!1,function(a){I(a.options),D(a)},!0),xe("firstLineNumber",1,D,!0),xe("lineNumberFormatter",function(a){return a},D,!0),xe("showCursorWhenSelecting",!1,bc,!0),xe("resetSelectionOnContextMenu",!0),xe("readOnly",!1,function(a,b){"nocursor"==b?(Vd(a),a.display.input.blur(),a.display.disabled=!0):(a.display.disabled=!1,b||a.display.input.reset())}),xe("disableInput",!1,function(a,b){b||a.display.input.reset()},!0),xe("dragDrop",!0),xe("cursorBlinkRate",530),xe("cursorScrollMargin",0),xe("cursorHeight",1,bc,!0),xe("singleCursorHeightPerLine",!0,bc,!0),xe("workTime",100),xe("workDelay",100),xe("flattenSpans",!0,y,!0),xe("addModeClass",!1,y,!0),xe("pollInterval",100),xe("undoDepth",200,function(a,b){a.doc.history.undoDepth=b}),xe("historyEventDelay",1250),xe("viewportMargin",10,function(a){a.refresh()},!0),xe("maxHighlightLength",1e4,y,!0),xe("moveInputWithCursor",!0,function(a,b){b||a.display.input.resetPosition()}),xe("tabindex",null,function(a,b){a.display.input.getField().tabIndex=b||""}),xe("autofocus",null);var ze=v.modes={},Ae=v.mimeModes={};v.defineMode=function(a,b){v.defaults.mode||"null"==a||(v.defaults.mode=a),arguments.length>2&&(b.dependencies=Array.prototype.slice.call(arguments,2)),ze[a]=b},v.defineMIME=function(a,b){Ae[a]=b},v.resolveMode=function(a){if("string"==typeof a&&Ae.hasOwnProperty(a))a=Ae[a];else if(a&&"string"==typeof a.name&&Ae.hasOwnProperty(a.name)){var b=Ae[a.name];"string"==typeof b&&(b={name:b}),a=bh(b,a),a.name=b.name}else if("string"==typeof a&&/^[\w\-]+\/[\w\-]+\+xml$/.test(a))return v.resolveMode("application/xml");return"string"==typeof a?{name:a}:a||{name:"null"}},v.getMode=function(a,b){var b=v.resolveMode(b),c=ze[b.name];if(!c)return v.getMode(a,"text/plain");var d=c(a,b);if(Be.hasOwnProperty(b.name)){var e=Be[b.name];for(var f in e)e.hasOwnProperty(f)&&(d.hasOwnProperty(f)&&(d["_"+f]=d[f]),d[f]=e[f])}if(d.name=b.name,b.helperType&&(d.helperType=b.helperType),b.modeProps)for(var f in b.modeProps)d[f]=b.modeProps[f];return d},v.defineMode("null",function(){return{token:function(a){a.skipToEnd()}}}),v.defineMIME("text/plain","null");var Be=v.modeExtensions={};v.extendMode=function(a,b){var c=Be.hasOwnProperty(a)?Be[a]:Be[a]={};ch(b,c)},v.defineExtension=function(a,b){v.prototype[a]=b},v.defineDocExtension=function(a,b){Yf.prototype[a]=b},v.defineOption=xe;var Ce=[];v.defineInitHook=function(a){Ce.push(a)};var De=v.helpers={};v.registerHelper=function(a,b,c){De.hasOwnProperty(a)||(De[a]=v[a]={_global:[]}),De[a][b]=c},v.registerGlobalHelper=function(a,b,c,d){v.registerHelper(a,b,d),De[a]._global.push({pred:c,val:d})};var Ee=v.copyState=function(a,b){if(b===!0)return b;if(a.copyState)return a.copyState(b);var c={};for(var d in b){var e=b[d];e instanceof Array&&(e=e.concat([])),c[d]=e}return c},Fe=v.startState=function(a,b,c){return a.startState?a.startState(b,c):!0};v.innerMode=function(a,b){for(;a.innerMode;){var c=a.innerMode(b);if(!c||c.mode==a)break;b=c.state,a=c.mode}return c||{mode:a,state:b}};var Ge=v.commands={selectAll:function(a){a.setSelection(ob(a.firstLine(),0),ob(a.lastLine()),Qg)},singleSelection:function(a){a.setSelection(a.getCursor("anchor"),a.getCursor("head"),Qg)},killLine:function(a){se(a,function(b){if(b.empty()){var c=bg(a.doc,b.head.line).text.length;return b.head.ch==c&&b.head.line<a.lastLine()?{from:b.head,to:ob(b.head.line+1,0)}:{from:b.head,to:ob(b.head.line,c)}}return{from:b.from(),to:b.to()}})},deleteLine:function(a){se(a,function(b){return{from:ob(b.from().line,0),to:Mb(a.doc,ob(b.to().line+1,0))}})},delLineLeft:function(a){se(a,function(a){return{from:ob(a.from().line,0),to:a.from()}})},delWrappedLineLeft:function(a){se(a,function(b){var c=a.charCoords(b.head,"div").top+5,d=a.coordsChar({left:0,top:c},"div");return{from:d,to:b.from()}})},delWrappedLineRight:function(a){se(a,function(b){var c=a.charCoords(b.head,"div").top+5,d=a.coordsChar({left:a.display.lineDiv.offsetWidth+100,top:c},"div");return{from:b.from(),to:d}})},undo:function(a){a.undo()},redo:function(a){a.redo()},undoSelection:function(a){a.undoSelection()},redoSelection:function(a){a.redoSelection()},goDocStart:function(a){a.extendSelection(ob(a.firstLine(),0))},goDocEnd:function(a){a.extendSelection(ob(a.lastLine()))},goLineStart:function(a){a.extendSelectionsBy(function(b){return Oh(a,b.head.line)},{origin:"+move",bias:1})},goLineStartSmart:function(a){a.extendSelectionsBy(function(b){return Qh(a,b.head)},{origin:"+move",bias:1})},goLineEnd:function(a){a.extendSelectionsBy(function(b){return Ph(a,b.head.line)},{origin:"+move",bias:-1})},goLineRight:function(a){a.extendSelectionsBy(function(b){var c=a.charCoords(b.head,"div").top+5;return a.coordsChar({left:a.display.lineDiv.offsetWidth+100,top:c},"div")},Sg)},goLineLeft:function(a){a.extendSelectionsBy(function(b){var c=a.charCoords(b.head,"div").top+5;return a.coordsChar({left:0,top:c},"div")},Sg)},goLineLeftSmart:function(a){a.extendSelectionsBy(function(b){var c=a.charCoords(b.head,"div").top+5,d=a.coordsChar({left:0,top:c},"div");return d.ch<a.getLine(d.line).search(/\S/)?Qh(a,b.head):d},Sg)},goLineUp:function(a){a.moveV(-1,"line")},goLineDown:function(a){a.moveV(1,"line")},goPageUp:function(a){a.moveV(-1,"page")},goPageDown:function(a){a.moveV(1,"page")},goCharLeft:function(a){a.moveH(-1,"char")},goCharRight:function(a){a.moveH(1,"char")},goColumnLeft:function(a){a.moveH(-1,"column")},goColumnRight:function(a){a.moveH(1,"column")},goWordLeft:function(a){a.moveH(-1,"word")},goGroupRight:function(a){a.moveH(1,"group")},goGroupLeft:function(a){a.moveH(-1,"group")},goWordRight:function(a){a.moveH(1,"word")},delCharBefore:function(a){a.deleteH(-1,"char")},delCharAfter:function(a){a.deleteH(1,"char")},delWordBefore:function(a){a.deleteH(-1,"word")},delWordAfter:function(a){a.deleteH(1,"word")},delGroupBefore:function(a){a.deleteH(-1,"group")},delGroupAfter:function(a){a.deleteH(1,"group")},indentAuto:function(a){a.indentSelection("smart")},indentMore:function(a){a.indentSelection("add")},indentLess:function(a){a.indentSelection("subtract")},insertTab:function(a){a.replaceSelection(" ")},insertSoftTab:function(a){for(var b=[],c=a.listSelections(),d=a.options.tabSize,e=0;e<c.length;e++){var f=c[e].from(),g=Ug(a.getLine(f.line),f.ch,d);b.push(new Array(d-g%d+1).join(" "))}a.replaceSelections(b)},defaultTab:function(a){a.somethingSelected()?a.indentSelection("add"):a.execCommand("insertTab")},transposeChars:function(a){ad(a,function(){for(var b=a.listSelections(),c=[],d=0;d<b.length;d++){var e=b[d].head,f=bg(a.doc,e.line).text;if(f)if(e.ch==f.length&&(e=new ob(e.line,e.ch-1)),e.ch>0)e=new ob(e.line,e.ch+1),a.replaceRange(f.charAt(e.ch-1)+f.charAt(e.ch-2),ob(e.line,e.ch-2),e,"+transpose");else if(e.line>a.doc.first){var g=bg(a.doc,e.line-1).text;g&&a.replaceRange(f.charAt(0)+"\n"+g.charAt(g.length-1),ob(e.line-1,g.length-1),ob(e.line,1),"+transpose")}c.push(new Ib(e,e))}a.setSelections(c)})},newlineAndIndent:function(a){ad(a,function(){for(var b=a.listSelections().length,c=0;b>c;c++){var d=a.listSelections()[c];a.replaceRange("\n",d.anchor,d.head,"+input"),a.indentLine(d.from().line+1,null,!0),oe(a)}})},toggleOverwrite:function(a){a.toggleOverwrite()}},He=v.keyMap={};He.basic={Left:"goCharLeft",Right:"goCharRight",Up:"goLineUp",Down:"goLineDown",End:"goLineEnd",Home:"goLineStartSmart",PageUp:"goPageUp",PageDown:"goPageDown",Delete:"delCharAfter",Backspace:"delCharBefore","Shift-Backspace":"delCharBefore",Tab:"defaultTab","Shift-Tab":"indentAuto",Enter:"newlineAndIndent",Insert:"toggleOverwrite",Esc:"singleSelection"},He.pcDefault={"Ctrl-A":"selectAll","Ctrl-D":"deleteLine","Ctrl-Z":"undo","Shift-Ctrl-Z":"redo","Ctrl-Y":"redo","Ctrl-Home":"goDocStart","Ctrl-End":"goDocEnd","Ctrl-Up":"goLineUp","Ctrl-Down":"goLineDown","Ctrl-Left":"goGroupLeft","Ctrl-Right":"goGroupRight","Alt-Left":"goLineStart","Alt-Right":"goLineEnd","Ctrl-Backspace":"delGroupBefore","Ctrl-Delete":"delGroupAfter","Ctrl-S":"save","Ctrl-F":"find","Ctrl-G":"findNext","Shift-Ctrl-G":"findPrev","Shift-Ctrl-F":"replace","Shift-Ctrl-R":"replaceAll","Ctrl-[":"indentLess","Ctrl-]":"indentMore","Ctrl-U":"undoSelection","Shift-Ctrl-U":"redoSelection","Alt-U":"redoSelection",fallthrough:"basic"},He.emacsy={"Ctrl-F":"goCharRight","Ctrl-B":"goCharLeft","Ctrl-P":"goLineUp","Ctrl-N":"goLineDown","Alt-F":"goWordRight","Alt-B":"goWordLeft","Ctrl-A":"goLineStart","Ctrl-E":"goLineEnd","Ctrl-V":"goPageDown","Shift-Ctrl-V":"goPageUp","Ctrl-D":"delCharAfter","Ctrl-H":"delCharBefore","Alt-D":"delWordAfter","Alt-Backspace":"delWordBefore","Ctrl-K":"killLine","Ctrl-T":"transposeChars"},He.macDefault={"Cmd-A":"selectAll","Cmd-D":"deleteLine","Cmd-Z":"undo","Shift-Cmd-Z":"redo","Cmd-Y":"redo","Cmd-Home":"goDocStart","Cmd-Up":"goDocStart","Cmd-End":"goDocEnd","Cmd-Down":"goDocEnd","Alt-Left":"goGroupLeft","Alt-Right":"goGroupRight","Cmd-Left":"goLineLeft","Cmd-Right":"goLineRight","Alt-Backspace":"delGroupBefore","Ctrl-Alt-Backspace":"delGroupAfter","Alt-Delete":"delGroupAfter","Cmd-S":"save","Cmd-F":"find","Cmd-G":"findNext","Shift-Cmd-G":"findPrev","Cmd-Alt-F":"replace","Shift-Cmd-Alt-F":"replaceAll","Cmd-[":"indentLess","Cmd-]":"indentMore","Cmd-Backspace":"delWrappedLineLeft","Cmd-Delete":"delWrappedLineRight","Cmd-U":"undoSelection","Shift-Cmd-U":"redoSelection","Ctrl-Up":"goDocStart","Ctrl-Down":"goDocEnd",fallthrough:["basic","emacsy"]},He["default"]=o?He.macDefault:He.pcDefault,v.normalizeKeyMap=function(a){var b={};for(var c in a)if(a.hasOwnProperty(c)){var d=a[c];if(/^(name|fallthrough|(de|at)tach)$/.test(c))continue;if("..."==d){delete a[c];continue}for(var e=_g(c.split(" "),Ie),f=0;f<e.length;f++){var g,h;f==e.length-1?(h=c,g=d):(h=e.slice(0,f+1).join(" "),g="...");var i=b[h];if(i){if(i!=g)throw new Error("Inconsistent bindings for "+h)}else b[h]=g}delete a[c]}for(var j in b)a[j]=b[j];return a};var Je=v.lookupKey=function(a,b,c,d){b=Me(b);var e=b.call?b.call(a,d):b[a];if(e===!1)return"nothing";if("..."===e)return"multi";if(null!=e&&c(e))return"handled";if(b.fallthrough){if("[object Array]"!=Object.prototype.toString.call(b.fallthrough))return Je(a,b.fallthrough,c,d);for(var f=0;f<b.fallthrough.length;f++){var g=Je(a,b.fallthrough[f],c,d);if(g)return g}}},Ke=v.isModifierKey=function(a){var b="string"==typeof a?a:Ih[a.keyCode];return"Ctrl"==b||"Alt"==b||"Shift"==b||"Mod"==b},Le=v.keyName=function(a,b){if(i&&34==a.keyCode&&a["char"])return!1;var c=Ih[a.keyCode],d=c;return null==d||a.altGraphKey?!1:(a.altKey&&"Alt"!=c&&(d="Alt-"+d),(r?a.metaKey:a.ctrlKey)&&"Ctrl"!=c&&(d="Ctrl-"+d),(r?a.ctrlKey:a.metaKey)&&"Cmd"!=c&&(d="Cmd-"+d),!b&&a.shiftKey&&"Shift"!=c&&(d="Shift-"+d),d)};v.fromTextArea=function(a,b){function d(){a.value=i.getValue()}if(b=b?ch(b):{},b.value=a.value,!b.tabindex&&a.tabIndex&&(b.tabindex=a.tabIndex),!b.placeholder&&a.placeholder&&(b.placeholder=a.placeholder),null==b.autofocus){var c=ph();b.autofocus=c==a||null!=a.getAttribute("autofocus")&&c==document.body}if(a.form&&(Eg(a.form,"submit",d),!b.leaveSubmitMethodAlone)){var e=a.form,f=e.submit;try{var g=e.submit=function(){d(),e.submit=f,e.submit(),e.submit=g}}catch(h){}}b.finishInit=function(b){b.save=d,b.getTextArea=function(){return a},b.toTextArea=function(){b.toTextArea=isNaN,d(),a.parentNode.removeChild(b.getWrapperElement()),a.style.display="",a.form&&(Fg(a.form,"submit",d),"function"==typeof a.form.submit&&(a.form.submit=f))}},a.style.display="none";var i=v(function(b){a.parentNode.insertBefore(b,a.nextSibling)},b);return i};var Ne=v.StringStream=function(a,b){this.pos=this.start=0,this.string=a,this.tabSize=b||8,this.lastColumnPos=this.lastColumnValue=0,this.lineStart=0};Ne.prototype={eol:function(){return this.pos>=this.string.length},sol:function(){return this.pos==this.lineStart},peek:function(){return this.string.charAt(this.pos)||void 0},next:function(){return this.pos<this.string.length?this.string.charAt(this.pos++):void 0},eat:function(a){var b=this.string.charAt(this.pos);if("string"==typeof a)var c=b==a;else var c=b&&(a.test?a.test(b):a(b));return c?(++this.pos,b):void 0},eatWhile:function(a){for(var b=this.pos;this.eat(a););return this.pos>b},eatSpace:function(){for(var a=this.pos;/[\s\u00a0]/.test(this.string.charAt(this.pos));)++this.pos;
return this.pos>a},skipToEnd:function(){this.pos=this.string.length},skipTo:function(a){var b=this.string.indexOf(a,this.pos);return b>-1?(this.pos=b,!0):void 0},backUp:function(a){this.pos-=a},column:function(){return this.lastColumnPos<this.start&&(this.lastColumnValue=Ug(this.string,this.start,this.tabSize,this.lastColumnPos,this.lastColumnValue),this.lastColumnPos=this.start),this.lastColumnValue-(this.lineStart?Ug(this.string,this.lineStart,this.tabSize):0)},indentation:function(){return Ug(this.string,null,this.tabSize)-(this.lineStart?Ug(this.string,this.lineStart,this.tabSize):0)},match:function(a,b,c){if("string"!=typeof a){var f=this.string.slice(this.pos).match(a);return f&&f.index>0?null:(f&&b!==!1&&(this.pos+=f[0].length),f)}var d=function(a){return c?a.toLowerCase():a},e=this.string.substr(this.pos,a.length);return d(e)==d(a)?(b!==!1&&(this.pos+=a.length),!0):void 0},current:function(){return this.string.slice(this.start,this.pos)},hideFirstChars:function(a,b){this.lineStart+=a;try{return b()}finally{this.lineStart-=a}}};var Oe=0,Pe=v.TextMarker=function(a,b){this.lines=[],this.type=b,this.doc=a,this.id=++Oe};Ng(Pe),Pe.prototype.clear=function(){if(!this.explicitlyCleared){var a=this.doc.cm,b=a&&!a.curOp;if(b&&Tc(a),Mg(this,"clear")){var c=this.find();c&&Ig(this,"clear",c.from,c.to)}for(var d=null,e=null,f=0;f<this.lines.length;++f){var g=this.lines[f],h=Xe(g.markedSpans,this);a&&!this.collapsed?hd(a,fg(g),"text"):a&&(null!=h.to&&(e=fg(g)),null!=h.from&&(d=fg(g))),g.markedSpans=Ye(g.markedSpans,h),null==h.from&&this.collapsed&&!sf(this.doc,g)&&a&&eg(g,Pc(a.display))}if(a&&this.collapsed&&!a.options.lineWrapping)for(var f=0;f<this.lines.length;++f){var i=of(this.lines[f]),j=G(i);j>a.display.maxLineLength&&(a.display.maxLine=i,a.display.maxLineLength=j,a.display.maxLineChanged=!0)}null!=d&&a&&this.collapsed&&gd(a,d,e+1),this.lines.length=0,this.explicitlyCleared=!0,this.atomic&&this.doc.cantEdit&&(this.doc.cantEdit=!1,a&&$b(a.doc)),a&&Ig(a,"markerCleared",a,this),b&&Vc(a),this.parent&&this.parent.clear()}},Pe.prototype.find=function(a,b){null==a&&"bookmark"==this.type&&(a=1);for(var c,d,e=0;e<this.lines.length;++e){var f=this.lines[e],g=Xe(f.markedSpans,this);if(null!=g.from&&(c=ob(b?f:fg(f),g.from),-1==a))return c;if(null!=g.to&&(d=ob(b?f:fg(f),g.to),1==a))return d}return c&&{from:c,to:d}},Pe.prototype.changed=function(){var a=this.find(-1,!0),b=this,c=this.doc.cm;a&&c&&ad(c,function(){var d=a.line,e=fg(a.line),f=uc(c,e);if(f&&(Bc(f),c.curOp.selectionChanged=c.curOp.forceUpdate=!0),c.curOp.updateMaxLine=!0,!sf(b.doc,d)&&null!=b.height){var g=b.height;b.height=null;var h=wf(b)-g;h&&eg(d,d.height+h)}})},Pe.prototype.attachLine=function(a){if(!this.lines.length&&this.doc.cm){var b=this.doc.cm.curOp;b.maybeHiddenMarkers&&-1!=$g(b.maybeHiddenMarkers,this)||(b.maybeUnhiddenMarkers||(b.maybeUnhiddenMarkers=[])).push(this)}this.lines.push(a)},Pe.prototype.detachLine=function(a){if(this.lines.splice($g(this.lines,a),1),!this.lines.length&&this.doc.cm){var b=this.doc.cm.curOp;(b.maybeHiddenMarkers||(b.maybeHiddenMarkers=[])).push(this)}};var Oe=0,Re=v.SharedTextMarker=function(a,b){this.markers=a,this.primary=b;for(var c=0;c<a.length;++c)a[c].parent=this};Ng(Re),Re.prototype.clear=function(){if(!this.explicitlyCleared){this.explicitlyCleared=!0;for(var a=0;a<this.markers.length;++a)this.markers[a].clear();Ig(this,"clear")}},Re.prototype.find=function(a,b){return this.primary.find(a,b)};var uf=v.LineWidget=function(a,b,c){if(c)for(var d in c)c.hasOwnProperty(d)&&(this[d]=c[d]);this.doc=a,this.node=b};Ng(uf),uf.prototype.clear=function(){var a=this.doc.cm,b=this.line.widgets,c=this.line,d=fg(c);if(null!=d&&b){for(var e=0;e<b.length;++e)b[e]==this&&b.splice(e--,1);b.length||(c.widgets=null);var f=wf(this);eg(c,Math.max(0,c.height-f)),a&&ad(a,function(){vf(a,c,-f),hd(a,d,"widget")})}},uf.prototype.changed=function(){var a=this.height,b=this.doc.cm,c=this.line;this.height=null;var d=wf(this)-a;d&&(eg(c,c.height+d),b&&ad(b,function(){b.curOp.forceUpdate=!0,vf(b,c,d)}))};var yf=v.Line=function(a,b,c){this.text=a,ff(this,b),this.height=c?c(this):1};Ng(yf),yf.prototype.lineNo=function(){return fg(this)};var Jf={},Kf={};Vf.prototype={chunkSize:function(){return this.lines.length},removeInner:function(a,b){for(var c=a,d=a+b;d>c;++c){var e=this.lines[c];this.height-=e.height,Af(e),Ig(e,"delete")}this.lines.splice(a,b)},collapse:function(a){a.push.apply(a,this.lines)},insertInner:function(a,b,c){this.height+=c,this.lines=this.lines.slice(0,a).concat(b).concat(this.lines.slice(a));for(var d=0;d<b.length;++d)b[d].parent=this},iterN:function(a,b,c){for(var d=a+b;d>a;++a)if(c(this.lines[a]))return!0}},Wf.prototype={chunkSize:function(){return this.size},removeInner:function(a,b){this.size-=b;for(var c=0;c<this.children.length;++c){var d=this.children[c],e=d.chunkSize();if(e>a){var f=Math.min(b,e-a),g=d.height;if(d.removeInner(a,f),this.height-=g-d.height,e==f&&(this.children.splice(c--,1),d.parent=null),0==(b-=f))break;a=0}else a-=e}if(this.size-b<25&&(this.children.length>1||!(this.children[0]instanceof Vf))){var h=[];this.collapse(h),this.children=[new Vf(h)],this.children[0].parent=this}},collapse:function(a){for(var b=0;b<this.children.length;++b)this.children[b].collapse(a)},insertInner:function(a,b,c){this.size+=b.length,this.height+=c;for(var d=0;d<this.children.length;++d){var e=this.children[d],f=e.chunkSize();if(f>=a){if(e.insertInner(a,b,c),e.lines&&e.lines.length>50){for(;e.lines.length>50;){var g=e.lines.splice(e.lines.length-25,25),h=new Vf(g);e.height-=h.height,this.children.splice(d+1,0,h),h.parent=this}this.maybeSpill()}break}a-=f}},maybeSpill:function(){if(!(this.children.length<=10)){var a=this;do{var b=a.children.splice(a.children.length-5,5),c=new Wf(b);if(a.parent){a.size-=c.size,a.height-=c.height;var e=$g(a.parent.children,a);a.parent.children.splice(e+1,0,c)}else{var d=new Wf(a.children);d.parent=a,a.children=[d,c],a=d}c.parent=a.parent}while(a.children.length>10);a.parent.maybeSpill()}},iterN:function(a,b,c){for(var d=0;d<this.children.length;++d){var e=this.children[d],f=e.chunkSize();if(f>a){var g=Math.min(b,f-a);if(e.iterN(a,g,c))return!0;if(0==(b-=g))break;a=0}else a-=f}}};var Xf=0,Yf=v.Doc=function(a,b,c){if(!(this instanceof Yf))return new Yf(a,b,c);null==c&&(c=0),Wf.call(this,[new Vf([new yf("",null)])]),this.first=c,this.scrollTop=this.scrollLeft=0,this.cantEdit=!1,this.cleanGeneration=1,this.frontier=c;var d=ob(c,0);this.sel=Kb(d),this.history=new jg(null),this.id=++Xf,this.modeOption=b,"string"==typeof a&&(a=Dh(a)),Uf(this,{from:d,to:d,text:a}),Xb(this,Kb(d),Qg)};Yf.prototype=bh(Wf.prototype,{constructor:Yf,iter:function(a,b,c){c?this.iterN(a-this.first,b-a,c):this.iterN(this.first,this.first+this.size,a)},insert:function(a,b){for(var c=0,d=0;d<b.length;++d)c+=b[d].height;this.insertInner(a-this.first,b,c)},remove:function(a,b){this.removeInner(a-this.first,b)},getValue:function(a){var b=dg(this,this.first,this.first+this.size);return a===!1?b:b.join(a||"\n")},setValue:dd(function(a){var b=ob(this.first,0),c=this.first+this.size-1;ce(this,{from:b,to:ob(c,bg(this,c).text.length),text:Dh(a),origin:"setValue",full:!0},!0),Xb(this,Kb(b))}),replaceRange:function(a,b,c,d){b=Mb(this,b),c=c?Mb(this,c):b,ie(this,a,b,c,d)},getRange:function(a,b,c){var d=cg(this,Mb(this,a),Mb(this,b));return c===!1?d:d.join(c||"\n")},getLine:function(a){var b=this.getLineHandle(a);return b&&b.text},getLineHandle:function(a){return Ob(this,a)?bg(this,a):void 0},getLineNumber:function(a){return fg(a)},getLineHandleVisualStart:function(a){return"number"==typeof a&&(a=bg(this,a)),of(a)},lineCount:function(){return this.size},firstLine:function(){return this.first},lastLine:function(){return this.first+this.size-1},clipPos:function(a){return Mb(this,a)},getCursor:function(a){var c,b=this.sel.primary();return c=null==a||"head"==a?b.head:"anchor"==a?b.anchor:"end"==a||"to"==a||a===!1?b.to():b.from()},listSelections:function(){return this.sel.ranges},somethingSelected:function(){return this.sel.somethingSelected()},setCursor:dd(function(a,b,c){Ub(this,Mb(this,"number"==typeof a?ob(a,b||0):a),null,c)}),setSelection:dd(function(a,b,c){Ub(this,Mb(this,a),Mb(this,b||a),c)}),extendSelection:dd(function(a,b,c){Rb(this,Mb(this,a),b&&Mb(this,b),c)}),extendSelections:dd(function(a,b){Sb(this,Pb(this,a,b))}),extendSelectionsBy:dd(function(a,b){Sb(this,_g(this.sel.ranges,a),b)}),setSelections:dd(function(a,b,c){if(a.length){for(var d=0,e=[];d<a.length;d++)e[d]=new Ib(Mb(this,a[d].anchor),Mb(this,a[d].head));null==b&&(b=Math.min(a.length-1,this.sel.primIndex)),Xb(this,Jb(e,b),c)}}),addSelection:dd(function(a,b,c){var d=this.sel.ranges.slice(0);d.push(new Ib(Mb(this,a),Mb(this,b||a))),Xb(this,Jb(d,d.length-1),c)}),getSelection:function(a){for(var c,b=this.sel.ranges,d=0;d<b.length;d++){var e=cg(this,b[d].from(),b[d].to());c=c?c.concat(e):e}return a===!1?c:c.join(a||"\n")},getSelections:function(a){for(var b=[],c=this.sel.ranges,d=0;d<c.length;d++){var e=cg(this,c[d].from(),c[d].to());a!==!1&&(e=e.join(a||"\n")),b[d]=e}return b},replaceSelection:function(a,b,c){for(var d=[],e=0;e<this.sel.ranges.length;e++)d[e]=a;this.replaceSelections(d,b,c||"+input")},replaceSelections:dd(function(a,b,c){for(var d=[],e=this.sel,f=0;f<e.ranges.length;f++){var g=e.ranges[f];d[f]={from:g.from(),to:g.to(),text:Dh(a[f]),origin:c}}for(var h=b&&"end"!=b&&ae(this,d,b),f=d.length-1;f>=0;f--)ce(this,d[f]);h?Wb(this,h):this.cm&&oe(this.cm)}),undo:dd(function(){ee(this,"undo")}),redo:dd(function(){ee(this,"redo")}),undoSelection:dd(function(){ee(this,"undo",!0)}),redoSelection:dd(function(){ee(this,"redo",!0)}),setExtending:function(a){this.extend=a},getExtending:function(){return this.extend},historySize:function(){for(var a=this.history,b=0,c=0,d=0;d<a.done.length;d++)a.done[d].ranges||++b;for(var d=0;d<a.undone.length;d++)a.undone[d].ranges||++c;return{undo:b,redo:c}},clearHistory:function(){this.history=new jg(this.history.maxGeneration)},markClean:function(){this.cleanGeneration=this.changeGeneration(!0)},changeGeneration:function(a){return a&&(this.history.lastOp=this.history.lastSelOp=this.history.lastOrigin=null),this.history.generation},isClean:function(a){return this.history.generation==(a||this.cleanGeneration)},getHistory:function(){return{done:ug(this.history.done),undone:ug(this.history.undone)}},setHistory:function(a){var b=this.history=new jg(this.history.maxGeneration);b.done=ug(a.done.slice(0),null,!0),b.undone=ug(a.undone.slice(0),null,!0)},addLineClass:dd(function(a,b,c){return re(this,a,"gutter"==b?"gutter":"class",function(a){var d="text"==b?"textClass":"background"==b?"bgClass":"gutter"==b?"gutterClass":"wrapClass";if(a[d]){if(qh(c).test(a[d]))return!1;a[d]+=" "+c}else a[d]=c;return!0})}),removeLineClass:dd(function(a,b,c){return re(this,a,"gutter"==b?"gutter":"class",function(a){var d="text"==b?"textClass":"background"==b?"bgClass":"gutter"==b?"gutterClass":"wrapClass",e=a[d];if(!e)return!1;if(null==c)a[d]=null;else{var f=e.match(qh(c));if(!f)return!1;var g=f.index+f[0].length;a[d]=e.slice(0,f.index)+(f.index&&g!=e.length?" ":"")+e.slice(g)||null}return!0})}),addLineWidget:dd(function(a,b,c){return xf(this,a,b,c)}),removeLineWidget:function(a){a.clear()},markText:function(a,b,c){return Qe(this,Mb(this,a),Mb(this,b),c,"range")},setBookmark:function(a,b){var c={replacedWith:b&&(null==b.nodeType?b.widget:b),insertLeft:b&&b.insertLeft,clearWhenEmpty:!1,shared:b&&b.shared,handleMouseEvents:b&&b.handleMouseEvents};return a=Mb(this,a),Qe(this,a,a,c,"bookmark")},findMarksAt:function(a){a=Mb(this,a);var b=[],c=bg(this,a.line).markedSpans;if(c)for(var d=0;d<c.length;++d){var e=c[d];(null==e.from||e.from<=a.ch)&&(null==e.to||e.to>=a.ch)&&b.push(e.marker.parent||e.marker)}return b},findMarks:function(a,b,c){a=Mb(this,a),b=Mb(this,b);var d=[],e=a.line;return this.iter(a.line,b.line+1,function(f){var g=f.markedSpans;if(g)for(var h=0;h<g.length;h++){var i=g[h];e==a.line&&a.ch>i.to||null==i.from&&e!=a.line||e==b.line&&i.from>b.ch||c&&!c(i.marker)||d.push(i.marker.parent||i.marker)}++e}),d},getAllMarks:function(){var a=[];return this.iter(function(b){var c=b.markedSpans;if(c)for(var d=0;d<c.length;++d)null!=c[d].from&&a.push(c[d].marker)}),a},posFromIndex:function(a){var b,c=this.first;return this.iter(function(d){var e=d.text.length+1;return e>a?(b=a,!0):(a-=e,++c,void 0)}),Mb(this,ob(c,b))},indexFromPos:function(a){a=Mb(this,a);var b=a.ch;return a.line<this.first||a.ch<0?0:(this.iter(this.first,a.line,function(a){b+=a.text.length+1}),b)},copy:function(a){var b=new Yf(dg(this,this.first,this.first+this.size),this.modeOption,this.first);return b.scrollTop=this.scrollTop,b.scrollLeft=this.scrollLeft,b.sel=this.sel,b.extend=!1,a&&(b.history.undoDepth=this.history.undoDepth,b.setHistory(this.getHistory())),b},linkedDoc:function(a){a||(a={});var b=this.first,c=this.first+this.size;null!=a.from&&a.from>b&&(b=a.from),null!=a.to&&a.to<c&&(c=a.to);var d=new Yf(dg(this,b,c),a.mode||this.modeOption,b);return a.sharedHist&&(d.history=this.history),(this.linked||(this.linked=[])).push({doc:d,sharedHist:a.sharedHist}),d.linked=[{doc:this,isParent:!0,sharedHist:a.sharedHist}],Ue(d,Te(this)),d},unlinkDoc:function(a){if(a instanceof v&&(a=a.doc),this.linked)for(var b=0;b<this.linked.length;++b){var c=this.linked[b];if(c.doc==a){this.linked.splice(b,1),a.unlinkDoc(this),Ve(Te(this));break}}if(a.history==this.history){var d=[a.id];_f(a,function(a){d.push(a.id)},!0),a.history=new jg(null),a.history.done=ug(this.history.done,d),a.history.undone=ug(this.history.undone,d)}},iterLinkedDocs:function(a){_f(this,a)},getMode:function(){return this.mode},getEditor:function(){return this.cm}}),Yf.prototype.eachLine=Yf.prototype.iter;var Zf="iter insert remove copy getEditor".split(" ");for(var $f in Yf.prototype)Yf.prototype.hasOwnProperty($f)&&$g(Zf,$f)<0&&(v.prototype[$f]=function(a){return function(){return a.apply(this.doc,arguments)}}(Yf.prototype[$f]));Ng(Yf);var yg=v.e_preventDefault=function(a){a.preventDefault?a.preventDefault():a.returnValue=!1},zg=v.e_stopPropagation=function(a){a.stopPropagation?a.stopPropagation():a.cancelBubble=!0},Bg=v.e_stop=function(a){yg(a),zg(a)},Eg=v.on=function(a,b,c){if(a.addEventListener)a.addEventListener(b,c,!1);else if(a.attachEvent)a.attachEvent("on"+b,c);else{var d=a._handlers||(a._handlers={}),e=d[b]||(d[b]=[]);e.push(c)}},Fg=v.off=function(a,b,c){if(a.removeEventListener)a.removeEventListener(b,c,!1);else if(a.detachEvent)a.detachEvent("on"+b,c);else{var d=a._handlers&&a._handlers[b];if(!d)return;for(var e=0;e<d.length;++e)if(d[e]==c){d.splice(e,1);break}}},Gg=v.signal=function(a,b){var c=a._handlers&&a._handlers[b];if(c)for(var d=Array.prototype.slice.call(arguments,2),e=0;e<c.length;++e)c[e].apply(null,d)},Hg=null,Og=30,Pg=v.Pass={toString:function(){return"CodeMirror.Pass"}},Qg={scroll:!1},Rg={origin:"*mouse"},Sg={origin:"+move"};Tg.prototype.set=function(a,b){clearTimeout(this.id),this.id=setTimeout(b,a)};var Ug=v.countColumn=function(a,b,c,d,e){null==b&&(b=a.search(/[^\s\u00a0]/),-1==b&&(b=a.length));for(var f=d||0,g=e||0;;){var h=a.indexOf(" ",f);if(0>h||h>=b)return g+(b-f);g+=h-f,g+=c-g%c,f=h+1}},Wg=[""],Zg=function(a){a.select()};m?Zg=function(a){a.selectionStart=0,a.selectionEnd=a.value.length}:d&&(Zg=function(a){try{a.select()}catch(b){}});var lh,eh=/[\u00df\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/,fh=v.isWordChar=function(a){return/\w/.test(a)||a>"\x80"&&(a.toUpperCase()!=a.toLowerCase()||eh.test(a))},ih=/[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;lh=document.createRange?function(a,b,c,d){var e=document.createRange();return e.setEnd(d||a,c),e.setStart(a,b),e}:function(a,b,c){var d=document.body.createTextRange();try{d.moveToElementText(a.parentNode)}catch(e){return d}return d.collapse(!0),d.moveEnd("character",c),d.moveStart("character",b),d};var oh=v.contains=function(a,b){if(3==b.nodeType&&(b=b.parentNode),a.contains)return a.contains(b);do if(11==b.nodeType&&(b=b.host),b==a)return!0;while(b=b.parentNode)};d&&11>e&&(ph=function(){try{return document.activeElement}catch(a){return document.body}});var zh,Bh,rh=v.rmClass=function(a,b){var c=a.className,d=qh(b).exec(c);if(d){var e=c.slice(d.index+d[0].length);a.className=c.slice(0,d.index)+(e?d[1]+e:"")}},sh=v.addClass=function(a,b){var c=a.className;qh(b).test(c)||(a.className+=(c?" ":"")+b)},vh=!1,yh=function(){if(d&&9>e)return!1;var a=kh("div");return"draggable"in a||"dragDrop"in a}(),Dh=v.splitLines=3!="\n\nb".split(/\n/).length?function(a){for(var b=0,c=[],d=a.length;d>=b;){var e=a.indexOf("\n",b);-1==e&&(e=a.length);var f=a.slice(b,"\r"==a.charAt(e-1)?e-1:e),g=f.indexOf("\r");-1!=g?(c.push(f.slice(0,g)),b+=g+1):(c.push(f),b=e+1)}return c}:function(a){return a.split(/\r\n?|\n/)},Eh=window.getSelection?function(a){try{return a.selectionStart!=a.selectionEnd}catch(b){return!1}}:function(a){try{var b=a.ownerDocument.selection.createRange()}catch(c){}return b&&b.parentElement()==a?0!=b.compareEndPoints("StartToEnd",b):!1},Fh=function(){var a=kh("div");return"oncopy"in a?!0:(a.setAttribute("oncopy","return;"),"function"==typeof a.oncopy)}(),Gh=null,Ih={3:"Enter",8:"Backspace",9:"Tab",13:"Enter",16:"Shift",17:"Ctrl",18:"Alt",19:"Pause",20:"CapsLock",27:"Esc",32:"Space",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",44:"PrintScrn",45:"Insert",46:"Delete",59:";",61:"=",91:"Mod",92:"Mod",93:"Mod",107:"=",109:"-",127:"Delete",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'",63232:"Up",63233:"Down",63234:"Left",63235:"Right",63272:"Delete",63273:"Home",63275:"End",63276:"PageUp",63277:"PageDown",63302:"Insert"};v.keyNames=Ih,function(){for(var a=0;10>a;a++)Ih[a+48]=Ih[a+96]=String(a);for(var a=65;90>=a;a++)Ih[a]=String.fromCharCode(a);for(var a=1;12>=a;a++)Ih[a+111]=Ih[a+63235]="F"+a}();var Sh,Xh=function(){function c(c){return 247>=c?a.charAt(c):c>=1424&&1524>=c?"R":c>=1536&&1773>=c?b.charAt(c-1536):c>=1774&&2220>=c?"r":c>=8192&&8203>=c?"w":8204==c?"b":"L"}function j(a,b,c){this.level=a,this.from=b,this.to=c}var a="bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN",b="rrrrrrrrrrrr,rNNmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmrrrrrrrnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmNmmmm",d=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,e=/[stwN]/,f=/[LRr]/,g=/[Lb1n]/,h=/[1n]/,i="L";return function(a){if(!d.test(a))return!1;for(var m,b=a.length,k=[],l=0;b>l;++l)k.push(m=c(a.charCodeAt(l)));for(var l=0,n=i;b>l;++l){var m=k[l];"m"==m?k[l]=n:n=m}for(var l=0,o=i;b>l;++l){var m=k[l];"1"==m&&"r"==o?k[l]="n":f.test(m)&&(o=m,"r"==m&&(k[l]="R"))}for(var l=1,n=k[0];b-1>l;++l){var m=k[l];"+"==m&&"1"==n&&"1"==k[l+1]?k[l]="1":","!=m||n!=k[l+1]||"1"!=n&&"n"!=n||(k[l]=n),n=m}for(var l=0;b>l;++l){var m=k[l];if(","==m)k[l]="N";else if("%"==m){for(var p=l+1;b>p&&"%"==k[p];++p);for(var q=l&&"!"==k[l-1]||b>p&&"1"==k[p]?"1":"N",r=l;p>r;++r)k[r]=q;l=p-1}}for(var l=0,o=i;b>l;++l){var m=k[l];"L"==o&&"1"==m?k[l]="L":f.test(m)&&(o=m)}for(var l=0;b>l;++l)if(e.test(k[l])){for(var p=l+1;b>p&&e.test(k[p]);++p);for(var s="L"==(l?k[l-1]:i),t="L"==(b>p?k[p]:i),q=s||t?"L":"R",r=l;p>r;++r)k[r]=q;l=p-1}for(var v,u=[],l=0;b>l;)if(g.test(k[l])){var w=l;for(++l;b>l&&g.test(k[l]);++l);u.push(new j(0,w,l))}else{var x=l,y=u.length;for(++l;b>l&&"L"!=k[l];++l);for(var r=x;l>r;)if(h.test(k[r])){r>x&&u.splice(y,0,new j(1,x,r));var z=r;for(++r;l>r&&h.test(k[r]);++r);u.splice(y,0,new j(2,z,r)),x=r}else++r;l>x&&u.splice(y,0,new j(1,x,l))}return 1==u[0].level&&(v=a.match(/^\s+/))&&(u[0].from=v[0].length,u.unshift(new j(0,0,v[0].length))),1==Yg(u).level&&(v=a.match(/\s+$/))&&(Yg(u).to-=v[0].length,u.push(new j(0,b-v[0].length,b))),u[0].level!=Yg(u).level&&u.push(new j(u[0].level,b,b)),u}}();return v.version="5.0.1",v});


// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

// TODO actually recognize syntax of TypeScript constructs

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
"use strict";

CodeMirror.defineMode("javascript", function(config, parserConfig) {
  var indentUnit = config.indentUnit;
  var statementIndent = parserConfig.statementIndent;
  var jsonldMode = parserConfig.jsonld;
  var jsonMode = parserConfig.json || jsonldMode;
  var isTS = parserConfig.typescript;
  var wordRE = parserConfig.wordCharacters || /[\w$\xa1-\uffff]/;

  // Tokenizer

  var keywords = function(){
    function kw(type) {return {type: type, style: "keyword"};}
    var A = kw("keyword a"), B = kw("keyword b"), C = kw("keyword c");
    var operator = kw("operator"), atom = {type: "atom", style: "atom"};

    var jsKeywords = {
      "if": kw("if"), "while": A, "with": A, "else": B, "do": B, "try": B, "finally": B,
      "return": C, "break": C, "continue": C, "new": C, "delete": C, "throw": C, "debugger": C,
      "var": kw("var"), "const": kw("var"), "let": kw("var"),
      "function": kw("function"), "catch": kw("catch"),
      "for": kw("for"), "switch": kw("switch"), "case": kw("case"), "default": kw("default"),
      "in": operator, "typeof": operator, "instanceof": operator,
      "true": atom, "false": atom, "null": atom, "undefined": atom, "NaN": atom, "Infinity": atom,
      "this": kw("this"), "module": kw("module"), "class": kw("class"), "super": kw("atom"),
      "yield": C, "export": kw("export"), "import": kw("import"), "extends": C
    };

    // Extend the 'normal' keywords with the TypeScript language extensions
    if (isTS) {
      var type = {type: "variable", style: "variable-3"};
      var tsKeywords = {
        // object-like things
        "interface": kw("interface"),
        "extends": kw("extends"),
        "constructor": kw("constructor"),

        // scope modifiers
        "public": kw("public"),
        "private": kw("private"),
        "protected": kw("protected"),
        "static": kw("static"),

        // types
        "string": type, "number": type, "bool": type, "any": type
      };

      for (var attr in tsKeywords) {
        jsKeywords[attr] = tsKeywords[attr];
      }
    }

    return jsKeywords;
  }();

  var isOperatorChar = /[+\-*&%=<>!?|~^]/;
  var isJsonldKeyword = /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;

  function readRegexp(stream) {
    var escaped = false, next, inSet = false;
    while ((next = stream.next()) != null) {
      if (!escaped) {
        if (next == "/" && !inSet) return;
        if (next == "[") inSet = true;
        else if (inSet && next == "]") inSet = false;
      }
      escaped = !escaped && next == "\\";
    }
  }

  // Used as scratch variables to communicate multiple values without
  // consing up tons of objects.
  var type, content;
  function ret(tp, style, cont) {
    type = tp; content = cont;
    return style;
  }
  function tokenBase(stream, state) {
    var ch = stream.next();
    if (ch == '"' || ch == "'") {
      state.tokenize = tokenString(ch);
      return state.tokenize(stream, state);
    } else if (ch == "." && stream.match(/^\d+(?:[eE][+\-]?\d+)?/)) {
      return ret("number", "number");
    } else if (ch == "." && stream.match("..")) {
      return ret("spread", "meta");
    } else if (/[\[\]{}\(\),;\:\.]/.test(ch)) {
      return ret(ch);
    } else if (ch == "=" && stream.eat(">")) {
      return ret("=>", "operator");
    } else if (ch == "0" && stream.eat(/x/i)) {
      stream.eatWhile(/[\da-f]/i);
      return ret("number", "number");
    } else if (/\d/.test(ch)) {
      stream.match(/^\d*(?:\.\d*)?(?:[eE][+\-]?\d+)?/);
      return ret("number", "number");
    } else if (ch == "/") {
      if (stream.eat("*")) {
        state.tokenize = tokenComment;
        return tokenComment(stream, state);
      } else if (stream.eat("/")) {
        stream.skipToEnd();
        return ret("comment", "comment");
      } else if (state.lastType == "operator" || state.lastType == "keyword c" ||
               state.lastType == "sof" || /^[\[{}\(,;:]$/.test(state.lastType)) {
        readRegexp(stream);
        stream.match(/^\b(([gimyu])(?![gimyu]*\2))+\b/);
        return ret("regexp", "string-2");
      } else {
        stream.eatWhile(isOperatorChar);
        return ret("operator", "operator", stream.current());
      }
    } else if (ch == "`") {
      state.tokenize = tokenQuasi;
      return tokenQuasi(stream, state);
    } else if (ch == "#") {
      stream.skipToEnd();
      return ret("error", "error");
    } else if (isOperatorChar.test(ch)) {
      stream.eatWhile(isOperatorChar);
      return ret("operator", "operator", stream.current());
    } else if (wordRE.test(ch)) {
      stream.eatWhile(wordRE);
      var word = stream.current(), known = keywords.propertyIsEnumerable(word) && keywords[word];
      return (known && state.lastType != ".") ? ret(known.type, known.style, word) :
                     ret("variable", "variable", word);
    }
  }

  function tokenString(quote) {
    return function(stream, state) {
      var escaped = false, next;
      if (jsonldMode && stream.peek() == "@" && stream.match(isJsonldKeyword)){
        state.tokenize = tokenBase;
        return ret("jsonld-keyword", "meta");
      }
      while ((next = stream.next()) != null) {
        if (next == quote && !escaped) break;
        escaped = !escaped && next == "\\";
      }
      if (!escaped) state.tokenize = tokenBase;
      return ret("string", "string");
    };
  }

  function tokenComment(stream, state) {
    var maybeEnd = false, ch;
    while (ch = stream.next()) {
      if (ch == "/" && maybeEnd) {
        state.tokenize = tokenBase;
        break;
      }
      maybeEnd = (ch == "*");
    }
    return ret("comment", "comment");
  }

  function tokenQuasi(stream, state) {
    var escaped = false, next;
    while ((next = stream.next()) != null) {
      if (!escaped && (next == "`" || next == "$" && stream.eat("{"))) {
        state.tokenize = tokenBase;
        break;
      }
      escaped = !escaped && next == "\\";
    }
    return ret("quasi", "string-2", stream.current());
  }

  var brackets = "([{}])";
  // This is a crude lookahead trick to try and notice that we're
  // parsing the argument patterns for a fat-arrow function before we
  // actually hit the arrow token. It only works if the arrow is on
  // the same line as the arguments and there's no strange noise
  // (comments) in between. Fallback is to only notice when we hit the
  // arrow, and not declare the arguments as locals for the arrow
  // body.
  function findFatArrow(stream, state) {
    if (state.fatArrowAt) state.fatArrowAt = null;
    var arrow = stream.string.indexOf("=>", stream.start);
    if (arrow < 0) return;

    var depth = 0, sawSomething = false;
    for (var pos = arrow - 1; pos >= 0; --pos) {
      var ch = stream.string.charAt(pos);
      var bracket = brackets.indexOf(ch);
      if (bracket >= 0 && bracket < 3) {
        if (!depth) { ++pos; break; }
        if (--depth == 0) break;
      } else if (bracket >= 3 && bracket < 6) {
        ++depth;
      } else if (wordRE.test(ch)) {
        sawSomething = true;
      } else if (/["'\/]/.test(ch)) {
        return;
      } else if (sawSomething && !depth) {
        ++pos;
        break;
      }
    }
    if (sawSomething && !depth) state.fatArrowAt = pos;
  }

  // Parser

  var atomicTypes = {"atom": true, "number": true, "variable": true, "string": true, "regexp": true, "this": true, "jsonld-keyword": true};

  function JSLexical(indented, column, type, align, prev, info) {
    this.indented = indented;
    this.column = column;
    this.type = type;
    this.prev = prev;
    this.info = info;
    if (align != null) this.align = align;
  }

  function inScope(state, varname) {
    for (var v = state.localVars; v; v = v.next)
      if (v.name == varname) return true;
    for (var cx = state.context; cx; cx = cx.prev) {
      for (var v = cx.vars; v; v = v.next)
        if (v.name == varname) return true;
    }
  }

  function parseJS(state, style, type, content, stream) {
    var cc = state.cc;
    // Communicate our context to the combinators.
    // (Less wasteful than consing up a hundred closures on every call.)
    cx.state = state; cx.stream = stream; cx.marked = null, cx.cc = cc; cx.style = style;

    if (!state.lexical.hasOwnProperty("align"))
      state.lexical.align = true;

    while(true) {
      var combinator = cc.length ? cc.pop() : jsonMode ? expression : statement;
      if (combinator(type, content)) {
        while(cc.length && cc[cc.length - 1].lex)
          cc.pop()();
        if (cx.marked) return cx.marked;
        if (type == "variable" && inScope(state, content)) return "variable-2";
        return style;
      }
    }
  }

  // Combinator utils

  var cx = {state: null, column: null, marked: null, cc: null};
  function pass() {
    for (var i = arguments.length - 1; i >= 0; i--) cx.cc.push(arguments[i]);
  }
  function cont() {
    pass.apply(null, arguments);
    return true;
  }
  function register(varname) {
    function inList(list) {
      for (var v = list; v; v = v.next)
        if (v.name == varname) return true;
      return false;
    }
    var state = cx.state;
    if (state.context) {
      cx.marked = "def";
      if (inList(state.localVars)) return;
      state.localVars = {name: varname, next: state.localVars};
    } else {
      if (inList(state.globalVars)) return;
      if (parserConfig.globalVars)
        state.globalVars = {name: varname, next: state.globalVars};
    }
  }

  // Combinators

  var defaultVars = {name: "this", next: {name: "arguments"}};
  function pushcontext() {
    cx.state.context = {prev: cx.state.context, vars: cx.state.localVars};
    cx.state.localVars = defaultVars;
  }
  function popcontext() {
    cx.state.localVars = cx.state.context.vars;
    cx.state.context = cx.state.context.prev;
  }
  function pushlex(type, info) {
    var result = function() {
      var state = cx.state, indent = state.indented;
      if (state.lexical.type == "stat") indent = state.lexical.indented;
      else for (var outer = state.lexical; outer && outer.type == ")" && outer.align; outer = outer.prev)
        indent = outer.indented;
      state.lexical = new JSLexical(indent, cx.stream.column(), type, null, state.lexical, info);
    };
    result.lex = true;
    return result;
  }
  function poplex() {
    var state = cx.state;
    if (state.lexical.prev) {
      if (state.lexical.type == ")")
        state.indented = state.lexical.indented;
      state.lexical = state.lexical.prev;
    }
  }
  poplex.lex = true;

  function expect(wanted) {
    function exp(type) {
      if (type == wanted) return cont();
      else if (wanted == ";") return pass();
      else return cont(exp);
    };
    return exp;
  }

  function statement(type, value) {
    if (type == "var") return cont(pushlex("vardef", value.length), vardef, expect(";"), poplex);
    if (type == "keyword a") return cont(pushlex("form"), expression, statement, poplex);
    if (type == "keyword b") return cont(pushlex("form"), statement, poplex);
    if (type == "{") return cont(pushlex("}"), block, poplex);
    if (type == ";") return cont();
    if (type == "if") {
      if (cx.state.lexical.info == "else" && cx.state.cc[cx.state.cc.length - 1] == poplex)
        cx.state.cc.pop()();
      return cont(pushlex("form"), expression, statement, poplex, maybeelse);
    }
    if (type == "function") return cont(functiondef);
    if (type == "for") return cont(pushlex("form"), forspec, statement, poplex);
    if (type == "variable") return cont(pushlex("stat"), maybelabel);
    if (type == "switch") return cont(pushlex("form"), expression, pushlex("}", "switch"), expect("{"),
                                      block, poplex, poplex);
    if (type == "case") return cont(expression, expect(":"));
    if (type == "default") return cont(expect(":"));
    if (type == "catch") return cont(pushlex("form"), pushcontext, expect("("), funarg, expect(")"),
                                     statement, poplex, popcontext);
    if (type == "module") return cont(pushlex("form"), pushcontext, afterModule, popcontext, poplex);
    if (type == "class") return cont(pushlex("form"), className, poplex);
    if (type == "export") return cont(pushlex("form"), afterExport, poplex);
    if (type == "import") return cont(pushlex("form"), afterImport, poplex);
    return pass(pushlex("stat"), expression, expect(";"), poplex);
  }
  function expression(type) {
    return expressionInner(type, false);
  }
  function expressionNoComma(type) {
    return expressionInner(type, true);
  }
  function expressionInner(type, noComma) {
    if (cx.state.fatArrowAt == cx.stream.start) {
      var body = noComma ? arrowBodyNoComma : arrowBody;
      if (type == "(") return cont(pushcontext, pushlex(")"), commasep(pattern, ")"), poplex, expect("=>"), body, popcontext);
      else if (type == "variable") return pass(pushcontext, pattern, expect("=>"), body, popcontext);
    }

    var maybeop = noComma ? maybeoperatorNoComma : maybeoperatorComma;
    if (atomicTypes.hasOwnProperty(type)) return cont(maybeop);
    if (type == "function") return cont(functiondef, maybeop);
    if (type == "keyword c") return cont(noComma ? maybeexpressionNoComma : maybeexpression);
    if (type == "(") return cont(pushlex(")"), maybeexpression, comprehension, expect(")"), poplex, maybeop);
    if (type == "operator" || type == "spread") return cont(noComma ? expressionNoComma : expression);
    if (type == "[") return cont(pushlex("]"), arrayLiteral, poplex, maybeop);
    if (type == "{") return contCommasep(objprop, "}", null, maybeop);
    if (type == "quasi") { return pass(quasi, maybeop); }
    return cont();
  }
  function maybeexpression(type) {
    if (type.match(/[;\}\)\],]/)) return pass();
    return pass(expression);
  }
  function maybeexpressionNoComma(type) {
    if (type.match(/[;\}\)\],]/)) return pass();
    return pass(expressionNoComma);
  }

  function maybeoperatorComma(type, value) {
    if (type == ",") return cont(expression);
    return maybeoperatorNoComma(type, value, false);
  }
  function maybeoperatorNoComma(type, value, noComma) {
    var me = noComma == false ? maybeoperatorComma : maybeoperatorNoComma;
    var expr = noComma == false ? expression : expressionNoComma;
    if (type == "=>") return cont(pushcontext, noComma ? arrowBodyNoComma : arrowBody, popcontext);
    if (type == "operator") {
      if (/\+\+|--/.test(value)) return cont(me);
      if (value == "?") return cont(expression, expect(":"), expr);
      return cont(expr);
    }
    if (type == "quasi") { return pass(quasi, me); }
    if (type == ";") return;
    if (type == "(") return contCommasep(expressionNoComma, ")", "call", me);
    if (type == ".") return cont(property, me);
    if (type == "[") return cont(pushlex("]"), maybeexpression, expect("]"), poplex, me);
  }
  function quasi(type, value) {
    if (type != "quasi") return pass();
    if (value.slice(value.length - 2) != "${") return cont(quasi);
    return cont(expression, continueQuasi);
  }
  function continueQuasi(type) {
    if (type == "}") {
      cx.marked = "string-2";
      cx.state.tokenize = tokenQuasi;
      return cont(quasi);
    }
  }
  function arrowBody(type) {
    findFatArrow(cx.stream, cx.state);
    return pass(type == "{" ? statement : expression);
  }
  function arrowBodyNoComma(type) {
    findFatArrow(cx.stream, cx.state);
    return pass(type == "{" ? statement : expressionNoComma);
  }
  function maybelabel(type) {
    if (type == ":") return cont(poplex, statement);
    return pass(maybeoperatorComma, expect(";"), poplex);
  }
  function property(type) {
    if (type == "variable") {cx.marked = "property"; return cont();}
  }
  function objprop(type, value) {
    if (type == "variable" || cx.style == "keyword") {
      cx.marked = "property";
      if (value == "get" || value == "set") return cont(getterSetter);
      return cont(afterprop);
    } else if (type == "number" || type == "string") {
      cx.marked = jsonldMode ? "property" : (cx.style + " property");
      return cont(afterprop);
    } else if (type == "jsonld-keyword") {
      return cont(afterprop);
    } else if (type == "[") {
      return cont(expression, expect("]"), afterprop);
    }
  }
  function getterSetter(type) {
    if (type != "variable") return pass(afterprop);
    cx.marked = "property";
    return cont(functiondef);
  }
  function afterprop(type) {
    if (type == ":") return cont(expressionNoComma);
    if (type == "(") return pass(functiondef);
  }
  function commasep(what, end) {
    function proceed(type) {
      if (type == ",") {
        var lex = cx.state.lexical;
        if (lex.info == "call") lex.pos = (lex.pos || 0) + 1;
        return cont(what, proceed);
      }
      if (type == end) return cont();
      return cont(expect(end));
    }
    return function(type) {
      if (type == end) return cont();
      return pass(what, proceed);
    };
  }
  function contCommasep(what, end, info) {
    for (var i = 3; i < arguments.length; i++)
      cx.cc.push(arguments[i]);
    return cont(pushlex(end, info), commasep(what, end), poplex);
  }
  function block(type) {
    if (type == "}") return cont();
    return pass(statement, block);
  }
  function maybetype(type) {
    if (isTS && type == ":") return cont(typedef);
  }
  function typedef(type) {
    if (type == "variable"){cx.marked = "variable-3"; return cont();}
  }
  function vardef() {
    return pass(pattern, maybetype, maybeAssign, vardefCont);
  }
  function pattern(type, value) {
    if (type == "variable") { register(value); return cont(); }
    if (type == "[") return contCommasep(pattern, "]");
    if (type == "{") return contCommasep(proppattern, "}");
  }
  function proppattern(type, value) {
    if (type == "variable" && !cx.stream.match(/^\s*:/, false)) {
      register(value);
      return cont(maybeAssign);
    }
    if (type == "variable") cx.marked = "property";
    return cont(expect(":"), pattern, maybeAssign);
  }
  function maybeAssign(_type, value) {
    if (value == "=") return cont(expressionNoComma);
  }
  function vardefCont(type) {
    if (type == ",") return cont(vardef);
  }
  function maybeelse(type, value) {
    if (type == "keyword b" && value == "else") return cont(pushlex("form", "else"), statement, poplex);
  }
  function forspec(type) {
    if (type == "(") return cont(pushlex(")"), forspec1, expect(")"), poplex);
  }
  function forspec1(type) {
    if (type == "var") return cont(vardef, expect(";"), forspec2);
    if (type == ";") return cont(forspec2);
    if (type == "variable") return cont(formaybeinof);
    return pass(expression, expect(";"), forspec2);
  }
  function formaybeinof(_type, value) {
    if (value == "in" || value == "of") { cx.marked = "keyword"; return cont(expression); }
    return cont(maybeoperatorComma, forspec2);
  }
  function forspec2(type, value) {
    if (type == ";") return cont(forspec3);
    if (value == "in" || value == "of") { cx.marked = "keyword"; return cont(expression); }
    return pass(expression, expect(";"), forspec3);
  }
  function forspec3(type) {
    if (type != ")") cont(expression);
  }
  function functiondef(type, value) {
    if (value == "*") {cx.marked = "keyword"; return cont(functiondef);}
    if (type == "variable") {register(value); return cont(functiondef);}
    if (type == "(") return cont(pushcontext, pushlex(")"), commasep(funarg, ")"), poplex, statement, popcontext);
  }
  function funarg(type) {
    if (type == "spread") return cont(funarg);
    return pass(pattern, maybetype);
  }
  function className(type, value) {
    if (type == "variable") {register(value); return cont(classNameAfter);}
  }
  function classNameAfter(type, value) {
    if (value == "extends") return cont(expression, classNameAfter);
    if (type == "{") return cont(pushlex("}"), classBody, poplex);
  }
  function classBody(type, value) {
    if (type == "variable" || cx.style == "keyword") {
      cx.marked = "property";
      if (value == "get" || value == "set") return cont(classGetterSetter, functiondef, classBody);
      return cont(functiondef, classBody);
    }
    if (value == "*") {
      cx.marked = "keyword";
      return cont(classBody);
    }
    if (type == ";") return cont(classBody);
    if (type == "}") return cont();
  }
  function classGetterSetter(type) {
    if (type != "variable") return pass();
    cx.marked = "property";
    return cont();
  }
  function afterModule(type, value) {
    if (type == "string") return cont(statement);
    if (type == "variable") { register(value); return cont(maybeFrom); }
  }
  function afterExport(_type, value) {
    if (value == "*") { cx.marked = "keyword"; return cont(maybeFrom, expect(";")); }
    if (value == "default") { cx.marked = "keyword"; return cont(expression, expect(";")); }
    return pass(statement);
  }
  function afterImport(type) {
    if (type == "string") return cont();
    return pass(importSpec, maybeFrom);
  }
  function importSpec(type, value) {
    if (type == "{") return contCommasep(importSpec, "}");
    if (type == "variable") register(value);
    return cont();
  }
  function maybeFrom(_type, value) {
    if (value == "from") { cx.marked = "keyword"; return cont(expression); }
  }
  function arrayLiteral(type) {
    if (type == "]") return cont();
    return pass(expressionNoComma, maybeArrayComprehension);
  }
  function maybeArrayComprehension(type) {
    if (type == "for") return pass(comprehension, expect("]"));
    if (type == ",") return cont(commasep(maybeexpressionNoComma, "]"));
    return pass(commasep(expressionNoComma, "]"));
  }
  function comprehension(type) {
    if (type == "for") return cont(forspec, comprehension);
    if (type == "if") return cont(expression, comprehension);
  }

  function isContinuedStatement(state, textAfter) {
    return state.lastType == "operator" || state.lastType == "," ||
      isOperatorChar.test(textAfter.charAt(0)) ||
      /[,.]/.test(textAfter.charAt(0));
  }

  // Interface

  return {
    startState: function(basecolumn) {
      var state = {
        tokenize: tokenBase,
        lastType: "sof",
        cc: [],
        lexical: new JSLexical((basecolumn || 0) - indentUnit, 0, "block", false),
        localVars: parserConfig.localVars,
        context: parserConfig.localVars && {vars: parserConfig.localVars},
        indented: 0
      };
      if (parserConfig.globalVars && typeof parserConfig.globalVars == "object")
        state.globalVars = parserConfig.globalVars;
      return state;
    },

    token: function(stream, state) {
      if (stream.sol()) {
        if (!state.lexical.hasOwnProperty("align"))
          state.lexical.align = false;
        state.indented = stream.indentation();
        findFatArrow(stream, state);
      }
      if (state.tokenize != tokenComment && stream.eatSpace()) return null;
      var style = state.tokenize(stream, state);
      if (type == "comment") return style;
      state.lastType = type == "operator" && (content == "++" || content == "--") ? "incdec" : type;
      return parseJS(state, style, type, content, stream);
    },

    indent: function(state, textAfter) {
      if (state.tokenize == tokenComment) return CodeMirror.Pass;
      if (state.tokenize != tokenBase) return 0;
      var firstChar = textAfter && textAfter.charAt(0), lexical = state.lexical;
      // Kludge to prevent 'maybelse' from blocking lexical scope pops
      if (!/^\s*else\b/.test(textAfter)) for (var i = state.cc.length - 1; i >= 0; --i) {
        var c = state.cc[i];
        if (c == poplex) lexical = lexical.prev;
        else if (c != maybeelse) break;
      }
      if (lexical.type == "stat" && firstChar == "}") lexical = lexical.prev;
      if (statementIndent && lexical.type == ")" && lexical.prev.type == "stat")
        lexical = lexical.prev;
      var type = lexical.type, closing = firstChar == type;

      if (type == "vardef") return lexical.indented + (state.lastType == "operator" || state.lastType == "," ? lexical.info + 1 : 0);
      else if (type == "form" && firstChar == "{") return lexical.indented;
      else if (type == "form") return lexical.indented + indentUnit;
      else if (type == "stat")
        return lexical.indented + (isContinuedStatement(state, textAfter) ? statementIndent || indentUnit : 0);
      else if (lexical.info == "switch" && !closing && parserConfig.doubleIndentSwitch != false)
        return lexical.indented + (/^(?:case|default)\b/.test(textAfter) ? indentUnit : 2 * indentUnit);
      else if (lexical.align) return lexical.column + (closing ? 0 : 1);
      else return lexical.indented + (closing ? 0 : indentUnit);
    },

    electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
    blockCommentStart: jsonMode ? null : "/*",
    blockCommentEnd: jsonMode ? null : "*/",
    lineComment: jsonMode ? null : "//",
    fold: "brace",

    helperType: jsonMode ? "json" : "javascript",
    jsonldMode: jsonldMode,
    jsonMode: jsonMode
  };
});

CodeMirror.registerHelper("wordChars", "javascript", /[\w$]/);

CodeMirror.defineMIME("text/javascript", "javascript");
CodeMirror.defineMIME("text/ecmascript", "javascript");
CodeMirror.defineMIME("application/javascript", "javascript");
CodeMirror.defineMIME("application/x-javascript", "javascript");
CodeMirror.defineMIME("application/ecmascript", "javascript");
CodeMirror.defineMIME("application/json", {name: "javascript", json: true});
CodeMirror.defineMIME("application/x-json", {name: "javascript", json: true});
CodeMirror.defineMIME("application/ld+json", {name: "javascript", jsonld: true});
CodeMirror.defineMIME("text/typescript", { name: "javascript", typescript: true });
CodeMirror.defineMIME("application/typescript", { name: "javascript", typescript: true });

});




// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
  "use strict";

  function Bar(cls, orientation, scroll) {
    this.orientation = orientation;
    this.scroll = scroll;
    this.screen = this.total = this.size = 1;
    this.pos = 0;

    this.node = document.createElement("div");
    this.node.className = cls + "-" + orientation;
    this.inner = this.node.appendChild(document.createElement("div"));

    var self = this;
    CodeMirror.on(this.inner, "mousedown", function(e) {
      if (e.which != 1) return;
      CodeMirror.e_preventDefault(e);
      var axis = self.orientation == "horizontal" ? "pageX" : "pageY";
      var start = e[axis], startpos = self.pos;
      function done() {
        CodeMirror.off(document, "mousemove", move);
        CodeMirror.off(document, "mouseup", done);
      }
      function move(e) {
        if (e.which != 1) return done();
        self.moveTo(startpos + (e[axis] - start) * (self.total / self.size));
      }
      CodeMirror.on(document, "mousemove", move);
      CodeMirror.on(document, "mouseup", done);
    });

    CodeMirror.on(this.node, "click", function(e) {
      CodeMirror.e_preventDefault(e);
      var innerBox = self.inner.getBoundingClientRect(), where;
      if (self.orientation == "horizontal")
        where = e.clientX < innerBox.left ? -1 : e.clientX > innerBox.right ? 1 : 0;
      else
        where = e.clientY < innerBox.top ? -1 : e.clientY > innerBox.bottom ? 1 : 0;
      self.moveTo(self.pos + where * self.screen);
    });

    function onWheel(e) {
      var moved = CodeMirror.wheelEventPixels(e)[self.orientation == "horizontal" ? "x" : "y"];
      var oldPos = self.pos;
      self.moveTo(self.pos + moved);
      if (self.pos != oldPos) CodeMirror.e_preventDefault(e);
    }
    CodeMirror.on(this.node, "mousewheel", onWheel);
    CodeMirror.on(this.node, "DOMMouseScroll", onWheel);
  }

  Bar.prototype.moveTo = function(pos, update) {
    if (pos < 0) pos = 0;
    if (pos > this.total - this.screen) pos = this.total - this.screen;
    if (pos == this.pos) return;
    this.pos = pos;
    this.inner.style[this.orientation == "horizontal" ? "left" : "top"] =
      (pos * (this.size / this.total)) + "px";
    if (update !== false) this.scroll(pos, this.orientation);
  };

  var minButtonSize = 10;

  Bar.prototype.update = function(scrollSize, clientSize, barSize) {
    this.screen = clientSize;
    this.total = scrollSize;
    this.size = barSize;

    var buttonSize = this.screen * (this.size / this.total);
    if (buttonSize < minButtonSize) {
      this.size -= minButtonSize - buttonSize;
      buttonSize = minButtonSize;
    }
    this.inner.style[this.orientation == "horizontal" ? "width" : "height"] =
      buttonSize + "px";
    this.inner.style[this.orientation == "horizontal" ? "left" : "top"] =
      this.pos * (this.size / this.total) + "px";
  };

  function SimpleScrollbars(cls, place, scroll) {
    this.addClass = cls;
    this.horiz = new Bar(cls, "horizontal", scroll);
    place(this.horiz.node);
    this.vert = new Bar(cls, "vertical", scroll);
    place(this.vert.node);
    this.width = null;
  }

  SimpleScrollbars.prototype.update = function(measure) {
    if (this.width == null) {
      var style = window.getComputedStyle ? window.getComputedStyle(this.horiz.node) : this.horiz.node.currentStyle;
      if (style) this.width = parseInt(style.height);
    }
    var width = this.width || 0;

    var needsH = measure.scrollWidth > measure.clientWidth + 1;
    var needsV = measure.scrollHeight > measure.clientHeight + 1;
    this.vert.node.style.display = needsV ? "block" : "none";
    this.horiz.node.style.display = needsH ? "block" : "none";

    if (needsV) {
      this.vert.update(measure.scrollHeight, measure.clientHeight,
                       measure.viewHeight - (needsH ? width : 0));
      this.vert.node.style.display = "block";
      this.vert.node.style.bottom = needsH ? width + "px" : "0";
    }
    if (needsH) {
      this.horiz.update(measure.scrollWidth, measure.clientWidth,
                        measure.viewWidth - (needsV ? width : 0) - measure.barLeft);
      this.horiz.node.style.right = needsV ? width + "px" : "0";
      this.horiz.node.style.left = measure.barLeft + "px";
    }

    return {right: needsV ? width : 0, bottom: needsH ? width : 0};
  };

  SimpleScrollbars.prototype.setScrollTop = function(pos) {
    this.vert.moveTo(pos, false);
  };

  SimpleScrollbars.prototype.setScrollLeft = function(pos) {
    this.horiz.moveTo(pos, false);
  };

  SimpleScrollbars.prototype.clear = function() {
    var parent = this.horiz.node.parentNode;
    parent.removeChild(this.horiz.node);
    parent.removeChild(this.vert.node);
  };

  CodeMirror.scrollbarModel.simple = function(place, scroll) {
    return new SimpleScrollbars("CodeMirror-simplescroll", place, scroll);
  };
  CodeMirror.scrollbarModel.overlay = function(place, scroll) {
    return new SimpleScrollbars("CodeMirror-overlayscroll", place, scroll);
  };
});



// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"), require("../javascript/javascript"), require("../css/css"), require("../htmlmixed/htmlmixed"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror", "../javascript/javascript", "../css/css", "../htmlmixed/htmlmixed"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
"use strict";

CodeMirror.defineMode('jade', function (config) {
  // token types
  var KEYWORD = 'keyword';
  var DOCTYPE = 'meta';
  var ID = 'builtin';
  var CLASS = 'qualifier';

  var ATTRS_NEST = {
    '{': '}',
    '(': ')',
    '[': ']'
  };

  var jsMode = CodeMirror.getMode(config, 'javascript');

  function State() {
    this.javaScriptLine = false;
    this.javaScriptLineExcludesColon = false;

    this.javaScriptArguments = false;
    this.javaScriptArgumentsDepth = 0;

    this.isInterpolating = false;
    this.interpolationNesting = 0;

    this.jsState = jsMode.startState();

    this.restOfLine = '';

    this.isIncludeFiltered = false;
    this.isEach = false;

    this.lastTag = '';
    this.scriptType = '';

    // Attributes Mode
    this.isAttrs = false;
    this.attrsNest = [];
    this.inAttributeName = true;
    this.attributeIsType = false;
    this.attrValue = '';

    // Indented Mode
    this.indentOf = Infinity;
    this.indentToken = '';

    this.innerMode = null;
    this.innerState = null;

    this.innerModeForLine = false;
  }
  /**
   * Safely copy a state
   *
   * @return {State}
   */
  State.prototype.copy = function () {
    var res = new State();
    res.javaScriptLine = this.javaScriptLine;
    res.javaScriptLineExcludesColon = this.javaScriptLineExcludesColon;
    res.javaScriptArguments = this.javaScriptArguments;
    res.javaScriptArgumentsDepth = this.javaScriptArgumentsDepth;
    res.isInterpolating = this.isInterpolating;
    res.interpolationNesting = this.intpolationNesting;

    res.jsState = CodeMirror.copyState(jsMode, this.jsState);

    res.innerMode = this.innerMode;
    if (this.innerMode && this.innerState) {
      res.innerState = CodeMirror.copyState(this.innerMode, this.innerState);
    }

    res.restOfLine = this.restOfLine;

    res.isIncludeFiltered = this.isIncludeFiltered;
    res.isEach = this.isEach;
    res.lastTag = this.lastTag;
    res.scriptType = this.scriptType;
    res.isAttrs = this.isAttrs;
    res.attrsNest = this.attrsNest.slice();
    res.inAttributeName = this.inAttributeName;
    res.attributeIsType = this.attributeIsType;
    res.attrValue = this.attrValue;
    res.indentOf = this.indentOf;
    res.indentToken = this.indentToken;

    res.innerModeForLine = this.innerModeForLine;

    return res;
  };

  function javaScript(stream, state) {
    if (stream.sol()) {
      // if javaScriptLine was set at end of line, ignore it
      state.javaScriptLine = false;
      state.javaScriptLineExcludesColon = false;
    }
    if (state.javaScriptLine) {
      if (state.javaScriptLineExcludesColon && stream.peek() === ':') {
        state.javaScriptLine = false;
        state.javaScriptLineExcludesColon = false;
        return;
      }
      var tok = jsMode.token(stream, state.jsState);
      if (stream.eol()) state.javaScriptLine = false;
      return tok || true;
    }
  }
  function javaScriptArguments(stream, state) {
    if (state.javaScriptArguments) {
      if (state.javaScriptArgumentsDepth === 0 && stream.peek() !== '(') {
        state.javaScriptArguments = false;
        return;
      }
      if (stream.peek() === '(') {
        state.javaScriptArgumentsDepth++;
      } else if (stream.peek() === ')') {
        state.javaScriptArgumentsDepth--;
      }
      if (state.javaScriptArgumentsDepth === 0) {
        state.javaScriptArguments = false;
        return;
      }

      var tok = jsMode.token(stream, state.jsState);
      return tok || true;
    }
  }

  function yieldStatement(stream) {
    if (stream.match(/^yield\b/)) {
        return 'keyword';
    }
  }

  function doctype(stream) {
    if (stream.match(/^(?:doctype) *([^\n]+)?/)) {
        return DOCTYPE;
    }
  }

  function interpolation(stream, state) {
    if (stream.match('#{')) {
      state.isInterpolating = true;
      state.interpolationNesting = 0;
      return 'punctuation';
    }
  }

  function interpolationContinued(stream, state) {
    if (state.isInterpolating) {
      if (stream.peek() === '}') {
        state.interpolationNesting--;
        if (state.interpolationNesting < 0) {
          stream.next();
          state.isInterpolating = false;
          return 'puncutation';
        }
      } else if (stream.peek() === '{') {
        state.interpolationNesting++;
      }
      return jsMode.token(stream, state.jsState) || true;
    }
  }

  function caseStatement(stream, state) {
    if (stream.match(/^case\b/)) {
      state.javaScriptLine = true;
      return KEYWORD;
    }
  }

  function when(stream, state) {
    if (stream.match(/^when\b/)) {
      state.javaScriptLine = true;
      state.javaScriptLineExcludesColon = true;
      return KEYWORD;
    }
  }

  function defaultStatement(stream) {
    if (stream.match(/^default\b/)) {
      return KEYWORD;
    }
  }

  function extendsStatement(stream, state) {
    if (stream.match(/^extends?\b/)) {
      state.restOfLine = 'string';
      return KEYWORD;
    }
  }

  function append(stream, state) {
    if (stream.match(/^append\b/)) {
      state.restOfLine = 'variable';
      return KEYWORD;
    }
  }
  function prepend(stream, state) {
    if (stream.match(/^prepend\b/)) {
      state.restOfLine = 'variable';
      return KEYWORD;
    }
  }
  function block(stream, state) {
    if (stream.match(/^block\b *(?:(prepend|append)\b)?/)) {
      state.restOfLine = 'variable';
      return KEYWORD;
    }
  }

  function include(stream, state) {
    if (stream.match(/^include\b/)) {
      state.restOfLine = 'string';
      return KEYWORD;
    }
  }

  function includeFiltered(stream, state) {
    if (stream.match(/^include:([a-zA-Z0-9\-]+)/, false) && stream.match('include')) {
      state.isIncludeFiltered = true;
      return KEYWORD;
    }
  }

  function includeFilteredContinued(stream, state) {
    if (state.isIncludeFiltered) {
      var tok = filter(stream, state);
      state.isIncludeFiltered = false;
      state.restOfLine = 'string';
      return tok;
    }
  }

  function mixin(stream, state) {
    if (stream.match(/^mixin\b/)) {
      state.javaScriptLine = true;
      return KEYWORD;
    }
  }

  function call(stream, state) {
    if (stream.match(/^\+([-\w]+)/)) {
      if (!stream.match(/^\( *[-\w]+ *=/, false)) {
        state.javaScriptArguments = true;
        state.javaScriptArgumentsDepth = 0;
      }
      return 'variable';
    }
    if (stream.match(/^\+#{/, false)) {
      stream.next();
      state.mixinCallAfter = true;
      return interpolation(stream, state);
    }
  }
  function callArguments(stream, state) {
    if (state.mixinCallAfter) {
      state.mixinCallAfter = false;
      if (!stream.match(/^\( *[-\w]+ *=/, false)) {
        state.javaScriptArguments = true;
        state.javaScriptArgumentsDepth = 0;
      }
      return true;
    }
  }

  function conditional(stream, state) {
    if (stream.match(/^(if|unless|else if|else)\b/)) {
      state.javaScriptLine = true;
      return KEYWORD;
    }
  }

  function each(stream, state) {
    if (stream.match(/^(- *)?(each|for)\b/)) {
      state.isEach = true;
      return KEYWORD;
    }
  }
  function eachContinued(stream, state) {
    if (state.isEach) {
      if (stream.match(/^ in\b/)) {
        state.javaScriptLine = true;
        state.isEach = false;
        return KEYWORD;
      } else if (stream.sol() || stream.eol()) {
        state.isEach = false;
      } else if (stream.next()) {
        while (!stream.match(/^ in\b/, false) && stream.next());
        return 'variable';
      }
    }
  }

  function whileStatement(stream, state) {
    if (stream.match(/^while\b/)) {
      state.javaScriptLine = true;
      return KEYWORD;
    }
  }

  function tag(stream, state) {
    var captures;
    if (captures = stream.match(/^(\w(?:[-:\w]*\w)?)\/?/)) {
      state.lastTag = captures[1].toLowerCase();
      if (state.lastTag === 'script') {
        state.scriptType = 'application/javascript';
      }
      return 'tag';
    }
  }

  function filter(stream, state) {
    if (stream.match(/^:([\w\-]+)/)) {
      var innerMode;
      if (config && config.innerModes) {
        innerMode = config.innerModes(stream.current().substring(1));
      }
      if (!innerMode) {
        innerMode = stream.current().substring(1);
      }
      if (typeof innerMode === 'string') {
        innerMode = CodeMirror.getMode(config, innerMode);
      }
      setInnerMode(stream, state, innerMode);
      return 'atom';
    }
  }

  function code(stream, state) {
    if (stream.match(/^(!?=|-)/)) {
      state.javaScriptLine = true;
      return 'punctuation';
    }
  }

  function id(stream) {
    if (stream.match(/^#([\w-]+)/)) {
      return ID;
    }
  }

  function className(stream) {
    if (stream.match(/^\.([\w-]+)/)) {
      return CLASS;
    }
  }

  function attrs(stream, state) {
    if (stream.peek() == '(') {
      stream.next();
      state.isAttrs = true;
      state.attrsNest = [];
      state.inAttributeName = true;
      state.attrValue = '';
      state.attributeIsType = false;
      return 'punctuation';
    }
  }

  function attrsContinued(stream, state) {
    if (state.isAttrs) {
      if (ATTRS_NEST[stream.peek()]) {
        state.attrsNest.push(ATTRS_NEST[stream.peek()]);
      }
      if (state.attrsNest[state.attrsNest.length - 1] === stream.peek()) {
        state.attrsNest.pop();
      } else  if (stream.eat(')')) {
        state.isAttrs = false;
        return 'punctuation';
      }
      if (state.inAttributeName && stream.match(/^[^=,\)!]+/)) {
        if (stream.peek() === '=' || stream.peek() === '!') {
          state.inAttributeName = false;
          state.jsState = jsMode.startState();
          if (state.lastTag === 'script' && stream.current().trim().toLowerCase() === 'type') {
            state.attributeIsType = true;
          } else {
            state.attributeIsType = false;
          }
        }
        return 'attribute';
      }

      var tok = jsMode.token(stream, state.jsState);
      if (state.attributeIsType && tok === 'string') {
        state.scriptType = stream.current().toString();
      }
      if (state.attrsNest.length === 0 && (tok === 'string' || tok === 'variable' || tok === 'keyword')) {
        try {
          Function('', 'var x ' + state.attrValue.replace(/,\s*$/, '').replace(/^!/, ''));
          state.inAttributeName = true;
          state.attrValue = '';
          stream.backUp(stream.current().length);
          return attrsContinued(stream, state);
        } catch (ex) {
          //not the end of an attribute
        }
      }
      state.attrValue += stream.current();
      return tok || true;
    }
  }

  function attributesBlock(stream, state) {
    if (stream.match(/^&attributes\b/)) {
      state.javaScriptArguments = true;
      state.javaScriptArgumentsDepth = 0;
      return 'keyword';
    }
  }

  function indent(stream) {
    if (stream.sol() && stream.eatSpace()) {
      return 'indent';
    }
  }

  function comment(stream, state) {
    if (stream.match(/^ *\/\/(-)?([^\n]*)/)) {
      state.indentOf = stream.indentation();
      state.indentToken = 'comment';
      return 'comment';
    }
  }

  function colon(stream) {
    if (stream.match(/^: */)) {
      return 'colon';
    }
  }

  function text(stream, state) {
    if (stream.match(/^(?:\| ?| )([^\n]+)/)) {
      return 'string';
    }
    if (stream.match(/^(<[^\n]*)/, false)) {
      // html string
      setInnerMode(stream, state, 'htmlmixed');
      state.innerModeForLine = true;
      return innerMode(stream, state, true);
    }
  }

  function dot(stream, state) {
    if (stream.eat('.')) {
      var innerMode = null;
      if (state.lastTag === 'script' && state.scriptType.toLowerCase().indexOf('javascript') != -1) {
        innerMode = state.scriptType.toLowerCase().replace(/"|'/g, '');
      } else if (state.lastTag === 'style') {
        innerMode = 'css';
      }
      setInnerMode(stream, state, innerMode);
      return 'dot';
    }
  }

  function fail(stream) {
    stream.next();
    return null;
  }


  function setInnerMode(stream, state, mode) {
    mode = CodeMirror.mimeModes[mode] || mode;
    mode = config.innerModes ? config.innerModes(mode) || mode : mode;
    mode = CodeMirror.mimeModes[mode] || mode;
    mode = CodeMirror.getMode(config, mode);
    state.indentOf = stream.indentation();

    if (mode && mode.name !== 'null') {
      state.innerMode = mode;
    } else {
      state.indentToken = 'string';
    }
  }
  function innerMode(stream, state, force) {
    if (stream.indentation() > state.indentOf || (state.innerModeForLine && !stream.sol()) || force) {
      if (state.innerMode) {
        if (!state.innerState) {
          state.innerState = state.innerMode.startState ? state.innerMode.startState(stream.indentation()) : {};
        }
        return stream.hideFirstChars(state.indentOf + 2, function () {
          return state.innerMode.token(stream, state.innerState) || true;
        });
      } else {
        stream.skipToEnd();
        return state.indentToken;
      }
    } else if (stream.sol()) {
      state.indentOf = Infinity;
      state.indentToken = null;
      state.innerMode = null;
      state.innerState = null;
    }
  }
  function restOfLine(stream, state) {
    if (stream.sol()) {
      // if restOfLine was set at end of line, ignore it
      state.restOfLine = '';
    }
    if (state.restOfLine) {
      stream.skipToEnd();
      var tok = state.restOfLine;
      state.restOfLine = '';
      return tok;
    }
  }


  function startState() {
    return new State();
  }
  function copyState(state) {
    return state.copy();
  }
  /**
   * Get the next token in the stream
   *
   * @param {Stream} stream
   * @param {State} state
   */
  function nextToken(stream, state) {
    var tok = innerMode(stream, state)
      || restOfLine(stream, state)
      || interpolationContinued(stream, state)
      || includeFilteredContinued(stream, state)
      || eachContinued(stream, state)
      || attrsContinued(stream, state)
      || javaScript(stream, state)
      || javaScriptArguments(stream, state)
      || callArguments(stream, state)

      || yieldStatement(stream, state)
      || doctype(stream, state)
      || interpolation(stream, state)
      || caseStatement(stream, state)
      || when(stream, state)
      || defaultStatement(stream, state)
      || extendsStatement(stream, state)
      || append(stream, state)
      || prepend(stream, state)
      || block(stream, state)
      || include(stream, state)
      || includeFiltered(stream, state)
      || mixin(stream, state)
      || call(stream, state)
      || conditional(stream, state)
      || each(stream, state)
      || whileStatement(stream, state)
      || tag(stream, state)
      || filter(stream, state)
      || code(stream, state)
      || id(stream, state)
      || className(stream, state)
      || attrs(stream, state)
      || attributesBlock(stream, state)
      || indent(stream, state)
      || text(stream, state)
      || comment(stream, state)
      || colon(stream, state)
      || dot(stream, state)
      || fail(stream, state);

    return tok === true ? null : tok;
  }
  return {
    startState: startState,
    copyState: copyState,
    token: nextToken
  };
});

CodeMirror.defineMIME('text/x-jade', 'jade');

});




// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
"use strict";

CodeMirror.defineMode("sass", function(config) {
  function tokenRegexp(words) {
    return new RegExp("^" + words.join("|"));
  }

  var keywords = ["true", "false", "null", "auto"];
  var keywordsRegexp = new RegExp("^" + keywords.join("|"));

  var operators = ["\\(", "\\)", "=", ">", "<", "==", ">=", "<=", "\\+", "-",
                   "\\!=", "/", "\\*", "%", "and", "or", "not", ";","\\{","\\}",":"];
  var opRegexp = tokenRegexp(operators);

  var pseudoElementsRegexp = /^::?[a-zA-Z_][\w\-]*/;

  function urlTokens(stream, state) {
    var ch = stream.peek();

    if (ch === ")") {
      stream.next();
      state.tokenizer = tokenBase;
      return "operator";
    } else if (ch === "(") {
      stream.next();
      stream.eatSpace();

      return "operator";
    } else if (ch === "'" || ch === '"') {
      state.tokenizer = buildStringTokenizer(stream.next());
      return "string";
    } else {
      state.tokenizer = buildStringTokenizer(")", false);
      return "string";
    }
  }
  function comment(indentation, multiLine) {
    return function(stream, state) {
      if (stream.sol() && stream.indentation() <= indentation) {
        state.tokenizer = tokenBase;
        return tokenBase(stream, state);
      }

      if (multiLine && stream.skipTo("*/")) {
        stream.next();
        stream.next();
        state.tokenizer = tokenBase;
      } else {
        stream.skipToEnd();
      }

      return "comment";
    };
  }

  function buildStringTokenizer(quote, greedy) {
    if (greedy == null) { greedy = true; }

    function stringTokenizer(stream, state) {
      var nextChar = stream.next();
      var peekChar = stream.peek();
      var previousChar = stream.string.charAt(stream.pos-2);

      var endingString = ((nextChar !== "\\" && peekChar === quote) || (nextChar === quote && previousChar !== "\\"));

      if (endingString) {
        if (nextChar !== quote && greedy) { stream.next(); }
        state.tokenizer = tokenBase;
        return "string";
      } else if (nextChar === "#" && peekChar === "{") {
        state.tokenizer = buildInterpolationTokenizer(stringTokenizer);
        stream.next();
        return "operator";
      } else {
        return "string";
      }
    }

    return stringTokenizer;
  }

  function buildInterpolationTokenizer(currentTokenizer) {
    return function(stream, state) {
      if (stream.peek() === "}") {
        stream.next();
        state.tokenizer = currentTokenizer;
        return "operator";
      } else {
        return tokenBase(stream, state);
      }
    };
  }

  function indent(state) {
    if (state.indentCount == 0) {
      state.indentCount++;
      var lastScopeOffset = state.scopes[0].offset;
      var currentOffset = lastScopeOffset + config.indentUnit;
      state.scopes.unshift({ offset:currentOffset });
    }
  }

  function dedent(state) {
    if (state.scopes.length == 1) return;

    state.scopes.shift();
  }

  function tokenBase(stream, state) {
    var ch = stream.peek();

    // Comment
    if (stream.match("/*")) {
      state.tokenizer = comment(stream.indentation(), true);
      return state.tokenizer(stream, state);
    }
    if (stream.match("//")) {
      state.tokenizer = comment(stream.indentation(), false);
      return state.tokenizer(stream, state);
    }

    // Interpolation
    if (stream.match("#{")) {
      state.tokenizer = buildInterpolationTokenizer(tokenBase);
      return "operator";
    }

    // Strings
    if (ch === '"' || ch === "'") {
      stream.next();
      state.tokenizer = buildStringTokenizer(ch);
      return "string";
    }

    if(!state.cursorHalf){// state.cursorHalf === 0
    // first half i.e. before : for key-value pairs
    // including selectors

      if (ch === ".") {
        stream.next();
        if (stream.match(/^[\w-]+/)) {
          indent(state);
          return "atom";
        } else if (stream.peek() === "#") {
          indent(state);
          return "atom";
        }
      }

      if (ch === "#") {
        stream.next();
        // ID selectors
        if (stream.match(/^[\w-]+/)) {
          indent(state);
          return "atom";
        }
        if (stream.peek() === "#") {
          indent(state);
          return "atom";
        }
      }

      // Variables
      if (ch === "$") {
        stream.next();
        stream.eatWhile(/[\w-]/);
        return "variable-2";
      }

      // Numbers
      if (stream.match(/^-?[0-9\.]+/))
        return "number";

      // Units
      if (stream.match(/^(px|em|in)\b/))
        return "unit";

      if (stream.match(keywordsRegexp))
        return "keyword";

      if (stream.match(/^url/) && stream.peek() === "(") {
        state.tokenizer = urlTokens;
        return "atom";
      }

      if (ch === "=") {
        // Match shortcut mixin definition
        if (stream.match(/^=[\w-]+/)) {
          indent(state);
          return "meta";
        }
      }

      if (ch === "+") {
        // Match shortcut mixin definition
        if (stream.match(/^\+[\w-]+/)){
          return "variable-3";
        }
      }

      if(ch === "@"){
        if(stream.match(/@extend/)){
          if(!stream.match(/\s*[\w]/))
            dedent(state);
        }
      }


      // Indent Directives
      if (stream.match(/^@(else if|if|media|else|for|each|while|mixin|function)/)) {
        indent(state);
        return "meta";
      }

      // Other Directives
      if (ch === "@") {
        stream.next();
        stream.eatWhile(/[\w-]/);
        return "meta";
      }

      if (stream.eatWhile(/[\w-]/)){
        if(stream.match(/ *: *[\w-\+\$#!\("']/,false)){
          return "propery";
        }
        else if(stream.match(/ *:/,false)){
          indent(state);
          state.cursorHalf = 1;
          return "atom";
        }
        else if(stream.match(/ *,/,false)){
          return "atom";
        }
        else{
          indent(state);
          return "atom";
        }
      }

      if(ch === ":"){
        if (stream.match(pseudoElementsRegexp)){ // could be a pseudo-element
          return "keyword";
        }
        stream.next();
        state.cursorHalf=1;
        return "operator";
      }

    } // cursorHalf===0 ends here
    else{

      if (ch === "#") {
        stream.next();
        // Hex numbers
        if (stream.match(/[0-9a-fA-F]{6}|[0-9a-fA-F]{3}/)){
          if(!stream.peek()){
            state.cursorHalf = 0;
          }
          return "number";
        }
      }

      // Numbers
      if (stream.match(/^-?[0-9\.]+/)){
        if(!stream.peek()){
          state.cursorHalf = 0;
        }
        return "number";
      }

      // Units
      if (stream.match(/^(px|em|in)\b/)){
        if(!stream.peek()){
          state.cursorHalf = 0;
        }
        return "unit";
      }

      if (stream.match(keywordsRegexp)){
        if(!stream.peek()){
          state.cursorHalf = 0;
        }
        return "keyword";
      }

      if (stream.match(/^url/) && stream.peek() === "(") {
        state.tokenizer = urlTokens;
        if(!stream.peek()){
          state.cursorHalf = 0;
        }
        return "atom";
      }

      // Variables
      if (ch === "$") {
        stream.next();
        stream.eatWhile(/[\w-]/);
        if(!stream.peek()){
          state.cursorHalf = 0;
        }
        return "variable-3";
      }

      // bang character for !important, !default, etc.
      if (ch === "!") {
        stream.next();
        if(!stream.peek()){
          state.cursorHalf = 0;
        }
        return stream.match(/^[\w]+/) ? "keyword": "operator";
      }

      if (stream.match(opRegexp)){
        if(!stream.peek()){
          state.cursorHalf = 0;
        }
        return "operator";
      }

      // attributes
      if (stream.eatWhile(/[\w-]/)) {
        if(!stream.peek()){
          state.cursorHalf = 0;
        }
        return "attribute";
      }

      //stream.eatSpace();
      if(!stream.peek()){
        state.cursorHalf = 0;
        return null;
      }

    } // else ends here

    if (stream.match(opRegexp))
      return "operator";

    // If we haven't returned by now, we move 1 character
    // and return an error
    stream.next();
    return null;
  }

  function tokenLexer(stream, state) {
    if (stream.sol()) state.indentCount = 0;
    var style = state.tokenizer(stream, state);
    var current = stream.current();

    if (current === "@return" || current === "}"){
      dedent(state);
    }

    if (style !== null) {
      var startOfToken = stream.pos - current.length;

      var withCurrentIndent = startOfToken + (config.indentUnit * state.indentCount);

      var newScopes = [];

      for (var i = 0; i < state.scopes.length; i++) {
        var scope = state.scopes[i];

        if (scope.offset <= withCurrentIndent)
          newScopes.push(scope);
      }

      state.scopes = newScopes;
    }


    return style;
  }

  return {
    startState: function() {
      return {
        tokenizer: tokenBase,
        scopes: [{offset: 0, type: "sass"}],
        indentCount: 0,
        cursorHalf: 0,  // cursor half tells us if cursor lies after (1)
                        // or before (0) colon (well... more or less)
        definedVars: [],
        definedMixins: []
      };
    },
    token: function(stream, state) {
      var style = tokenLexer(stream, state);

      state.lastToken = { style: style, content: stream.current() };

      return style;
    },

    indent: function(state) {
      return state.scopes[0].offset;
    }
  };
});

CodeMirror.defineMIME("text/x-sass", "sass");

});




// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
"use strict";

CodeMirror.defineMode("nginx", function(config) {

  function words(str) {
    var obj = {}, words = str.split(" ");
    for (var i = 0; i < words.length; ++i) obj[words[i]] = true;
    return obj;
  }

  var keywords = words(
    /* ngxDirectiveControl */ "break return rewrite set" +
    /* ngxDirective */ " accept_mutex accept_mutex_delay access_log add_after_body add_before_body add_header addition_types aio alias allow ancient_browser ancient_browser_value auth_basic auth_basic_user_file auth_http auth_http_header auth_http_timeout autoindex autoindex_exact_size autoindex_localtime charset charset_types client_body_buffer_size client_body_in_file_only client_body_in_single_buffer client_body_temp_path client_body_timeout client_header_buffer_size client_header_timeout client_max_body_size connection_pool_size create_full_put_path daemon dav_access dav_methods debug_connection debug_points default_type degradation degrade deny devpoll_changes devpoll_events directio directio_alignment empty_gif env epoll_events error_log eventport_events expires fastcgi_bind fastcgi_buffer_size fastcgi_buffers fastcgi_busy_buffers_size fastcgi_cache fastcgi_cache_key fastcgi_cache_methods fastcgi_cache_min_uses fastcgi_cache_path fastcgi_cache_use_stale fastcgi_cache_valid fastcgi_catch_stderr fastcgi_connect_timeout fastcgi_hide_header fastcgi_ignore_client_abort fastcgi_ignore_headers fastcgi_index fastcgi_intercept_errors fastcgi_max_temp_file_size fastcgi_next_upstream fastcgi_param fastcgi_pass_header fastcgi_pass_request_body fastcgi_pass_request_headers fastcgi_read_timeout fastcgi_send_lowat fastcgi_send_timeout fastcgi_split_path_info fastcgi_store fastcgi_store_access fastcgi_temp_file_write_size fastcgi_temp_path fastcgi_upstream_fail_timeout fastcgi_upstream_max_fails flv geoip_city geoip_country google_perftools_profiles gzip gzip_buffers gzip_comp_level gzip_disable gzip_hash gzip_http_version gzip_min_length gzip_no_buffer gzip_proxied gzip_static gzip_types gzip_vary gzip_window if_modified_since ignore_invalid_headers image_filter image_filter_buffer image_filter_jpeg_quality image_filter_transparency imap_auth imap_capabilities imap_client_buffer index ip_hash keepalive_requests keepalive_timeout kqueue_changes kqueue_events large_client_header_buffers limit_conn limit_conn_log_level limit_rate limit_rate_after limit_req limit_req_log_level limit_req_zone limit_zone lingering_time lingering_timeout lock_file log_format log_not_found log_subrequest map_hash_bucket_size map_hash_max_size master_process memcached_bind memcached_buffer_size memcached_connect_timeout memcached_next_upstream memcached_read_timeout memcached_send_timeout memcached_upstream_fail_timeout memcached_upstream_max_fails merge_slashes min_delete_depth modern_browser modern_browser_value msie_padding msie_refresh multi_accept open_file_cache open_file_cache_errors open_file_cache_events open_file_cache_min_uses open_file_cache_valid open_log_file_cache output_buffers override_charset perl perl_modules perl_require perl_set pid pop3_auth pop3_capabilities port_in_redirect postpone_gzipping postpone_output protocol proxy proxy_bind proxy_buffer proxy_buffer_size proxy_buffering proxy_buffers proxy_busy_buffers_size proxy_cache proxy_cache_key proxy_cache_methods proxy_cache_min_uses proxy_cache_path proxy_cache_use_stale proxy_cache_valid proxy_connect_timeout proxy_headers_hash_bucket_size proxy_headers_hash_max_size proxy_hide_header proxy_ignore_client_abort proxy_ignore_headers proxy_intercept_errors proxy_max_temp_file_size proxy_method proxy_next_upstream proxy_pass_error_message proxy_pass_header proxy_pass_request_body proxy_pass_request_headers proxy_read_timeout proxy_redirect proxy_send_lowat proxy_send_timeout proxy_set_body proxy_set_header proxy_ssl_session_reuse proxy_store proxy_store_access proxy_temp_file_write_size proxy_temp_path proxy_timeout proxy_upstream_fail_timeout proxy_upstream_max_fails random_index read_ahead real_ip_header recursive_error_pages request_pool_size reset_timedout_connection resolver resolver_timeout rewrite_log rtsig_overflow_events rtsig_overflow_test rtsig_overflow_threshold rtsig_signo satisfy secure_link_secret send_lowat send_timeout sendfile sendfile_max_chunk server_name_in_redirect server_names_hash_bucket_size server_names_hash_max_size server_tokens set_real_ip_from smtp_auth smtp_capabilities smtp_client_buffer smtp_greeting_delay so_keepalive source_charset ssi ssi_ignore_recycled_buffers ssi_min_file_chunk ssi_silent_errors ssi_types ssi_value_length ssl ssl_certificate ssl_certificate_key ssl_ciphers ssl_client_certificate ssl_crl ssl_dhparam ssl_engine ssl_prefer_server_ciphers ssl_protocols ssl_session_cache ssl_session_timeout ssl_verify_client ssl_verify_depth starttls stub_status sub_filter sub_filter_once sub_filter_types tcp_nodelay tcp_nopush thread_stack_size timeout timer_resolution types_hash_bucket_size types_hash_max_size underscores_in_headers uninitialized_variable_warn use user userid userid_domain userid_expires userid_mark userid_name userid_p3p userid_path userid_service valid_referers variables_hash_bucket_size variables_hash_max_size worker_connections worker_cpu_affinity worker_priority worker_processes worker_rlimit_core worker_rlimit_nofile worker_rlimit_sigpending worker_threads working_directory xclient xml_entities xslt_stylesheet xslt_typesdrew@li229-23"
    );

  var keywords_block = words(
    /* ngxDirectiveBlock */ "http mail events server types location upstream charset_map limit_except if geo map"
    );

  var keywords_important = words(
    /* ngxDirectiveImportant */ "include root server server_name listen internal proxy_pass memcached_pass fastcgi_pass try_files"
    );

  var indentUnit = config.indentUnit, type;
  function ret(style, tp) {type = tp; return style;}

  function tokenBase(stream, state) {


    stream.eatWhile(/[\w\$_]/);

    var cur = stream.current();


    if (keywords.propertyIsEnumerable(cur)) {
      return "keyword";
    }
    else if (keywords_block.propertyIsEnumerable(cur)) {
      return "variable-2";
    }
    else if (keywords_important.propertyIsEnumerable(cur)) {
      return "string-2";
    }
    /**/

    var ch = stream.next();
    if (ch == "@") {stream.eatWhile(/[\w\\\-]/); return ret("meta", stream.current());}
    else if (ch == "/" && stream.eat("*")) {
      state.tokenize = tokenCComment;
      return tokenCComment(stream, state);
    }
    else if (ch == "<" && stream.eat("!")) {
      state.tokenize = tokenSGMLComment;
      return tokenSGMLComment(stream, state);
    }
    else if (ch == "=") ret(null, "compare");
    else if ((ch == "~" || ch == "|") && stream.eat("=")) return ret(null, "compare");
    else if (ch == "\"" || ch == "'") {
      state.tokenize = tokenString(ch);
      return state.tokenize(stream, state);
    }
    else if (ch == "#") {
      stream.skipToEnd();
      return ret("comment", "comment");
    }
    else if (ch == "!") {
      stream.match(/^\s*\w*/);
      return ret("keyword", "important");
    }
    else if (/\d/.test(ch)) {
      stream.eatWhile(/[\w.%]/);
      return ret("number", "unit");
    }
    else if (/[,.+>*\/]/.test(ch)) {
      return ret(null, "select-op");
    }
    else if (/[;{}:\[\]]/.test(ch)) {
      return ret(null, ch);
    }
    else {
      stream.eatWhile(/[\w\\\-]/);
      return ret("variable", "variable");
    }
  }

  function tokenCComment(stream, state) {
    var maybeEnd = false, ch;
    while ((ch = stream.next()) != null) {
      if (maybeEnd && ch == "/") {
        state.tokenize = tokenBase;
        break;
      }
      maybeEnd = (ch == "*");
    }
    return ret("comment", "comment");
  }

  function tokenSGMLComment(stream, state) {
    var dashes = 0, ch;
    while ((ch = stream.next()) != null) {
      if (dashes >= 2 && ch == ">") {
        state.tokenize = tokenBase;
        break;
      }
      dashes = (ch == "-") ? dashes + 1 : 0;
    }
    return ret("comment", "comment");
  }

  function tokenString(quote) {
    return function(stream, state) {
      var escaped = false, ch;
      while ((ch = stream.next()) != null) {
        if (ch == quote && !escaped)
          break;
        escaped = !escaped && ch == "\\";
      }
      if (!escaped) state.tokenize = tokenBase;
      return ret("string", "string");
    };
  }

  return {
    startState: function(base) {
      return {tokenize: tokenBase,
              baseIndent: base || 0,
              stack: []};
    },

    token: function(stream, state) {
      if (stream.eatSpace()) return null;
      type = null;
      var style = state.tokenize(stream, state);

      var context = state.stack[state.stack.length-1];
      if (type == "hash" && context == "rule") style = "atom";
      else if (style == "variable") {
        if (context == "rule") style = "number";
        else if (!context || context == "@media{") style = "tag";
      }

      if (context == "rule" && /^[\{\};]$/.test(type))
        state.stack.pop();
      if (type == "{") {
        if (context == "@media") state.stack[state.stack.length-1] = "@media{";
        else state.stack.push("{");
      }
      else if (type == "}") state.stack.pop();
      else if (type == "@media") state.stack.push("@media");
      else if (context == "{" && type != "comment") state.stack.push("rule");
      return style;
    },

    indent: function(state, textAfter) {
      var n = state.stack.length;
      if (/^\}/.test(textAfter))
        n -= state.stack[state.stack.length-1] == "rule" ? 2 : 1;
      return state.baseIndent + n * indentUnit;
    },

    electricChars: "}"
  };
});

CodeMirror.defineMIME("text/nginx", "text/x-nginx-conf");

});


