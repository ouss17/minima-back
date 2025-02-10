import { ISale } from '../models/Sale';
export declare class SaleService {
    static getAll(userId: string): Promise<ISale[]>;
    static create(saleData: any, userId: string): Promise<ISale>;
    static update(id: string, saleData: any, userId: string): Promise<ISale | null>;
    static updateDecStatus(id: string, userId: string): Promise<ISale | null>;
    static delete(id: string, userId: string): Promise<ISale | null>;
}
