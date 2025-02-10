export declare class ProductService {
    static getAll(userId: string): Promise<(import("mongoose").Document<unknown, {}, import("../models/Product").IProduct> & import("../models/Product").IProduct & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    static create(productData: any, userId: string): Promise<import("mongoose").Document<unknown, {}, import("../models/Product").IProduct> & import("../models/Product").IProduct & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    static update(id: string, productData: any, userId: string): Promise<(import("mongoose").Document<unknown, {}, import("../models/Product").IProduct> & import("../models/Product").IProduct & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    static delete(id: string, userId: string): Promise<(import("mongoose").Document<unknown, {}, import("../models/Product").IProduct> & import("../models/Product").IProduct & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
}
