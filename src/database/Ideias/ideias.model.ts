import { model } from 'mongoose';

import { IdeiaSchema } from './ideias.schema';
import { IdeiaDocument } from './ideias.type';

export const RateMyIdeiaModel = model<IdeiaDocument>('ideias', IdeiaSchema);
