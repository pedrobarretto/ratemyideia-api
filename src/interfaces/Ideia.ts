export interface Ideia {
  upvotes: number;
  downvotes: number;
  text: string;
  createdAt: Date;
  id: string;
  userId: string;
}

export interface VotesDto {
  id: string;
  upvotes: number;
  downvotes: number;
}
