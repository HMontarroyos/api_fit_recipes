import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

class AuthMiddleware {
static authenticate(req: Request, res: Response, next: NextFunction): void {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        res.status(401).json({ error: "Missing or invalid authorization header" })
        return
    }
    jwt.verify(token, "process.env.JWT_SECRET", (error: any, decoded: any) => {
      if (error) {
        console.error("Error verifying JWT", error);
        return  res.status(401).json({ error: "Unauthorized" });
      }

      next();
    });
  } 
}


export default AuthMiddleware;
