# typescript_basics

This readme file is going to cover all steps, with descriptions, taken while testing Typescript functionalities.

## Setting up typescript environment

npm install -g typescript ts-node
This installs Typescript globaly, as well as ts node that is going to be used for ts code compiling. After completing installation, we can use command for compiling ts code into js code: "tsc" (--help).

npm init -y
Generates default package.json file in project directory.
npm install axios
Module for fetching data (get, post...).
npm install -g parcel-bundler
Tool to help run ts in browser.
parcel index.html
This starts web server, replaces ts files inside index.html with js files and servers index.html.

tsc --init
This command creates tsconfig.json file. We can edit that file and set various parameters. Here we uncomented root dir i out dir, and set values to src i build.

tsc -w
This starts compiler in watch mode, that continuously compiles ts file whenever we make change.

npm install nodemon concurrently
Installs nodemon - web server that reloads on any change in files. Concurently allows to run multiple scripts at the same time.
Scripts are created in script part of package.json file. Start scripts starts all the scripts that begin with "start". This setting will compile and rerun code on any change.

## Coding

All current code is going to be created into index.ts file, while completed excercises will be renamed and stored into folder "completed".
import axios from "axios"; - importing modules in ts.

Ts files can't be run from node environmet, they have to be compiled into js files first.
tsc index.ts
This command creates index.js file into same folder as index.ts, with js code, and this file can be run from node.
To make this process easier, we installed ts-node package.
ts-node index.ts
This command is equivalent to "tsc index.ts" and "node index.js", but it doesn't compile code into js file, it only executes ts code.

### Types

Primitive types: number, string boolean, symbol, voild, null, undefined.
Object types: function, class, array, object.
It is possible to declare multiple types for variable. For example, if we are going to allow that one variable can be assigned with boolean and number values, we need to declare it like: "let variable : number | boolean";

#### Type inference

If variable declaration and initialisation (assignment) are on the same line, type will be automaticaly recognised.

### Type definitions

All packages have to have type definition files installed. They are part of DefinitelyTyped repository/library on github.

### Interfaces and Classes

TS uses interfaces to assure correct data. If some object has to implement interface it is declared like "objectName as interfaceName".
Instances are declared like let instanceName: ClassName = new ClassName();
Adding keyword "public" inside constructor for any property is equivalent to declaring that property and initialize it with "this.prop = prop". constructor (public prop);
