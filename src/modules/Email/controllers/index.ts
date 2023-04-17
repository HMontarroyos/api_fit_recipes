import { Request, Response } from "express";
import { Email } from "../models/email";
import { emailService } from "../services/index";


export class EmailController {

  public async saveEmail(req: Request, res: Response): Promise<void> {
    try {
        const emailData: Email = req.body; 
        await emailService.saveEmail(emailData); 
        res.status(200).send("E-mail saved successfully");
      } catch (error) {
        console.error("Error while saving e-mail", error);
        res.status(500).send("Internal server error");
      }
  }

  public async getAllEmails(req: Request, res: Response): Promise<void> {
    try {
      const emails: Email[] = await emailService.getAllEmails();
      res.status(200).json(emails);
    } catch (error) {
      console.error("Error while fetching emails", error);
      res.status(500).send("Internal server error");
    }
  }

 
}
