(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{277:function(t,e,a){"use strict";a.r(e);var s=a(0),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"lru-cache"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lru-cache"}},[t._v("#")]),t._v(" lru cache")]),t._v(" "),a("p",[t._v("A cache object that deletes the least-recently-used items.")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://travis-ci.org/isaacs/node-lru-cache",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://travis-ci.org/isaacs/node-lru-cache.svg?branch=master",alt:"Build Status"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://coveralls.io/github/isaacs/node-lru-cache",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://coveralls.io/repos/isaacs/node-lru-cache/badge.svg?service=github",alt:"Coverage Status"}}),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("npm install lru"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("cache "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("save\n")])])]),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("LRU")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lru-cache"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" max"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("length")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("dispose")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("close")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" maxAge"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cache "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("LRU")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" otherCache "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("LRU")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// sets just the max size")]),t._v("\n\ncache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"key"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"value"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ncache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"key"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "value"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// non-string keys ARE fully supported")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// but note that it must be THE SAME object, not")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// just a JSON-equivalent object.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" someObject "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\ncache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("someObject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a value'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Object keys are not toString()-ed")]),t._v("\ncache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[object Object]'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a different value'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nassert"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("equal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("someObject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a value'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// A similar object with same keys/values won't work,")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// because it's a different object identity")]),t._v("\nassert"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("equal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ncache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("reset")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// empty the cache")]),t._v("\n")])])]),a("p",[t._v("If you put more stuff in it, then items will fall out.")]),t._v(" "),a("p",[t._v("If you try to put an oversized thing in it, then it'll fall out right\naway.")]),t._v(" "),a("h2",{attrs:{id:"options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[t._v("#")]),t._v(" Options")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("max")]),t._v(" The maximum size of the cache, checked by applying the length\nfunction to all values in the cache.  Not setting this is kind of\nsilly, since that's the whole purpose of this lib, but it defaults\nto "),a("code",[t._v("Infinity")]),t._v(".")]),t._v(" "),a("li",[a("code",[t._v("maxAge")]),t._v(" Maximum age in ms.  Items are not pro-actively pruned out\nas they age, but if you try to get an item that is too old, it'll\ndrop it and return undefined instead of giving it to you.")]),t._v(" "),a("li",[a("code",[t._v("length")]),t._v(" Function that is used to calculate the length of stored\nitems.  If you're storing strings or buffers, then you probably want\nto do something like "),a("code",[t._v("function(n, key){return n.length}")]),t._v(".  The default is\n"),a("code",[t._v("function(){return 1}")]),t._v(", which is fine if you want to store "),a("code",[t._v("max")]),t._v("\nlike-sized things.  The item is passed as the first argument, and\nthe key is passed as the second argumnet.")]),t._v(" "),a("li",[a("code",[t._v("dispose")]),t._v(" Function that is called on items when they are dropped\nfrom the cache.  This can be handy if you want to close file\ndescriptors or do other cleanup tasks when items are no longer\naccessible.  Called with "),a("code",[t._v("key, value")]),t._v(".  It's called "),a("em",[t._v("before")]),t._v("\nactually removing the item from the internal cache, so if you want\nto immediately put it back in, you'll have to do that in a\n"),a("code",[t._v("nextTick")]),t._v(" or "),a("code",[t._v("setTimeout")]),t._v(" callback or it won't do anything.")]),t._v(" "),a("li",[a("code",[t._v("stale")]),t._v(" By default, if you set a "),a("code",[t._v("maxAge")]),t._v(", it'll only actually pull\nstale items out of the cache when you "),a("code",[t._v("get(key)")]),t._v(".  (That is, it's\nnot pre-emptively doing a "),a("code",[t._v("setTimeout")]),t._v(" or anything.)  If you set\n"),a("code",[t._v("stale:true")]),t._v(", it'll return the stale value before deleting it.  If\nyou don't set this, then it'll return "),a("code",[t._v("undefined")]),t._v(" when you try to\nget a stale entry, as if it had already been deleted.")]),t._v(" "),a("li",[a("code",[t._v("noDisposeOnSet")]),t._v(" By default, if you set a "),a("code",[t._v("dispose()")]),t._v(" method, then\nit'll be called whenever a "),a("code",[t._v("set()")]),t._v(" operation overwrites an existing\nkey.  If you set this option, "),a("code",[t._v("dispose()")]),t._v(" will only be called when a\nkey falls out of the cache, not when it is overwritten.")])]),t._v(" "),a("h2",{attrs:{id:"api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("set(key, value, maxAge)")])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("get(key) => value")])]),t._v(" "),a("p",[t._v('Both of these will update the "recently used"-ness of the key.\nThey do what you think. '),a("code",[t._v("maxAge")]),t._v(" is optional and overrides the\ncache "),a("code",[t._v("maxAge")]),t._v(" option if provided.")]),t._v(" "),a("p",[t._v("If the key is not found, "),a("code",[t._v("get()")]),t._v(" will return "),a("code",[t._v("undefined")]),t._v(".")]),t._v(" "),a("p",[t._v("The key and val can be any value.")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("peek(key)")])]),t._v(" "),a("p",[t._v("Returns the key value (or "),a("code",[t._v("undefined")]),t._v(' if not found) without\nupdating the "recently used"-ness of the key.')]),t._v(" "),a("p",[t._v("(If you find yourself using this a lot, you "),a("em",[t._v("might")]),t._v(" be using the\nwrong sort of data structure, but there are some use cases where\nit's handy.)")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("del(key)")])]),t._v(" "),a("p",[t._v("Deletes a key out of the cache.")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("reset()")])]),t._v(" "),a("p",[t._v("Clear the cache entirely, throwing away all values.")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("has(key)")])]),t._v(" "),a("p",[t._v("Check if a key is in the cache, without updating the recent-ness\nor deleting it for being stale.")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("forEach(function(value,key,cache), [thisp])")])]),t._v(" "),a("p",[t._v("Just like "),a("code",[t._v("Array.prototype.forEach")]),t._v(".  Iterates over all the keys\nin the cache, in order of recent-ness.  (Ie, more recently used\nitems are iterated over first.)")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("rforEach(function(value,key,cache), [thisp])")])]),t._v(" "),a("p",[t._v("The same as "),a("code",[t._v("cache.forEach(...)")]),t._v(" but items are iterated over in\nreverse order.  (ie, less recently used items are iterated over\nfirst.)")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("keys()")])]),t._v(" "),a("p",[t._v("Return an array of the keys in the cache.")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("values()")])]),t._v(" "),a("p",[t._v("Return an array of the values in the cache.")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("length")])]),t._v(" "),a("p",[t._v("Return total length of objects in cache taking into account\n"),a("code",[t._v("length")]),t._v(" options function.")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("itemCount")])]),t._v(" "),a("p",[t._v("Return total quantity of objects currently in cache. Note, that\n"),a("code",[t._v("stale")]),t._v(" (see options) items are returned as part of this item\ncount.")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("dump()")])]),t._v(" "),a("p",[t._v("Return an array of the cache entries ready for serialization and usage\nwith 'destinationCache.load(arr)`.")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("load(cacheEntriesArray)")])]),t._v(" "),a("p",[t._v("Loads another cache entries array, obtained with "),a("code",[t._v("sourceCache.dump()")]),t._v(",\ninto the cache. The destination cache is reset before loading new entries")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("prune()")])]),t._v(" "),a("p",[t._v("Manually iterates over the entire cache proactively pruning old entries")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);