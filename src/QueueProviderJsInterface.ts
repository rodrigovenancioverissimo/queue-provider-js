import SQS from 'aws-sdk/clients/sqs';
import { Consumer } from 'sqs-consumer';

export declare class QueueProviderJsInterface {
  sendMessage(params: SendMessage.Input): Promise<SendMessage.Output>;
  createQueue(params: CreateQueue.Input): Promise<CreateQueue.Output>;
  checkQueueExists(params: CheckQueueExists.Input): Promise<boolean>;
  createConsumer(params: CreateConsumer.Input): Promise<CreateConsumer.Output>;
  deleteQueue(params: DeleteQueue.Input): Promise<void>;
}

export namespace SendMessage {
  export type Input = {
    body: QueueBodyType;
    queueName: string;
  };
  export type Output = {
    id: string;
  };
  type QueueBodyType = JsonType | JsonType[];
  type JsonType = Object | string | number | boolean | null;
}

export namespace CreateQueue {
  export type Input = {
    queueName: string;
  };

  export type Output = {
    url: string;
  };
}

export namespace CheckQueueExists {
  export type Input = {
    queueName: string;
  };
}

export namespace CreateConsumer {
  export type Input = {
    queueName: string;
    handleMessage: InputHandlerMessage;
  };

  export type Output = Consumer;

  type InputHandlerMessage = (message: SQS.Message) => Promise<void>;
}

export namespace DeleteQueue {
  export type Input = {
    queueName: string;
  };
}
