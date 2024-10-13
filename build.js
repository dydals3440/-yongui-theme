import esbuild from 'esbuild';

esbuild.build({
    entryPoints: ['./src/index.ts'],  // Change to your actual entry point
    bundle: true,
    outfile: './dist/index.js',
    format: 'esm',  // Output format is ES module
    platform: 'node',
    external: ['react'],  // Externalize dependencies if necessary
}).catch(() => process.exit(1));
