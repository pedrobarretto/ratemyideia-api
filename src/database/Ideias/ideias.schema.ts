import { Schema } from 'mongoose';

import { Ideia } from '../../interfaces/Ideia';

export const IdeiaSchema = new Schema<Ideia>({
  text: { type: String, required: true },
  upvotes: { type: Number, required: true },
  downvotes: { type: Number, required: true },
  id: { type: String, required: true },
  userId: { type: String, required: true },
  createdAt: { type: Date, required: true },
});
