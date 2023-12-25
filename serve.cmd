@echo off
where /Q deno
if %errorlevel% NEQ 0 echo Must have Deno installed. Run "winget install deno"&&pause&&exit /b 1
set /p port=<port.txt
deno run --allow-read --allow-net https://x.nest.land/serve@1.0.5/mod.ts dist -p %port%