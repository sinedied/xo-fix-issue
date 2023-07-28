import process from 'node:process';
import path from 'node:path';
import fp from 'fastify-plugin';

export interface SomeSupport {
  test: string;
}

// The use of fastify-plugin is required to be able
// to export the decorators to the outer scope
export default fp(async (fastify, options) => {
  console.log(path.resolve(process.cwd(), '../../.env'));

  fastify.decorate('someSupport', {
    test: 'test',
  });
});

// When using .decorate you have to specify added properties for Typescript
declare module 'fastify' {
  export interface FastifyInstance {
    someSupport: SomeSupport;
  }
}
