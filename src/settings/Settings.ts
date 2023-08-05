import {LanguageId} from "src/main";

/**
 * Interface that contains all the settings for the extension.
 */
export interface ExecutorSettings {
	lastOpenLanguageTab: LanguageId | undefined
	
	timeout: number;
	allowInput: boolean;
	wslMode: boolean;
	onlyCurrentBlock: boolean;
	nodePath: string;
	nodeArgs: string;
	jsInject: string;
	tsPath: string;
	tsArgs: string;
	tsInject: string;
	leanPath: string;
	leanArgs: string;
	leanInject: string;
	luaPath: string;
	luaArgs: string;
	luaInject: string;
	dartPath: string;
	dartArgs: string;
	dartInject: string;
	csPath: string;
	csArgs: string;
	csInject: string;
	pythonPath: string;
	pythonArgs: string;
	pythonEmbedPlots: boolean;
	pythonInject: string;
	shellPath: string;
	shellArgs: string;
	shellFileExtension: string;
	shellInject: string;
	batchPath: string;
	batchArgs: string;
	batchFileExtension: string;
	batchInject: string;
	groovyPath: string;
	groovyArgs: string;
	groovyFileExtension: string;
	groovyInject: string;
	golangPath: string,
	golangArgs: string,
	golangFileExtension: string,
	goInject: string;
	javaPath: string,
	javaArgs: string,
	javaFileExtension: string,
	javaInject: string;
	maxPrologAnswers: number;
	prologInject: string;
	powershellPath: string;
	powershellArgs: string;
	powershellFileExtension: string;
	powershellInject: string;
	powershellEncoding: BufferEncoding;
	octavePath: string;
	octaveArgs: string;
	octaveFileExtension: string;
	octaveInject: string;
	maximaPath: string;
	maximaArgs: string;
	maximaFileExtension: string;
	maximaInject: string;
	cargoPath: string;
	cargoEvalArgs: string;
	rustInject: string;
	cppRunner: string;
	cppInject: string;
	cppArgs: string;
	cppUseMain: boolean;
	clingPath: string;
	clingArgs: string;
	clingStd: string;
	rustFileExtension: string,
	RPath: string;
	RArgs: string;
	REmbedPlots: boolean;
	rInject: string;
	kotlinPath: string;
	kotlinArgs: string;
	kotlinFileExtension: string;
	kotlinInject: string;
	runghcPath: string;
	ghcPath: string;
	ghciPath: string;
	haskellInject: string;
	useGhci: boolean;
	mathematicaPath: string;
	mathematicaArgs: string;
	mathematicaFileExtension: string;
	mathematicaInject: string;
	scalaPath: string;
	scalaArgs: string;
	scalaFileExtension: string;
	scalaInject: string;
	racketPath: string;
	racketArgs: string;
	racketFileExtension: string;
	racketInject: string;
	fsharpPath: string;
	fsharpArgs: string;
	fsharpInject: "";
	fsharpFileExtension: string;
	cArgs: string;
	cUseMain: boolean;
	cInject: string;
	rubyPath: string;
	rubyArgs: string;
	rubyInject: string;
	sqlPath: string;
	sqlArgs: string;
	sqlInject: string;

	jsInteractive: boolean;
	tsInteractive: boolean;
	csInteractive: boolean;
	leanInteractive: boolean;
	luaInteractive: boolean;
	dartInteractive: boolean;
	pythonInteractive: boolean;
	cppInteractive: boolean;
	prologInteractive: boolean;
	shellInteractive: boolean;
	batchInteractive: boolean;
	bashInteractive: boolean;
	groovyInteractive: boolean;
	rInteractive: boolean;
	goInteractive: boolean;
	rustInteractive: boolean;
	javaInteractive: boolean;
	powershellInteractive: boolean;
	kotlinInteractive: boolean;
	mathematicaInteractive: boolean;
	haskellInteractive: boolean;
	scalaInteractive: boolean;
	racketInteractive: boolean;
	fsharpInteractive: boolean;
	cInteractive: boolean;
	rubyInteractive: boolean;
	sqlInteractive: boolean;
	octaveInteractive: boolean;
	maximaInteractive: boolean;
}


/**
 * The default settings for the extensions as implementation of the ExecutorSettings interface.
 */
