// Original: https://github.com/sveltejs/kit/blob/master/packages/adapter-vercel/index.js

import { writeFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import esbuild from 'esbuild';

export default function () {
	/** @type {import('@sveltejs/kit').Adapter} */
	const adapter = {
		name: '@sveltejs/adapter-vercel',

		async adapt({ utils }) {
			const dir = '.vercel_build_output';
			utils.rimraf(dir);

			// const files = fileURLToPath(new URL('./files', import.meta.url));
			const files = fileURLToPath(new URL('./node_modules/@sveltejs/adapter-vercel/files', import.meta.url));

			const dirs = {
				static: join(dir, 'static'),
				lambda: join(dir, 'functions/node/render')
			};

			// TODO ideally we'd have something like utils.tmpdir('vercel')
			// rather than hardcoding '.svelte-kit/vercel/entry.js', and the
			// relative import from that file to output/server/app.js
			// would be controlled. at the moment we're exposing
			// implementation details that could change
			utils.log.minor('Generating serverless function...');
			utils.copy(join(files, 'entry.js'), '.svelte-kit/vercel/entry.js');

			await esbuild.build({
				entryPoints: ['.svelte-kit/vercel/entry.js'],
				outfile: join(dirs.lambda, 'index.js'),
				bundle: true,
				platform: 'node',
				// NOTE: Mark chrome-aws-lambda as external, because it depends on its
				//       local file structure. We also mark lambdafs which is depended
				//       by chrome-aws-lambda.
				external: ['chrome-aws-lambda', 'lambdafs']
			});

			writeFileSync(join(dirs.lambda, 'package.json'), JSON.stringify({ type: 'commonjs' }));

			// NOTE: Copy above externals to node_modules in the Lambda's root dir.
			utils.copy('node_modules/chrome-aws-lambda', join(dirs.lambda, 'node_modules/chrome-aws-lambda'));
			utils.copy('node_modules/lambdafs', join(dirs.lambda, 'node_modules/lambdafs'));

			utils.log.minor('Prerendering static pages...');
			await utils.prerender({
				dest: dirs.static
			});

			utils.log.minor('Copying assets...');
			utils.copy_static_files(dirs.static);
			utils.copy_client_files(dirs.static);

			utils.log.minor('Writing routes...');
			utils.copy(join(files, 'routes.json'), join(dir, 'config/routes.json'));
		}
	};

	return adapter;
}
