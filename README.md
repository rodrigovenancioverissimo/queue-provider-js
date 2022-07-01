# Queue Provider

Provider inicialmente com suporte ao SQS.
A ideia é reunir todas as implementações de fila em um único lugar para facilitar a manutenção. Sendo compatível com qualquer fila.

Suporte ao Node.js `14.x`, `16.x`, `18.x`.

Suporte as implementações:
- [x] SQS
- [ ] BullMQ
- [ ] RabbitMQ

## Uso
A seguir, temos um exemplo de uso do provider com SQS. As configurações até o momento são passadas via variável de ambiente.

```TypeScript
import QueueProviderSqs from 'queue-provider-js';

async function main() {
  const queueProvider = new QueueProviderSqs();
  const queueName = 'my-queue';
  await queueProvider.createQueue({ queueName });
  await queueProvider.sendMessage({ queueName, body: { key: 'value' } });
  const consumer = queueProvider.createConsumer({
    queueName,
    handleMessage: (message) => {
      console.log(message);
    },
  });
  consumer.start();
}
main();
```

## Enviromments

A seguir temos todas as variáveis de ambiente. Caso o nome padrão esteja
conflitando com alguma outra variável é possível usar o prefixo `QPJS_`

|                       | Default Value            |
| --------------------- | ------------------------ |
| NODE_ENV              | 'development'            |
| SELECTOR              | 'sqs'                    |
| AWS_ENDPOINT          | 'http://localstack:4566' |
| AWS_ACCESS_KEY_ID     | 'accessKeyId'            |
| AWS_SECRET_ACCESS_KEY | 'secretAccessKey'        |
| AWS_REGION            | 'us-east-1'              |
| AWS_ACCOUNT_ID        | 'accountId'              |
