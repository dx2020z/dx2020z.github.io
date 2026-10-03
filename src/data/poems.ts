interface PoemFilm {
  title: string;
  date: string;
  video: string | null;
  poster: string | null;
}
export const poems: Record<string, PoemFilm> = {
  zichao: {
    title: '自嘲',
    date: '2026.06.11',
    video: '/videos/zichao.mp4',
    poster: '/videos/zichao-poster.jpg',
  },
  rose: {
    title: '玫瑰少年',
    date: '2022.10.01',
    video: '/videos/rose.mp4',
    poster: '/videos/rose-poster.jpg',
  },
};
