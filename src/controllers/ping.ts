import { Request, Response, NextFunction } from "express"

const ping = async (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json('pong');
};

export default { ping }