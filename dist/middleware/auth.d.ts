import { Response, NextFunction } from 'express';
import { AuthRequest } from '../types/auth';
export declare const auth: (req: AuthRequest, res: Response, next: NextFunction) => Promise<void>;
