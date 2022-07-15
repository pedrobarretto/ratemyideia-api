import { InternUser } from '../../interfaces/User';

export interface UserDocument extends InternUser, Document {}

export type UserModel = UserDocument;
