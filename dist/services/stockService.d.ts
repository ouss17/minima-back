export declare class StockService {
    static getAll(userId: string): Promise<(import("mongoose").Document<unknown, {}, import("../models/Stock").IStock> & import("../models/Stock").IStock & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    static create(stockData: any, userId: string): Promise<import("mongoose").Document<unknown, {}, import("../models/Stock").IStock> & import("../models/Stock").IStock & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    static update(id: string, stockData: any, userId: string): Promise<(import("mongoose").Document<unknown, {}, import("../models/Stock").IStock> & import("../models/Stock").IStock & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    static delete(id: string, userId: string): Promise<(import("mongoose").Document<unknown, {}, import("../models/Stock").IStock> & import("../models/Stock").IStock & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    static getLowStock(userId: string): Promise<(import("mongoose").Document<unknown, {}, import("../models/Stock").IStock> & import("../models/Stock").IStock & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    static getAnalytics(userId: string): Promise<{
        totalItems: number;
        totalValue: any;
        lowStockItems: number;
    }>;
}
