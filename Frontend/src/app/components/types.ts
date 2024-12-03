export interface Post {
    id: string;
    authorUsername: string; 
    title: string;
    content: string;
    date: string;
}

export interface Comment {
  id: string;
  authorUsername: string;
  content: string;
  date: string;
  postId: string;
}