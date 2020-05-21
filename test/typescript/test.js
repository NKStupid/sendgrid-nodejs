const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);


sgMail.send({
  to: 'joseph.siyi@gmail.com',
  from: 'sender@example.org',
  subject: 'Hello manual content',
  content: [
    {
      type: 'text/html',
      value: '<p>Hello HTML world!</p>',
    },
    {
      type: 'text/plain',
      value: 'Hello plain world!',
    },
  ],
});

sgMail.send({
  to: 'joseph.siyi@gmail.com',
  from: 'sender@example.org',
  subject: 'Hello custom header',
  html: '<p>Some email content</p>',
  headers: {
    'X-CustomHeader': 'Custom header value',
  },
});

sgMail.send({
  to: 'joseph.siyi@gmail.com',
  from: 'sender@example.org',
  subject: 'Hello delayed email',
  html: '<p>Some email content</p>',
  sendAt: 1500077141,
});

sgMail.send({
  to: 'joseph.siyi@gmail.com',
  from: 'sender@example.org',
  subject: 'Hello email with categories',
  html: '<p>Some email content</p>',
  categories: [
    'transactional', 'customer', 'weekly',
  ],
});

sgMail.send({
  to: 'joseph.siyi@gmail.com',
  from: 'sender@example.org',
  subject: 'Hello email with categories',
  html: '<p>Some email content</p>',
  category: 'transactional',
});

sgMail.send({
  to: 'joseph.siyi@gmail.com',
  cc: 'chenkiegcp1@gmail.com',
  bcc: ['me@example.org', 'you@example.org'],
  from: 'sender@example.org',
  replyTo: 'othersender@example.org',
  subject: 'Hello world',
  text: 'Hello plain world!',
  html: '<p>Hello HTML world!</p>',
  templateId: 'sendgrid-template-id',
  substitutionWrappers: ['{{', '}}'],
  substitutions: {
    name: 'Some One',
    id: '123',
  },
  attachments: [
    {
      content: 'Some attachment content',
      filename: 'some-attachment.txt',
    },
  ],
  categories: ['Transactional', 'My category'],
  sendAt: 1500077141,
  headers: {
    'X-CustomHeader': 'Custom header value',
  },
  sections: {},
  customArgs: {
    myCustomArg: 123,
  },
  batchId: 'sendgrid-batch-id',
  asm: {
    groupId: 1
  },
  ipPoolName: 'sendgrid-ip-pool-name',
  mailSettings: {},
  trackingSettings: {},
});
