# TF2Motd
[![Latest version](https://img.shields.io/github/v/release/NicholasDJM/TF2Motd?style=plastic)](https://github.com/NicholasDJM/TF2Motd) ![GitHub last commit](https://img.shields.io/github/last-commit/NicholasDJM/TF2Motd/main?style=plastic)


A tool to generate a custom HTML Message of the Day, that matches the style of Team Fortress 2's MOTD chalkboard.  
You can customize the name, message, add any number of ordered or unordered lists, and change the restart time.

Runs on the latest Windows 10.

## Installation
- Download the latest [release](https://github.com/NicholasDJM/TF2Motd/archive/refs/tags/v1.0.3.zip)
- Extract all contents of the zip file to an empty folder of your choice.

## How to use TF2Motd

Add any list in the "/src/lists" directory.
- List files must start with "ul_" or "ol_".
- List files must end with ".txt"
- You may also prepend a number, to set the order of the lists.
	- Example: "1ol_Server Rules.txt"
- The file name becomes the header of the list.
	- "ul_Map Rotation.txt" > "Map Rotation"

Update "/src/motd.txt" and "/src/name.txt" to your liking.
- "name.txt" should be the name of your server.
- "motd.txt" is the main message displayed.
- "time.txt" contains the time the server restarts at.

Double click the "build.cmd" file to run it.
If you get an error "Must have Deno installed"
- Open the Start menu, and search for CMD, press enter.
- Type in "winget install deno", press enter.
- Wait for Deno to install, and try again.

Now, you should have these files in "dist"
- /assets
- index.html

Copy all of these files/folders to your web server of choice.

Finally, edit /cfg/motd.txt on your TF2 server to contain a single line, the public address of your web server. Something like https://example.com/motd/index.html

You now have a HTML MOTD that matches the style of TF2's text MOTD.

> [!TIP]
> Running a local server? Double Click "serve.cmd" and edit /cfg/motd.txt to point to http://localhost:3000.
> Edit "port.txt" to change the server port. Edit /cfg/motd.txt accordingly to match your new port.

## Advanced Users
- "browserslist" in package.json is set to chrome 85. This is the version of Chromium that Steam, and therefore Team Fortress 2, uses.
- "postcss-preset-env" is used to downgrade the CSS.
- "vite-plugin-babel" is used to downgrade JavaScript to support Chromium 85.
