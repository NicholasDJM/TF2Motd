import lazyload from "vanilla-lazyload";
import highres from "./blackboard.webp";
import { Moon } from "https://cdn.jsdelivr.net/npm/lunarphase-js@2.0.1/dist/index.es.js";

const background = document.querySelector(".background")
if (background) {
	background.dataset.src = highres;
}

new lazyload({});

const months = {
		january: 0,
		february: 1,
		march: 2,
		april: 3,
		may: 4,
		juno: 5,
		july: 6,
		august: 7,
		september: 8,
		october: 9,
		november: 10,
		december: 11
	},
	title = document.getElementById("title"),
	original = "Welcome to " + (title.dataset.name || "My Server"),
	day = new Date().getDay();
function set(message) {
	title.innerHTML = original+" and "+message
}
if (title) {
	switch (new Date().getMonth()) {
		case months.february: {
			if (day === 13) { // February 14th
				set("Happy Valentine's Day!")
			}
		}
		case months.april: {
			if (day === 0) { // April 1st
				set("Happy April Fools!")
			}
		}
		case months.october: {
			if (day === 9) { // October 10th
				set("Happy Birthday Team Fortress 2!")
			} else {
				set("Happy Halloween!")
			}
		}
		case months.december: {
			if (day === 30) { // December 31st
				set("Happy New Year!")
			} else {
				set("Merry Smissmas!")
			}
		}
		case months.august: {
			if (day === 23) { //August 24th
				set("Happy Birthday Team Fortress!")
			}
		}
		default: {
			if (Moon.lunarPhase() === "Full") {
				set("enjoy the full moon!")
			}
		}
	}
}