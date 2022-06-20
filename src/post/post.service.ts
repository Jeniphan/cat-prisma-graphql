import { Injectable } from '@nestjs/common';
import { Post, User } from '@prisma/client';
import { NewPost, NewUser, UpdatePost, UpdateUser } from 'src/graphql';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) { }

  // Get a single post
  async post(id: string): Promise<Post | null> {
    return this.prisma.post.findUnique({
      where: {
        id: parseInt(id),
      },
      select: {
        id: true,
        title: true,
        content: true,
        published: true,
        author: true,
        authorId: true
      }
    });
  }

  // Get multiple posts
  async posts(): Promise<Post[]> {
    return this.prisma.post.findMany({
      select: {
        id: true,
        title: true,
        content: true,
        published: true,
        authorId: true
      }
    });
  }

  // Get a single user
  async user(id: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: {
        id: parseInt(id),
      },
      select: {
        id: true,
        name: true,
        email: true,
        posts: true
      }
    });
  }

  // Get multiple users
  async users(): Promise<User[]> {
    return this.prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        posts: true
      }
    });
  }

  // Create a post
  async createPost(input: NewPost): Promise<Post> {
    return this.prisma.post.create({
      data: input,
    });
  }

  // Create a user
  async createUser(input: NewUser): Promise<User> {
    return this.prisma.user.create({
      data: input,
    });
  }

  // Update a post
  async updatePost(params: UpdatePost): Promise<Post> {
    const { id, published, title, content } = params;
    return this.prisma.post.update({
      where: {
        id: parseInt(id),
      },
      data: {
        ...(published && { published }),
        ...(title && { title }),
        ...(content && { content }),
      },
    });
  }

  // delete a post
  async deletePost(id: string): Promise<Post> {
    return this.prisma.post.delete({
      where: {
        id: parseInt(id),
      },
    });
  }

  // Update a user
  async updateUser(params: UpdateUser): Promise<User> {
    const { id, email, name } = params;
    return this.prisma.user.update({
      where: {
        id: parseInt(id),
      },
      data: {
        ...(email && { email }),
        ...(name && { name }),
      },
    });
  }

  // delete a user
  async deleteUser(id: string): Promise<User> {
    return this.prisma.user.delete({
      where: {
        id: parseInt(id),
      },
    });
  }
}