(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var meteorInstall = Package['modules-runtime'].meteorInstall;

var require = meteorInstall({"node_modules":{"meteor":{"modules":{"server.js":function(require){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// packages/modules/server.js                                                                 //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
require("./install-packages.js");
require("./process.js");
require("./reify.js");

////////////////////////////////////////////////////////////////////////////////////////////////

},"install-packages.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// packages/modules/install-packages.js                                                       //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
function install(name, mainModule) {
  var meteorDir = {};

  // Given a package name <name>, install a stub module in the
  // /node_modules/meteor directory called <name>.js, so that
  // require.resolve("meteor/<name>") will always return
  // /node_modules/meteor/<name>.js instead of something like
  // /node_modules/meteor/<name>/index.js, in the rare but possible event
  // that the package contains a file called index.js (#6590).

  if (typeof mainModule === "string") {
    // Set up an alias from /node_modules/meteor/<package>.js to the main
    // module, e.g. meteor/<package>/index.js.
    meteorDir[name + ".js"] = mainModule;
  } else {
    // back compat with old Meteor packages
    meteorDir[name + ".js"] = function (r, e, module) {
      module.exports = Package[name];
    };
  }

  meteorInstall({
    node_modules: {
      meteor: meteorDir
    }
  });
}

// This file will be modified during computeJsOutputFilesMap to include
// install(<name>) calls for every Meteor package.

install("meteor");
install("meteor-base");
install("npm-mongo");
install("ecmascript-runtime");
install("modules-runtime");
install("modules", "meteor/modules/server.js");
install("modern-browsers", "meteor/modern-browsers/modern.js");
install("es5-shim");
install("promise", "meteor/promise/server.js");
install("ecmascript-runtime-client", "meteor/ecmascript-runtime-client/versions.js");
install("ecmascript-runtime-server", "meteor/ecmascript-runtime-server/runtime.js");
install("babel-compiler");
install("ecmascript");
install("babel-runtime", "meteor/babel-runtime/babel-runtime.js");
install("url", "meteor/url/url_server.js");
install("http", "meteor/http/httpcall_server.js");
install("dynamic-import", "meteor/dynamic-import/server.js");
install("base64", "meteor/base64/base64.js");
install("ejson", "meteor/ejson/ejson.js");
install("diff-sequence", "meteor/diff-sequence/diff.js");
install("geojson-utils", "meteor/geojson-utils/main.js");
install("id-map", "meteor/id-map/id-map.js");
install("random");
install("mongo-id", "meteor/mongo-id/id.js");
install("ordered-dict", "meteor/ordered-dict/ordered_dict.js");
install("tracker");
install("minimongo", "meteor/minimongo/minimongo_server.js");
install("check", "meteor/check/match.js");
install("retry", "meteor/retry/retry.js");
install("callback-hook", "meteor/callback-hook/hook.js");
install("ddp-common");
install("reload");
install("socket-stream-client", "meteor/socket-stream-client/node.js");
install("ddp-client", "meteor/ddp-client/server/server.js");
install("underscore");
install("rate-limit", "meteor/rate-limit/rate-limit.js");
install("ddp-rate-limiter");
install("logging", "meteor/logging/logging.js");
install("routepolicy", "meteor/routepolicy/main.js");
install("boilerplate-generator", "meteor/boilerplate-generator/generator.js");
install("webapp-hashing");
install("webapp", "meteor/webapp/webapp_server.js");
install("audit-argument-checks");
install("ddp-server");
install("ddp");
install("allow-deny");
install("binary-heap");
install("mongo");
install("standard-minifier-css");
install("standard-minifier-js");
install("jquery");
install("observe-sequence");
install("reactive-var");
install("deps");
install("htmljs");
install("blaze");
install("ui");
install("spacebars");
install("templating-compiler");
install("templating-runtime");
install("templating");
install("iron:core");
install("iron:dynamic-template");
install("iron:layout");
install("iron:url");
install("iron:middleware-stack");
install("iron:location");
install("reactive-dict", "meteor/reactive-dict/migration.js");
install("iron:controller");
install("iron:router");
install("blaze-html-templates");
install("twbs:bootstrap");
install("session");
install("npm-bcrypt", "meteor/npm-bcrypt/wrapper.js");
install("accounts-base", "meteor/accounts-base/server_main.js");
install("sha");
install("srp");
install("email");
install("accounts-password");
install("themeteorchef:jquery-validation");
install("browser-policy-common");
install("browser-policy-content", "meteor/browser-policy-content/browser-policy-content.js");
install("browser-policy-framing", "meteor/browser-policy-framing/browser-policy-framing.js");
install("browser-policy", "meteor/browser-policy/browser-policy.js");
install("themeteorchef:bert");
install("pcel:loading");
install("bevanhunt:leaflet");
install("czbaker:lightbox2");
install("ieverx:echarts");
install("meteorhacks:inject-data");
install("meteorhacks:picker");
install("meteorhacks:meteorx");
install("livedata");
install("meteorhacks:fast-render");
install("meteorhacks:subs-manager");
install("bambattajb:sticky");
install("semantic:ui-sticky");
install("hot-code-push");
install("autoupdate");
install("service-configuration");

////////////////////////////////////////////////////////////////////////////////////////////////

},"process.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// packages/modules/process.js                                                                //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
if (! global.process) {
  try {
    // The application can run `npm install process` to provide its own
    // process stub; otherwise this module will provide a partial stub.
    global.process = require("process");
  } catch (missing) {
    global.process = {};
  }
}

var proc = global.process;

if (Meteor.isServer) {
  // Make require("process") work on the server in all versions of Node.
  meteorInstall({
    node_modules: {
      "process.js": function (r, e, module) {
        module.exports = proc;
      }
    }
  });
} else {
  proc.platform = "browser";
  proc.nextTick = proc.nextTick || Meteor._setImmediate;
}

if (typeof proc.env !== "object") {
  proc.env = {};
}

var hasOwn = Object.prototype.hasOwnProperty;
for (var key in meteorEnv) {
  if (hasOwn.call(meteorEnv, key)) {
    proc.env[key] = meteorEnv[key];
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////

},"reify.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// packages/modules/reify.js                                                                  //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
require("reify/lib/runtime").enable(
  module.constructor.prototype
);

////////////////////////////////////////////////////////////////////////////////////////////////

},"node_modules":{"reify":{"lib":{"runtime":{"index.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// node_modules/meteor/modules/node_modules/reify/lib/runtime/index.js                        //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
module.useNode();
////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}}},"express":{"package.json":function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// node_modules/express/package.json                                                          //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
exports.name = "express";
exports.version = "4.16.3";

////////////////////////////////////////////////////////////////////////////////////////////////

},"index.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// node_modules/express/index.js                                                              //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
module.useNode();
////////////////////////////////////////////////////////////////////////////////////////////////

}},"body-parser":{"package.json":function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// node_modules/body-parser/package.json                                                      //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
exports.name = "body-parser";
exports.version = "1.18.2";

////////////////////////////////////////////////////////////////////////////////////////////////

},"index.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// node_modules/body-parser/index.js                                                          //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
module.useNode();
////////////////////////////////////////////////////////////////////////////////////////////////

}},"@babel":{"runtime":{"package.json":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// node_modules/@babel/runtime/package.json                                                   //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
module.useNode();
////////////////////////////////////////////////////////////////////////////////////////////////

},"helpers":{"builtin":{"interopRequireDefault.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js                       //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
module.useNode();
////////////////////////////////////////////////////////////////////////////////////////////////

},"objectSpread.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// node_modules/@babel/runtime/helpers/builtin/objectSpread.js                                //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
module.useNode();
////////////////////////////////////////////////////////////////////////////////////////////////

}}}}},"bcrypt":{"package.json":function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// node_modules/bcrypt/package.json                                                           //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
exports.name = "bcrypt";
exports.version = "3.0.0";
exports.main = "./bcrypt";

////////////////////////////////////////////////////////////////////////////////////////////////

},"bcrypt.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// node_modules/bcrypt/bcrypt.js                                                              //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
module.useNode();
////////////////////////////////////////////////////////////////////////////////////////////////

}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
var exports = require("/node_modules/meteor/modules/server.js");

/* Exports */
Package._define("modules", exports, {
  meteorInstall: meteorInstall
});

})();
