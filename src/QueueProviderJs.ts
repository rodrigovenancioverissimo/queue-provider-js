import QueueProviderSqs from './implementations/sqs/QueueProviderSqs';
import settings from './settings';

let QueueProviderJs;

switch (settings.selector) {
  case 'sqs':
    QueueProviderJs = QueueProviderSqs;
  default:
    QueueProviderJs = QueueProviderSqs;
}

export default QueueProviderJs;
