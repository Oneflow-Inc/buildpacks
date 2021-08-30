open Promise

let installerUrlCN = "https://oneflow-static.oss-cn-beijing.aliyuncs.com/downloads/conda-installers/Miniconda3-py39_4.10.3-Linux-x86_64.sh"
let installerUrlInternational = "https://repo.anaconda.com/miniconda/Miniconda3-py39_4.10.3-Linux-x86_64.sh"
let run = () => {
  let installerUrl = switch Js.Dict.get(Node.Process.process["env"], "GITHUB_REPOSITORY") {
  | Some("Oneflow-Inc/buildpacks") => installerUrlCN
  | _ => installerUrlCN
  }
  Js.Dict.get(Node.Process.process["env"], "GITHUB_ACTION") |> Js.log2("GITHUB_ACTION")
  Exec.exec("cmake", ["..", "-C", Core.getInput("cmake-init-cache")], {"a": 1})->Promise.then(str =>
    Js.log(str)->resolve
  )
}
