open Promise

let run = () =>
  Js.Dict.get(Node.Process.process["env"], "GITHUB_ACTION") |> Js.log2("GITHUB_ACTION")
Exec.exec("cmake", ["..", "-C", Core.getInput("cmake-init-cache")], {"a": 1})
->Promise.then(str => Js.log(str)->resolve)
->ignore
