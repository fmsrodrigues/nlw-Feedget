import nodemailer from 'nodemailer';

import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "f8df2f3a9c2134",
    pass: "43e7726a536a81"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget<oi@feedget.com>',
      to: 'Filipe<filipe-nlw@feedget.com>',
      subject: subject,
      html: body
    });
  }
}