import { IProgram } from '../models/Program';
export declare class ProgramService {
    static getAll(userId: string): Promise<(import("mongoose").Document<unknown, {}, IProgram> & IProgram & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    static create(programData: any, userId: string): Promise<import("mongoose").Document<unknown, {}, IProgram> & IProgram & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    static update(id: string, programData: any, userId: string): Promise<(import("mongoose").Document<unknown, {}, IProgram> & IProgram & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    static delete(id: string, userId: string): Promise<(import("mongoose").Document<unknown, {}, IProgram> & IProgram & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
}
