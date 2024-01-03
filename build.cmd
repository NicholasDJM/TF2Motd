@echo off
if not exist C:\Windows\System32\where.exe echo Must have the latest version of Windows 10 installed.&&pause&&exit /b 1
where /Q deno
if %errorlevel% NEQ 0 echo Must have Deno installed. Run "winget install deno"&&pause&&exit /b 1
:: Compile pug template
:: Allow read, and write.
deno run --allow-read --allow-write build.ts
:: Build and minify
:: Allow read, write, foreign function interface, system calls, environment variable access, and command execution.
:: Enable unstable APIs, like FFI.
:: --node-modules-dir Resolve modules from the node_modules directory.
:: Run "vite build"
deno run --allow-read --allow-write --allow-ffi --allow-sys --allow-env --allow-run --unstable --node-modules-dir npm:vite build