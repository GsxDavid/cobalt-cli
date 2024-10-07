export default function generateTitle() {
	const yellow = "\x1b[33m";
	const blue = "\x1b[34m";
	const reset = "\x1b[0m";

	console.log(`${yellow}-------------------------------------------${reset}`);
	console.log(`${blue} _____       _           _ _          _ _ `);
	console.log(`/  __ \\     | |         | | |        | (_)`);
	console.log(`| /  \\/ ___ | |__   __ _| | |_    ___| |_ `);
	console.log(`| |    / _ \\| '_ \\ / _\` | | __|  / __| | |`);
	console.log(`| \\__/\\ (_) | |_) | (_| | | |_  | (__| | |`);
	console.log(` \\____/\\___/|_.__/ \\__,_|_|\\__|  \\___|_|_|${reset}`);
	console.log(`${yellow}-------------------------------------------${reset}`);
}
