@echo off
:: Creates a shortcut in the Windows Startup folder so the server runs on login
set "STARTUP=%APPDATA%\Microsoft\Windows\Start Menu\Programs\Startup"
set "TARGET=%~dp0start-stream.bat"
set "SHORTCUT=%STARTUP%\storymapradio-server.lnk"

powershell -NoProfile -Command "$ws = New-Object -ComObject WScript.Shell; $s = $ws.CreateShortcut('%SHORTCUT%'); $s.TargetPath = '%TARGET%'; $s.WorkingDirectory = '%~dp0'; $s.WindowStyle = 7; $s.Description = 'storymapradio stream server'; $s.Save()"

echo.
echo Startup shortcut created at:
echo   %SHORTCUT%
echo.
echo The server will now start automatically when you log in.
echo To start it now, run: start-stream.bat
echo Stream will be at: http://localhost:8473/stream/
echo.
pause
