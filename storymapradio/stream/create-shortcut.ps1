$ws = New-Object -ComObject WScript.Shell
$startup = [Environment]::GetFolderPath('Startup')
$s = $ws.CreateShortcut("$startup\storymapradio-server.lnk")
$s.TargetPath = "C:\Users\amaxg\storymapradio\stream\start-stream-silent.vbs"
$s.WorkingDirectory = "C:\Users\amaxg\storymapradio\stream"
$s.WindowStyle = 7
$s.Description = "storymapradio stream server"
$s.Save()
Write-Host "Startup shortcut created at: $startup\storymapradio-server.lnk"
