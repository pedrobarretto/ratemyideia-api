export interface VotesList {
  userId: string;
  email: string;
}

export interface Ideia {
  upvotes: number;
  downvotes: number;
  text: string;
  createdAt: Date;
  id: string;
  userId: string;
  votes: VotesList[];
}

export interface VotesDto {
  id: string;
  upvotes: number;
  downvotes: number;
}
