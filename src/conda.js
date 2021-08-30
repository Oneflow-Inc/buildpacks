// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Js_dict = require("rescript/lib/js/js_dict.js");
var Process = require("process");
var Core = require("@actions/core");
var Exec = require("@actions/exec");

function run(param) {
  console.log("GITHUB_ACTION", Js_dict.get(Process.env, "GITHUB_ACTION"));
  return Exec.exec("cmake", [
                "..",
                "-C",
                Core.getInput("cmake-init-cache")
              ], {
                a: 1
              }).then(function (str) {
              return Promise.resolve((console.log(str), undefined));
            });
}

exports.run = run;
/* process Not a pure module */