export const DEFAULT_SETTINGS: ExecutorSettings = {
	lastOpenLanguageTab: undefined,
	
	timeout: 10000,
	allowInput: true,
	wslMode: false,
	onlyCurrentBlock: false,
	nodePath: "node",
	nodeArgs: "",
	jsInject: "",
	tsPath: "ts-node",
	tsArgs: "",
	tsInject: "",
	leanPath: "lean",
	leanArgs: "",
	leanInject: "",
	luaPath: "lua",
	luaArgs: "",
	luaInject: "",
	dartPath: "dart",
	dartArgs: "",
	dartInject: "",
	csPath: "dotnet-script",
	csArgs: "",
	csInject: "",
	pythonPath: "python",
	pythonArgs: "",
	pythonEmbedPlots: true,
	pythonInject: "",
	shellPath: "bash",
	shellArgs: "",
	shellFileExtension: "sh",
	shellInject: "",
	batchPath: "call",
	batchArgs: "",
	batchFileExtension: "bat",
	batchInject: "",
	groovyPath: "groovy",
	groovyArgs: "",
	groovyFileExtension: "groovy",
	groovyInject: "",
	golangPath: "go",
	golangArgs: "run",
	golangFileExtension: "go",
	goInject: "",
	javaPath: "java",
	javaArgs: "-ea",
	javaFileExtension: "java",
	javaInject: "",
	maxPrologAnswers: 15,
	prologInject: "",
	powershellPath: "powershell",
	powershellArgs: "-file",
	powershellFileExtension: "ps1",
	powershellInject: "$OutputEncoding = [console]::InputEncoding = [console]::OutputEncoding = New-Object System.Text.UTF8Encoding",
	powershellEncoding: "latin1",
	cargoPath: "cargo",
	cargoEvalArgs: "",
	rustInject: "",
	cppRunner: "cling",
	cppInject: "",
	cppArgs: "",
	cppUseMain: false,
	clingPath: "cling",
	clingArgs: "",
	clingStd: "c++17",
	rustFileExtension: "rs",
	RPath: "Rscript",
	RArgs: "",
	REmbedPlots: true,
	rInject: "",
	kotlinPath: "kotlinc",
	kotlinArgs: "-script",
	kotlinFileExtension: "kts",
	kotlinInject: "",
	runghcPath: "runghc",
	ghcPath: "ghc",
	ghciPath: "ghci",
	useGhci: false,
	haskellInject: "",
	mathematicaPath: "wolframscript",
	mathematicaArgs: "-file",
	mathematicaFileExtension: "wls",
	mathematicaInject: "",
	scalaPath: "scala",
	scalaArgs: "",
	scalaFileExtension: "scala",
	scalaInject: "",
	racketPath: "racket",
	racketArgs: "",
	racketFileExtension: "rkt",
	racketInject: "#lang racket",
	fsharpPath: "dotnet",
	fsharpArgs: "",
	fsharpInject: "",
	fsharpFileExtension: "fsx",
	cArgs: "",
	cUseMain: true,
	cInject: "",
	rubyPath: "ruby",
	rubyArgs: "",
	rubyInject: "",
	sqlPath: "psql",
	sqlArgs: "-d <database> -U <user> -f",
	sqlInject: "",
	octavePath: "octave",
	octaveArgs: "-q",
	octaveFileExtension: "m",
	octaveInject: "figure('visible','off')  # Necessary to embed plots",
	maximaPath: "maxima",
	maximaArgs: "-qb",
	maximaFileExtension: "mx",
	maximaInject: "",
	jsInteractive: true,
	tsInteractive: false,
	csInteractive: false,
	leanInteractive: false,
	luaInteractive: false,
	dartInteractive: false,
	pythonInteractive: true,
	cppInteractive: false,
	prologInteractive: false,
	shellInteractive: false,
	batchInteractive: false,
	bashInteractive: false,
	groovyInteractive: false,
	rInteractive: false,
	goInteractive: false,
	rustInteractive: false,
	javaInteractive: false,
	powershellInteractive: false,
	kotlinInteractive: false,
	mathematicaInteractive: false,
	haskellInteractive: false,
	scalaInteractive: false,
	fsharpInteractive: false,
	cInteractive: false,
	racketInteractive: false,
	rubyInteractive: false,
	sqlInteractive: false,
	octaveInteractive: false,
	maximaInteractive: false,
}
