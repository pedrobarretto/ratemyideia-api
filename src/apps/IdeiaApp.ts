import { v4 as uuid } from 'uuid';

import { RateMyIdeiaModel } from '../database/Ideias/ideias.model';
import { Ideia } from '../interfaces/Ideia';

class IdeiaApp {
  async create(ideia: Ideia): Promise<Ideia> {
    await RateMyIdeiaModel.create(ideia);
    return ideia;
  }

  defaultIdeia(): Ideia {
    return {
      createdAt: new Date(),
      downvotes: 0,
      upvotes: 0,
      id: uuid(),
      text: '',
    };
  }
}

export const ideiaApp = new IdeiaApp();
