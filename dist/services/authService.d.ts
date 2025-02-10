interface AuthResponse {
    user: {
        id: string;
        email: string;
        role: string;
        hasPaid: boolean;
    };
    token: string;
}
export declare class AuthService {
    private static readonly TOKEN_EXPIRATION;
    private static createToken;
    private static formatUserResponse;
    static register(email: string, password: string): Promise<AuthResponse>;
    static login(email: string, password: string): Promise<AuthResponse>;
}
export {};
