import figlet from 'figlet';

const serve = Bun.serve({
	port: 3000,
	fetch () {
		const body = figlet.textSync('Argos Bun!');
		return new Response(body);
	},
});

console.log(`Listening on http://localhost:${serve.port} ...`)
