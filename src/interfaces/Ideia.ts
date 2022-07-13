export interface Ideia {
  upvotes: number;
  downvotes: number;
  text: string;
  createdAt: Date;
  id: string;
}

export interface VotesDto {
  id: string;
  upvotes: number;
  downvotes: number;
}
