import { model } from 'mongoose';

import { UserSchema } from './user.schema';
import { UserDocument } from './user.type';

export const UserModel = model<UserDocument>('users', UserSchema);
