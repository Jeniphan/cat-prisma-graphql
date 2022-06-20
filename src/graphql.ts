
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class NewUser {
    email: string;
    name: string;
}

export class NewPost {
    title: string;
    content: string;
    authorId: number;
}

export class UpdateUser {
    id: string;
    email: string;
    name: string;
}

export class UpdatePost {
    id: string;
    published?: Nullable<boolean>;
    title?: Nullable<string>;
    content?: Nullable<string>;
}

export class Post {
    id: string;
    title: string;
    content: string;
    published: boolean;
    author: User;
    authorId: number;
}

export class User {
    id: string;
    email: string;
    name: string;
    posts?: Nullable<Post[]>;
}

export abstract class IQuery {
    abstract posts(): Post[] | Promise<Post[]>;

    abstract users(): User[] | Promise<User[]>;

    abstract post(id: string): Nullable<Post> | Promise<Nullable<Post>>;

    abstract user(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    abstract createUser(input?: Nullable<NewUser>): User | Promise<User>;

    abstract updateUser(input?: Nullable<UpdateUser>): Nullable<User> | Promise<Nullable<User>>;

    abstract deleteUser(id: string): Nullable<User> | Promise<Nullable<User>>;

    abstract createPost(input?: Nullable<NewPost>): Post | Promise<Post>;

    abstract updatePost(input?: Nullable<UpdatePost>): Nullable<Post> | Promise<Nullable<Post>>;

    abstract deletePost(id: string): Nullable<Post> | Promise<Nullable<Post>>;
}

type Nullable<T> = T | null;
