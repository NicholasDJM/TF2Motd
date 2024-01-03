/// <reference types="deno-types"/>
import { compile } from "https://cdn.jsdelivr.net/gh/lumeland/pug@master/mod.ts";


let files: Deno.DirEntry[] = []
// Get all text files in /lists that start with ul_ or ol_
for await (const file of Deno.readDir("./src/lists")) {
	if (file.isFile && new RegExp("^\\d*(ul|ol)_.+\\.txt$").test(file.name)) {
		files.push(file)
	}
}

const message = Deno.readTextFileSync("./src/motd.txt"),
	name = Deno.readTextFileSync("./src/name.txt"),
	time = Deno.readTextFileSync("./src/time.txt");

type ListType = "ul" | "ol"

let lists: {
	name: string,
	type: ListType,
	items: string[]
}[] = []

for (const file of files) {
	let type: ListType = file.name.split("ol_").length > 1 ? "ol" : "ul",
		name = file.name.split(type+"_")[1].split(".txt")[0];
	lists.push({
		name,
		type,
		items: Deno.readTextFileSync("./src/lists/"+file.name).split("\r\n")
	})
}

// compile takes a string, returns a function, that can be called with an object of variables.
Deno.writeTextFileSync("./src/index.html", compile(Deno.readTextFileSync("./src/index.pug"))({lists, message, name, time}))