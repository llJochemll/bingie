import * as sapper from "@sapper/app"; // eslint-disable-line import/no-unresolved

// Import material web components
import "@material/mwc-button";
import "@material/mwc-icon-button";
import "@material/mwc-top-app-bar-fixed"

sapper.start({
	target: document.querySelector("#sapper"),
});
