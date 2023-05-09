import { Login } from "../models/login";
import { LoginRepository } from "../repository/index";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { config as dotenvConfig } from 'dotenv';
dotenvConfig();
class LoginService {
    private loginRepository: LoginRepository;
    constructor() {
    this.loginRepository = new LoginRepository();
    }

    //TODO? Ajustar o any do login
  public async createUser(login: any) {
    const hashedPassword = await bcrypt.hash(login.password, 10);
    const user = await this.loginRepository.createUser({
      ...login,
      password: hashedPassword,
    });
    return user;
  }

  public async authenticateLogin (email: string, password: string) {
    const user = await this.loginRepository.authenticateLogin(email);
    if (!user) {
      throw new Error("User not found");
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      throw new Error("Invalid Email or Password");
    }
    console.log("ENV", process.env.JWT_SECRET)
    const token = jwt.sign({ userId: user._id, email: user.email }, "process.env.JWT_SECRET", { expiresIn: "3d" });
    return token;
  }

  public async getUser(token: string) {
    const decoded =  jwt.verify(token, "process.env.JWT_SECRET") as { userId: string };
    const user = await this.loginRepository.getUserById(decoded.userId);
    return user;
  }
}

export const loginService = new LoginService();