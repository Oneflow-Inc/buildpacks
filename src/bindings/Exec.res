@module("@actions/exec")
external exec: (string, Js.Array.t<string>, 'opts) => Js.Promise.t<int> = "exec"
