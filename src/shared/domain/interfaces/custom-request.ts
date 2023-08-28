import { Request } from 'express';

export interface ITokenPayload {
	ipAddress: string;
	userId: number;
	userUniqueId: string;
	userEmail: string;
	internalUserId: number;
	internalUserEmail: string;
}

export interface ICustomRequest extends Request {
	countryId: string | null;
	regionId: string | null;
	appName: string | null;
	appVersion: string | null;
	appModule: string | null;
	requestId?: string;
	accessToken: string | null;
	tokenPayload?: ITokenPayload;
}
