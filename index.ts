import { Command } from "commander";
import createCommand from "./src/commands/create";
import generateTitle from "./src/utils/asciiGenerator";

const program = new Command();

generateTitle();

program.addCommand(createCommand);

program
	.name("Cobalt")
	.description("command-line tool for rapidly setting up React projects with a modern stack")
	.version("1.0.0");

program.parse(process.argv);
