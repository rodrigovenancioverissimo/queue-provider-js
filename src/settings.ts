const settings = {
  environment:
    process.env.QPJS_NODE_ENV || process.env.NODE_ENV || 'development',
  aws: {
    sqs: {
      endpoint:
        process.env.QPJS_AWS_ENDPOINT ||
        process.env.AWS_ENDPOINT ||
        'http://localstack:4566',
    },
    credentials: {
      accessKeyId:
        process.env.QPJS_AWS_ACCESS_KEY_ID ||
        process.env.AWS_ACCESS_KEY_ID ||
        'accessKeyId',
      secretAccessKey:
        process.env.QPJS_AWS_SECRET_ACCESS_KEY ||
        process.env.AWS_SECRET_ACCESS_KEY ||
        'secretAccessKey',
    },
    region:
      process.env.QPJS_AWS_REGION || process.env.AWS_REGION || 'us-east-1',
    accountId:
      process.env.QPJS_AWS_ACCOUNT_ID ||
      process.env.AWS_ACCOUNT_ID ||
      '000000000000',
  },
};

export default settings;
