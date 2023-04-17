import Email from "../models/email";

export class EmailRepository {

  public async saveEmail(email: any): Promise<any> {
    const newEmail = new Email(email);
    const savedEmail = await newEmail.save();
    return savedEmail;
  }

  public async getAllEmails(): Promise<any> {
    const emails = await Email.find().exec();
    return emails;
  }
}
