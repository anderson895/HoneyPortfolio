$ffmpeg = "C:\Users\Desktop\AppData\Local\Microsoft\WinGet\Packages\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe\ffmpeg-8.1.1-full_build\bin\ffmpeg.exe"
$src = "D:\Downloads\HoneyMsy\VISUALS AND VIDEOS"
$out = "D:\Downloads\HoneyMsy\public\assets\video"

$map = @(
  @{ in = "Reel.mov";    out = "reel-1.mp4" },
  @{ in = "Reel(1).MOV"; out = "reel-2.mp4" },
  @{ in = "Reel(2).MOV"; out = "reel-3.mp4" },
  @{ in = "Reel(3).mov"; out = "reel-4.mp4" },
  @{ in = "Reel(4).mov"; out = "reel-5.mp4" }
)

foreach ($m in $map) {
  $inPath = Join-Path $src $m.in
  $outPath = Join-Path $out $m.out
  Write-Host "ENCODING $($m.in) -> $($m.out)"
  & $ffmpeg -y -loglevel error -i $inPath `
    -vf "scale=1080:1920:force_original_aspect_ratio=decrease" `
    -c:v libx264 -preset medium -crf 27 -pix_fmt yuv420p `
    -c:a aac -b:a 128k -movflags +faststart $outPath
  if ($LASTEXITCODE -eq 0) {
    $sz = [math]::Round((Get-Item $outPath).Length / 1MB, 1)
    Write-Host "  DONE $($m.out) = $sz MB"
  } else {
    Write-Host "  FAILED $($m.in) (exit $LASTEXITCODE)"
  }
}
Write-Host "ALL ENCODES COMPLETE"
