import { createServer } from 'node:http'

async function handler(request, response) {
 
}

const server = createServer(handler)
.listen(3000)
.on('listening', () => console.log('server running at 3000')) 

