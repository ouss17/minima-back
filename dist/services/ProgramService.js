"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgramService = void 0;
// services/programService.ts
const Program_1 = require("../models/Program");
class ProgramService {
    static async getAll(userId) {
        return await Program_1.Program.find({ userId }).sort({ createdAt: -1 });
    }
    static async create(programData, userId) {
        try {
            const program = new Program_1.Program({
                userId,
                days: programData
            });
            return await program.save();
        }
        catch (error) {
            throw error;
        }
    }
    static async update(id, programData, userId) {
        try {
            return await Program_1.Program.findOneAndUpdate({ _id: id, userId }, { days: programData }, { new: true });
        }
        catch (error) {
            throw error;
        }
    }
    static async delete(id, userId) {
        return await Program_1.Program.findOneAndDelete({ _id: id, userId });
    }
}
exports.ProgramService = ProgramService;
//# sourceMappingURL=ProgramService.js.map