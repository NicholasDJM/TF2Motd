@echo off
if not exist C:\Windows\System32\where.exe echo Must have the latest version of Windows 10 installed.&&pause&&exit /b 1
where /Q deno
if %errorlevel% NEQ 0 echo Must have Deno installed. Run "winget install deno"&&pause&&exit /b 1
set /p port=<port.txt
deno run --allow-read --allow-net https://x.nest.land/serve@1.0.5/mod.ts dist -p %port%