[CmdletBinding(SupportsShouldProcess)]
param(
    [string]$Destination = (Join-Path (Get-Location) "pz-mod"),
    [switch]$IncludePrivate,
    [switch]$IncludeHistorical
)

$ErrorActionPreference = "Stop"

$catalog = Get-Content -LiteralPath (Join-Path (Split-Path $PSScriptRoot -Parent) 'catalog.json') -Raw | ConvertFrom-Json
$repositories = @($catalog | Where-Object {
    $_.repository -and
    ($_.sourceVisibility -eq 'public' -or $IncludePrivate) -and
    ($_.state -eq 'active' -or $IncludeHistorical)
})

$destinationRoot = [IO.Path]::GetFullPath($Destination)
if (!(Test-Path -LiteralPath $destinationRoot) -and $PSCmdlet.ShouldProcess($destinationRoot, 'Create destination directory')) {
    New-Item -ItemType Directory -Path $destinationRoot -Force | Out-Null
}

foreach ($repository in $repositories) {
    $target = Join-Path $destinationRoot $repository.slug
    if (Test-Path -LiteralPath $target) {
        Write-Output "Skipping existing path: $target"
        continue
    }

    if ($PSCmdlet.ShouldProcess($target, "Clone $($repository.repository)")) {
        git clone "$($repository.repository).git" $target
        if ($LASTEXITCODE -ne 0) {
            throw "Failed to clone $($repository.repository)"
        }
    }
}
