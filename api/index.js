'use strict'

const fastify = require('fastify')()
const drugsData = require('./drugs-data.json');

fastify.decorate('notFound', (request, reply) => {
  reply.code(404).type('text/html').send('Not Found')
})

fastify.setNotFoundHandler(fastify.notFound);

const schema = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
          },
          'package': {
            type: 'string'
          },
          ean: {
            type: 'number'
          }
        }
      }
    }
  }
}

fastify.get('/:ean', schema, function (req, reply) {
  const ean = req.params.ean;
  const drugData = drugsData[ean];

  if (!drugData) {
    return fastify.notFound(req, reply);
  }

  reply.send({
    name: drugData.name,
    'package': drugData.package,
    ean: drugData.ean
  });
})

fastify.listen(3000);

console.log('Listening on 3000');