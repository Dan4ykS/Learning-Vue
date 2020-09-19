export interface RootState {}

export type postWithPhoto = {
  id: number;
  title: string;
  imgSrc: string;
};

export interface ISPhotos {
  posts: postWithPhoto[];
  loading: boolean;
}

export type task = {
  id: number;
  completed: boolean;
  task: string;
  editable: boolean;
};

export interface IUpdateTask {
  id: number;
  updatedTask: string;
}

export interface ISTasks {
  tasks: task[];
}

export type post = {
  id: number;
  title: string;
  body: string;
};

export type postFromServer = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

export interface ISPosts {
  posts: post[];
  loading: boolean;
}
