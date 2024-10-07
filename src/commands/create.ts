import { checkbox, confirm, input, select } from "@inquirer/prompts";
import { Command } from "commander";

const createCommand = new Command("create").description("Crear un proyecto nuevo").action(async () => {
	const projectName = await input({ message: "¿Cuál es el nombre del proyecto?" });

	const react_options = await select({
		message: "Seleccione la plantilla que quiere utilizar.",
		choices: [
			{
				name: "React",
				value: "react",
				description: "Configura un proyecto de React básico",
			},
			{
				name: "React-Typescript",
				value: "react_typescript",
				description: "Configura un proyecto de React con Typescript",
			},
		],
	});

	const packages = await checkbox({
		message: "Seleccione los paquetes adicionales que desee instalar...",
		choices: [
			{ name: "Tailwind", value: "tailwind" },
			{ name: "Shadcn/ui", value: "shadcn" },
			{ name: "Axios", value: "axios" },
			{ name: "Jest", value: "jest" },
		],
	});

	console.log(`Se instalar las siguientes dependencias: ${packages}`);

	const confirmation = await confirm({ message: "Continuar?" });

	if (confirmation) {
		console.log(`${projectName} Creado correctamente!`);
	}
});

export default createCommand;
