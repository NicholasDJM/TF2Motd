@echo off
where /Q deno
if %errorlevel% NEQ 0 echo Must have Deno installed. Run "winget install deno"&&pause&&exit /b 1
:: Compile pug template
deno run --allow-read=./src/index.pug,./lists/*.txt,./src/lists,./src/motd.txt,./src/name.txt,./src/time.txt --allow-write=./src/index.html build.ts
:: Build and minify
deno run -A --unstable --node-modules-dir npm:vite build