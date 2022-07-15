import { Schema } from 'mongoose';

import { InternUser } from '../../interfaces/User';

const UserSchema = new Schema<InternUser>({
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: Number, required: true },
  id: { type: String, required: true },
});

export { UserSchema };
