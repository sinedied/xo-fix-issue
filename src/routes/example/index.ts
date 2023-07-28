import {type FastifyPluginAsync} from 'fastify';

const example: FastifyPluginAsync = async (fastify, options): Promise<void> => {
  fastify.get('/', async (request, reply) => 'this is an example');
};

export default example;
