import { Request, Response } from "express";
import { loginService } from "../services/index";
import Login  from "../models/login";
import AuthMiddleware from "../Middleware/AuthMiddleware";
export class LoginController {

    public async createUser(req: Request, res: Response): Promise<Response<any, Record<string, any>> | void> {
        try{
            const { name, email, dateOfBirth, password} = req.body;

            if (!name || !email || !dateOfBirth || !password) {
                return res.status(400).send("All fields are required");
            }
            const userExist = await Login.findOne({ email: email})
            if(userExist){
                return res.status(422).send("There is already a user registered with this email");
            }
            const user = await loginService.createUser({
                name,
                email,
                dateOfBirth,
                password,
            });    
            res.status(200).json(user);
        }catch(error){
            console.error("Error creating user", error);
            res.status(500).send("Internal server error");
        }
    }

    public async login(req: Request, res: Response): Promise<Response<any, Record<string, any>> | void> {
        try{
            const { email, password } = req.body;
            const token = await loginService.authenticateLogin(email, password);
            return res.status(200).json({ token });

        }catch(error: any){
            console.error("Error fetching user", error);
            if (error.message === "User not found") {
                return res.status(404).json({ error: "User not found" });
              } else if (error.message === "Invalid Email or Password") {
                return res.status(401).json({ error: "Invalid email or password" });
              } else {
                return res.status(500).json({ error: "Internal server error" });
              }
        }
    }

    public async getUser(req: Request, res: Response) {
        try {
            const token = req.headers.authorization?.split(" ")[1];
            if(token){
                const user = await loginService.getUser(token);
                return res.status(200).json(user);
            }
        } catch (error: any) {
          console.error("Error fetching user", error)
            return res.status(500).json({ error: "Internal server error" });
        }
      } 

}



