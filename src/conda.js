// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Core = require("@actions/core");
var Exec = require("@actions/exec");

function run(param) {
  Exec.exec("cmake", [
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
/* @actions/core Not a pure module */