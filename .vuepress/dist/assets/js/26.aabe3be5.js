(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{262:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"cross-spawn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cross-spawn"}},[s._v("#")]),s._v(" cross-spawn")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://npmjs.org/package/cross-spawn",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"http://img.shields.io/npm/v/cross-spawn.svg",alt:"NPM version"}}),a("OutboundLink")],1),s._v(" "),a("a",{attrs:{href:"https://npmjs.org/package/cross-spawn",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"http://img.shields.io/npm/dm/cross-spawn.svg",alt:"Downloads"}}),a("OutboundLink")],1),s._v(" "),a("a",{attrs:{href:"https://travis-ci.org/IndigoUnited/node-cross-spawn",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"http://img.shields.io/travis/IndigoUnited/node-cross-spawn/master.svg",alt:"Build Status"}}),a("OutboundLink")],1),s._v(" "),a("a",{attrs:{href:"https://ci.appveyor.com/project/satazor/node-cross-spawn",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/appveyor/ci/satazor/node-cross-spawn/master.svg",alt:"Build status"}}),a("OutboundLink")],1),s._v(" "),a("a",{attrs:{href:"https://david-dm.org/IndigoUnited/node-cross-spawn",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/david/IndigoUnited/node-cross-spawn.svg",alt:"Dependency status"}}),a("OutboundLink")],1),s._v(" "),a("a",{attrs:{href:"https://david-dm.org/IndigoUnited/node-cross-spawn#info=devDependencies",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/david/dev/IndigoUnited/node-cross-spawn.svg",alt:"Dev Dependency status"}}),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("A cross platform solution to node's spawn and spawnSync.")]),s._v(" "),a("h2",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[s._v("#")]),s._v(" Installation")]),s._v(" "),a("p",[a("code",[s._v("$ npm install cross-spawn")])]),s._v(" "),a("p",[s._v("If you are using "),a("code",[s._v("spawnSync")]),s._v(" on node 0.10 or older, you will also need to install "),a("code",[s._v("spawn-sync")]),s._v(":")]),s._v(" "),a("p",[a("code",[s._v("$ npm install spawn-sync")])]),s._v(" "),a("h2",{attrs:{id:"why"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why"}},[s._v("#")]),s._v(" Why")]),s._v(" "),a("p",[s._v("Node has issues when using spawn on Windows:")]),s._v(" "),a("ul",[a("li",[s._v("It ignores "),a("a",{attrs:{href:"https://github.com/joyent/node/issues/2318",target:"_blank",rel:"noopener noreferrer"}},[s._v("PATHEXT"),a("OutboundLink")],1)]),s._v(" "),a("li",[s._v("It does not support "),a("a",{attrs:{href:"http://pt.wikipedia.org/wiki/Shebang",target:"_blank",rel:"noopener noreferrer"}},[s._v("shebangs"),a("OutboundLink")],1)]),s._v(" "),a("li",[s._v("No "),a("code",[s._v("options.shell")]),s._v(" support on node < v6")]),s._v(" "),a("li",[s._v("It does not allow you to run "),a("code",[s._v("del")]),s._v(" or "),a("code",[s._v("dir")])])]),s._v(" "),a("p",[s._v("All these issues are handled correctly by "),a("code",[s._v("cross-spawn")]),s._v(".\nThere are some known modules, such as "),a("a",{attrs:{href:"https://github.com/ForbesLindesay/win-spawn",target:"_blank",rel:"noopener noreferrer"}},[s._v("win-spawn"),a("OutboundLink")],1),s._v(", that try to solve this but they are either broken or provide faulty escaping of shell arguments.")]),s._v(" "),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[s._v("#")]),s._v(" Usage")]),s._v(" "),a("p",[s._v("Exactly the same way as node's "),a("a",{attrs:{href:"https://nodejs.org/api/child_process.html#child_process_child_process_spawn_command_args_options",target:"_blank",rel:"noopener noreferrer"}},[a("code",[s._v("spawn")]),a("OutboundLink")],1),s._v(" or "),a("a",{attrs:{href:"https://nodejs.org/api/child_process.html#child_process_child_process_spawnsync_command_args_options",target:"_blank",rel:"noopener noreferrer"}},[a("code",[s._v("spawnSync")]),a("OutboundLink")],1),s._v(", so it's a drop in replacement.")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" spawn "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'cross-spawn'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Spawn NPM asynchronously")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" child "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("spawn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'npm'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'list'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'-g'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'-depth'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'0'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" stdio"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'inherit'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Spawn NPM synchronously")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" results "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" spawn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'npm'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'list'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'-g'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'-depth'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'0'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" stdio"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'inherit'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("h2",{attrs:{id:"caveats"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#caveats"}},[s._v("#")]),s._v(" Caveats")]),s._v(" "),a("h4",{attrs:{id:"options-shell-as-an-alternative-to-cross-spawn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options-shell-as-an-alternative-to-cross-spawn"}},[s._v("#")]),s._v(" "),a("code",[s._v("options.shell")]),s._v(" as an alternative to "),a("code",[s._v("cross-spawn")])]),s._v(" "),a("p",[s._v("Starting from node v6, "),a("code",[s._v("spawn")]),s._v(" has a "),a("code",[s._v("shell")]),s._v(" option that allows you run commands from within a shell. This new option solves most of the problems that "),a("code",[s._v("cross-spawn")]),s._v(" attempts to solve, but:")]),s._v(" "),a("ul",[a("li",[s._v("It's not supported in node < v6")]),s._v(" "),a("li",[s._v("It has no support for shebangs on Windows")]),s._v(" "),a("li",[s._v("You must manually escape the command and arguments which is very error prone, specially when passing user input")])]),s._v(" "),a("p",[s._v("If you are using the "),a("code",[s._v("shell")]),s._v(" option to spawn a command in a cross platform way, consider using "),a("code",[s._v("cross-spawn")]),s._v(" instead. You have been warned.")]),s._v(" "),a("h4",{attrs:{id:"shebangs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shebangs"}},[s._v("#")]),s._v(" Shebangs")]),s._v(" "),a("p",[s._v("While "),a("code",[s._v("cross-spawn")]),s._v(" handles shebangs on Windows, its support is limited: e.g.: it doesn't handle arguments after the path, e.g.: "),a("code",[s._v("#!/bin/bash -e")]),s._v(".")]),s._v(" "),a("p",[s._v("Remember to always test your code on Windows!")]),s._v(" "),a("h2",{attrs:{id:"tests"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tests"}},[s._v("#")]),s._v(" Tests")]),s._v(" "),a("p",[a("code",[s._v("$ npm test")])]),s._v(" "),a("h2",{attrs:{id:"license"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#license"}},[s._v("#")]),s._v(" License")]),s._v(" "),a("p",[s._v("Released under the "),a("a",{attrs:{href:"http://www.opensource.org/licenses/mit-license.php",target:"_blank",rel:"noopener noreferrer"}},[s._v("MIT License"),a("OutboundLink")],1),s._v(".")])])}),[],!1,null,null,null);t.default=e.exports}}]);