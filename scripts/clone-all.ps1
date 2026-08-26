[CmdletBinding()]
param(
    [string]$Destination = (Join-Path (Get-Location) "pz-mod")
)

$ErrorActionPreference = "Stop"

$repositories = @(
    "pz-ai-translation-generator",
    "2dw-skin-adapter-fix",
    "lifestyle-2dw-shower-compatibility",
    "tabas-2dw-shower-compatibility",
    "cleanui-42-20-4-config-loader-fix"
)

$destinationRoot = [IO.Path]::GetFullPath($Destination)
New-Item -ItemType Directory -Path $destinationRoot -Force | Out-Null

foreach ($repository in $repositories) {
    $target = Join-Path $destinationRoot $repository
    if (Test-Path -LiteralPath $target) {
        Write-Output "Skipping existing path: $target"
        continue
    }

    git clone "https://github.com/ppebble/$repository.git" $target
    if ($LASTEXITCODE -ne 0) {
        throw "Failed to clone ppebble/$repository"
    }
}
