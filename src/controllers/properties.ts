import { Request, Response, NextFunction } from 'express'
import * as services from '../services/properties'

const save = async (req: Request, res: Response, next: NextFunction) => {
    const result = await services.save()
    return res.status(200).json(result)
}

const get = async (req: Request, res: Response, next: NextFunction) => {
    const result = await services.get()
    return res.status(200).json(result)
}

export default { save, get }