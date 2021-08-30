open Promise

Exec.exec("cmake", ["..", "-C", Core.getInput("cmake-init-cache")], {"a": 1})
->Promise.then(str => Js.log(str)->resolve)
->ignore
