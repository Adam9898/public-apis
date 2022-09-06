export interface TvShow {
  score: string,
  show: {
    id: number,
    url: string,
    name: string,
    type: string,
    language: string,
    genres: string[],
    status: string,
    rating: {
      average: number
    },
    image: {
      original: string,
      medium: string
    } | null,
    summary: string;
  }
}
