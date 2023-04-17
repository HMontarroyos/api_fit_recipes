import { Email } from "../models/email";
import { EmailRepository } from "../repository/index";

class EmailService {
  private emailRepository: EmailRepository;

  constructor() {
    this.emailRepository = new EmailRepository();
  }

  public async saveEmail(email: Email): Promise<Email> {
    const newEmail = await this.emailRepository.saveEmail(email);
    return newEmail;
  }

  public async getAllEmails(): Promise<Email[]> {
    const emails = await this.emailRepository.getAllEmails();
    return emails;
  }
}

export const emailService = new EmailService();
