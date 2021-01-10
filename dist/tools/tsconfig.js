"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tsconfig = {
    "compilerOptions": {
        /* Visit https://aka.ms/tsconfig.json to read more about this file */
        /* Basic Options */
        // "incremental": true,                   /* Enable incremental compilation */
        "target": "es6",
        "module": "commonjs",
        // "lib": [],                             /* Specify library files to be included in the compilation. */
        // "allowJs": true,                       /* Allow javascript files to be compiled. */
        // "checkJs": true,                       /* Report errors in .js files. */
        // "jsx": "preserve",                     /* Specify JSX code generation: 'preserve', 'react-native', or 'react'. */
        // "declaration": true,                   /* Generates corresponding '.d.ts' file. */
        // "declarationMap": true,                /* Generates a sourcemap for each corresponding '.d.ts' file. */
        "sourceMap": true,
        // "outFile": "./",                       /* Concatenate and emit output to single file. */
        "outDir": "./dist",
        // "rootDir": "./",                       /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */
        // "composite": true,                     /* Enable project compilation */
        // "tsBuildInfoFile": "./",               /* Specify file to store incremental compilation information */
        // "removeComments": true,                /* Do not emit comments to output. */
        // "noEmit": true,                        /* Do not emit outputs. */
        // "importHelpers": true,                 /* Import emit helpers from 'tslib'. */
        // "downlevelIteration": true,            /* Provide full support for iterables in 'for-of', spread, and destructuring when targeting 'ES5' or 'ES3'. */
        // "isolatedModules": true,               /* Transpile each file as a separate module (similar to 'ts.transpileModule'). */
        /* Strict Type-Checking Options */
        "strict": true,
        // "noImplicitAny": true,                 /* Raise error on expressions and declarations with an implied 'any' type. */
        // "strictNullChecks": true,              /* Enable strict null checks. */
        // "strictFunctionTypes": true,           /* Enable strict checking of function types. */
        // "strictBindCallApply": true,           /* Enable strict 'bind', 'call', and 'apply' methods on functions. */
        // "strictPropertyInitialization": true,  /* Enable strict checking of property initialization in classes. */
        // "noImplicitThis": true,                /* Raise error on 'this' expressions with an implied 'any' type. */
        // "alwaysStrict": true,                  /* Parse in strict mode and emit "use strict" for each source file. */
        /* Additional Checks */
        // "noUnusedLocals": true,                /* Report errors on unused locals. */
        // "noUnusedParameters": true,            /* Report errors on unused parameters. */
        // "noImplicitReturns": true,             /* Report error when not all code paths in function return a value. */
        // "noFallthroughCasesInSwitch": true,    /* Report errors for fallthrough cases in switch statement. */
        /* Module Resolution Options */
        "moduleResolution": "node",
        "baseUrl": "./src",
        // "paths": {},                           /* A series of entries which re-map imports to lookup locations relative to the 'baseUrl'. */
        // "rootDirs": [],                        /* List of root folders whose combined content represents the structure of the project at runtime. */
        // "typeRoots": [],                       /* List of folders to include type definitions from. */
        // "types": [],                           /* Type declaration files to be included in compilation. */
        // "allowSyntheticDefaultImports": true,  /* Allow default imports from modules with no default export. This does not affect code emit, just typechecking. */
        "esModuleInterop": true,
        // "preserveSymlinks": true,              /* Do not resolve the real path of symlinks. */
        // "allowUmdGlobalAccess": true,          /* Allow accessing UMD globals from modules. */
        /* Source Map Options */
        // "sourceRoot": "",                      /* Specify the location where debugger should locate TypeScript files instead of source locations. */
        // "mapRoot": "",                         /* Specify the location where debugger should locate map files instead of generated locations. */
        // "inlineSourceMap": true,               /* Emit a single file with source maps instead of having a separate file. */
        // "inlineSources": true,                 /* Emit the source alongside the sourcemaps within a single file; requires '--inlineSourceMap' or '--sourceMap' to be set. */
        /* Experimental Options */
        // "experimentalDecorators": true,        /* Enables experimental support for ES7 decorators. */
        // "emitDecoratorMetadata": true,         /* Enables experimental support for emitting type metadata for decorators. */
        /* Advanced Options */
        "skipLibCheck": true,
        "forceConsistentCasingInFileNames": true /* Disallow inconsistently-cased references to the same file. */
    },
    "include": ["src"],
    "exclude": ["node_modules"]
};
exports.tsconfig = tsconfig;
//# sourceMappingURL=tsconfig.js.map