import { Router, Response } from 'express';
import { auth } from '../middleware/auth';
import { MarketingService } from '../services/marketingService';
import { AuthRequest } from '../types/auth';

export const marketingRouter = Router();

marketingRouter.use(auth);

marketingRouter.get('/', async (req: AuthRequest, res: Response) => {
    try {
        const campaigns = await MarketingService.getAll(req.user!.userId);
        res.json(campaigns);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
});

marketingRouter.post('/', async (req: AuthRequest, res: Response) => {
    try {
        const campaign = await MarketingService.create(req.body, req.user!.userId);
        res.status(201).json(campaign);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message });
    }
});

marketingRouter.put('/:id', async (req: AuthRequest, res: Response) => {
    try {
        const campaign = await MarketingService.update(req.params.id, req.body, req.user!.userId);
        if (!campaign) {
            res.status(404).json({ error: 'Campaign not found' });
            return;
        }
        res.json(campaign);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message });
    }
});

marketingRouter.delete('/:id', async (req: AuthRequest, res: Response) => {
    try {
        const campaign = await MarketingService.delete(req.params.id, req.user!.userId);
        if (!campaign) {
            res.status(404).json({ error: 'Campaign not found' });
            return;
        }
        res.json({ message: 'Campaign successfully deleted' });
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
});