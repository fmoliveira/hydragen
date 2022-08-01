#!/usr/bin/env node

const fs = require("fs")
const path = require("path")
const { spawn } = require("child_process")

const [command, ...args] = process.argv.slice(2)

switch (command) {
	case "generate":
		runGenerate()
		break

	case undefined:
		runIntrospection()
		break

	default:
		console.error(`Unknown command '${command}'`)
		process.exit(1)
}

async function runGenerate() {
	const [generator, action] = args

	if (!generator) {
		console.error("Please specify a generator to run")
		process.exit(1)
	}

	if (!action) {
		console.error("Please specify an action to run")
		process.exit(1)
	}

	await runCommand(`pnpm exec hygen ${generator} ${action}`)
}

async function runIntrospection() {
	const getFileName = (file) => path.basename(file, path.extname(file))
	const fileExists = (file) => fs.existsSync(getFileName(file))

	await checkInstalled("prettier", fileExists(".prettierrc"))
	await checkInstalled("lint-staged", fileExists(".lintstagedrc"))
}

async function checkInstalled(name, condition) {
	if (condition) {
		console.log(`${name} is already installed`)
	} else {
		await runCommand(`f generate setup ${name}`)
	}
}

async function runCommand(command) {
	return new Promise((resolve) => {
		try {
			console.log(`Running command '${command}'`)
			const [binExec, ...binArgs] = command.split(" ")
			const spawned = spawn(binExec, binArgs, {
				stdio: "inherit",
				stdin: "inherit",
			})
			spawned.on("exit", () => resolve())
		} catch (error) {
			console.error(`Failed to run '${command}'`)
			console.error(error)
			process.exit(1)
		}
	})
}
