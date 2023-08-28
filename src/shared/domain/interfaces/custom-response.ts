export interface ICustomResponse<T = any> {
	message: string;
	data: T;
}
